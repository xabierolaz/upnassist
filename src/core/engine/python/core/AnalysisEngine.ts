export const ANALYSIS_ENGINE_PY = `
import ast
import sys
import traceback
import builtins
import re
import difflib

# ==========================================
# 1. BASE DE CONOCIMIENTO (KNOWLEDGE BASE)
# ==========================================

ADVICE_DB = {
    # --- SYNTAX & BASIC STRUCTURE ---
    "missing_colon": { "pattern": r"expected ':'", "code": "AST_MISSING_COLON" },
    "leading_zeros": { "pattern": r"leading zeros in decimal integer", "code": "AST_LEADING_ZEROS" },
    "outside_loop": { "pattern": r"'break' outside loop|'continue' outside loop", "code": "AST_OUTSIDE_LOOP" },
    "unmatched_parenthesis": { "pattern": r"unexpected EOF while parsing|was never closed", "code": "AST_UNMATCHED_PAREN" },
    "indentation_error": { "pattern": r"unexpected indent|unindent does not match", "code": "AST_INDENTATION" },
    "assignment_in_condition": { "pattern": r"cannot assign to literal", "code": "AST_ASSIGN_COMPARE" },
    "eol_string": { "pattern": r"EOL while scanning string literal", "code": "AST_EOL_STRING" },
    "else_if_syntax": { "pattern": r"invalid syntax", "code": "RUNTIME_SYNTAX_INVALID" },

    # --- TYPE & ATTRIBUTE ERRORS ---
    "str_no_append": { "pattern": r"'str' object has no attribute 'append'", "code": "AST_STR_NO_APPEND" },
    "list_no_add": { "pattern": r"'list' object has no attribute 'add'", "code": "AST_LIST_NO_ADD" },
    "str_no_reverse": { "pattern": r"'str' object has no attribute 'reverse'", "code": "AST_STR_NO_REVERSE" },
    "type_error_math": { "pattern": r"unsupported operand type.*str.*int", "code": "AST_TYPE_MATH" },
    "not_subscriptable": { "pattern": r"object is not subscriptable", "code": "AST_NOT_SUBSCRIPTABLE" },
    "not_callable": { "pattern": r"object is not callable", "code": "AST_NOT_CALLABLE" },
    "arg_count": { "pattern": r"takes \\d+ positional arguments but \\d+ were given", "code": "AST_ARG_COUNT" },
    
    # --- IMMUTABILITY (Runtime Regex Fallback) ---
    "tuple_item_assign": { "pattern": r"'tuple' object does not support item assignment", "code": "AST_TUPLE_ITEM_ASSIGN" },
    "str_item_assign": { "pattern": r"'str' object does not support item assignment", "code": "AST_STR_ITEM_ASSIGN" },

    # --- RUNTIME ---
    "zero_division": { "code": "AST_ZERO_DIV" },
    "module_not_found": { "code": "AST_MODULE_NOT_FOUND" },
    "recursion_error": { "code": "AST_RECURSION" }
}

# ==========================================
# 2. LINTER ESTÁTICO (AST VISITOR)
# ==========================================

class ExpertLinter(ast.NodeVisitor):
    def __init__(self):
        self.warnings = []
        self.stats = {"loops": 0, "conditionals": 0, "functions": 0, "classes": 0, "returns": 0}
        self.defined_funcs = set()
        self.defined_vars = set()
        self.shadowed_builtins = []
        self.mutable_defaults = []
        
    def add_warning(self, code, params=None, line=None):
        warn = {"code": code, "params": params or {}}
        if line:
            warn["line"] = line
        self.warnings.append(warn)

    def visit_ClassDef(self, node):
        self.stats["classes"] += 1
        for item in node.body:
            if isinstance(item, ast.FunctionDef):
                if item.name in ['_init_', 'init', '__int__']:
                    self.add_warning("AST_INIT_TYPO", {"class": node.name, "method": item.name}, item.lineno)
                
                if item.args.args:
                    first_arg = item.args.args[0].arg
                    if first_arg != 'self' and item.name != '__new__':
                        is_static = any(isinstance(d, ast.Name) and d.id in ['staticmethod', 'classmethod'] for d in item.decorator_list)
                        if not is_static:
                            self.add_warning("AST_MISSING_SELF", {"method": item.name}, item.lineno)
                else:
                     self.add_warning("AST_MISSING_SELF", {"method": item.name}, item.lineno)
        self.generic_visit(node)

    def visit_FunctionDef(self, node):
        self.stats["functions"] += 1
        self.defined_funcs.add(node.name)
        
        # Checking for mutable defaults
        for arg in node.args.defaults:
            if isinstance(arg, (ast.List, ast.Dict, ast.Set)):
                self.mutable_defaults.append(node.name)
        
        # Checking for print without return
        has_return = any(isinstance(n, ast.Return) for n in ast.walk(node))
        has_print = False
        for n in ast.walk(node):
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print':
                has_print = True
        
        if not has_return and has_print and node.name != 'main' and not node.name.startswith('test'):
             self.add_warning("AST_PRINT_NO_RETURN", {"func": node.name}, node.lineno)
             
        self.generic_visit(node)

    def visit_Assign(self, node):
        # Shadowing Builtins
        forbidden = ['list', 'dict', 'str', 'int', 'sum', 'min', 'max', 'type', 'input', 'len', 'range', 'id', 'open', 'file']
        for target in node.targets:
            if isinstance(target, ast.Name):
                self.defined_vars.add(target.id)
                if target.id in forbidden:
                    self.shadowed_builtins.append(target.id)
        
        # Assigning result of in-place methods
        if isinstance(node.value, ast.Call) and isinstance(node.value.func, ast.Attribute):
            method_name = node.value.func.attr
            if method_name in ['sort', 'append', 'extend', 'remove', 'reverse', 'insert']:
                self.add_warning("AST_INPLACE_ASSIGN", {"method": method_name}, node.lineno)

        # Accidental Tuple (x = 1, 2)
        if isinstance(node.value, ast.Tuple) and not isinstance(node.targets[0], ast.Tuple):
             if all(isinstance(elt, (ast.Constant, ast.Num)) for elt in node.value.elts):
                 self.add_warning("AST_TUPLE_COMMA", {}, node.lineno)

        # List Multiplication Trap [[0]*3]*3
        if isinstance(node.value, ast.BinOp) and isinstance(node.value.op, ast.Mult):
            if isinstance(node.value.left, ast.List) and len(node.value.left.elts) == 1:
                inner = node.value.left.elts[0]
                if isinstance(inner, ast.List):
                     self.add_warning("AST_LIST_MULT", {}, node.lineno)

        self.generic_visit(node)

    def visit_Expr(self, node):
        # Pointless Statement (1 + 1)
        if not isinstance(node.value, (ast.Call, ast.Yield, ast.YieldFrom)):
            # Docstrings are pointless statements if they are not the first statement (handled by docstring logic usually)
            # But let's check for math operations or literals hanging around
            if isinstance(node.value, (ast.BinOp, ast.Num, ast.Str, ast.Constant, ast.Name)):
                 # Ignore if it's a docstring (string literal at start of block) - hard to detect context here easily without parent
                 # Simple heuristic: if it's math, it's definitely pointless
                 if isinstance(node.value, ast.BinOp):
                     self.add_warning("AST_POINTLESS_STATEMENT", {}, node.lineno)

        # Immutable String Operations ignored
        if isinstance(node.value, ast.Call) and isinstance(node.value.func, ast.Attribute):
            method_name = node.value.func.attr
            if method_name in ['upper', 'lower', 'capitalize', 'replace', 'strip']:
                self.add_warning("AST_IMMUTABLE_STR", {"method": method_name}, node.lineno)
        self.generic_visit(node)

    def visit_For(self, node):
        self.stats["loops"] += 1
        # Unconditional return in loop
        if node.body:
            first_stmt = node.body[0]
            if isinstance(first_stmt, ast.Return):
                 self.add_warning("AST_RETURN_LOOP_EARLY", {}, first_stmt.lineno)
            else:
                for stmt in node.body:
                    if isinstance(stmt, ast.Return):
                        self.add_warning("AST_RETURN_LOOP_EARLY", {}, stmt.lineno)
                        break

        # Modifying list while iterating
        if isinstance(node.iter, ast.Name):
            iter_name = node.iter.id
            for child in ast.walk(node):
                if isinstance(child, ast.Call) and isinstance(child.func, ast.Attribute):
                    if isinstance(child.func.value, ast.Name) and child.func.value.id == iter_name:
                        if child.func.attr in ['remove', 'append', 'pop']:
                             self.add_warning("AST_MODIFY_ITER", {"name": iter_name}, child.lineno)
        self.generic_visit(node)
    
    def visit_While(self, node):
        self.stats["loops"] += 1
        # While True without break
        if isinstance(node.test, ast.Constant) and node.test.value == True:
            has_break = any(isinstance(n, ast.Break) for n in ast.walk(node))
            if not has_break:
                self.add_warning("AST_WHILE_TRUE", {}, node.lineno)
        self.generic_visit(node)

    def visit_Compare(self, node):
        # Float Equality
        for op in node.ops:
            if isinstance(op, ast.Eq):
                # Bool Comparison (x == True)
                if (isinstance(node.left, ast.Constant) and isinstance(node.left.value, bool)) or \
                   (node.comparators and isinstance(node.comparators[0], ast.Constant) and isinstance(node.comparators[0].value, bool)):
                     self.add_warning("AST_COMPARE_BOOL", {}, node.lineno)

                # Float Comparison
                has_float = isinstance(node.left, ast.Constant) and isinstance(node.left.value, float)
                if not has_float:
                    for comp in node.comparators:
                        if isinstance(comp, ast.Constant) and isinstance(comp.value, float):
                            has_float = True
                            break
                if has_float:
                    self.add_warning("AST_FLOAT_EQ", {}, node.lineno)
            
            # Identity Check with Literal (x is 5)
            if isinstance(op, (ast.Is, ast.IsNot)):
                literals = (node.left, *node.comparators)
                for lit in literals:
                    if isinstance(lit, (ast.Constant, ast.List, ast.Tuple, ast.Dict, ast.Set)):
                        if isinstance(lit, ast.Constant) and lit.value in [None, True, False]:
                            continue
                        self.add_warning("AST_IS_LITERAL", {}, node.lineno)
                        break
        self.generic_visit(node)

    def visit_Global(self, node):
        self.add_warning("AST_GLOBAL_STMT", {}, node.lineno)
        self.generic_visit(node)

    def visit_BoolOp(self, node):
        # Or Trap (x == 1 or 2)
        if isinstance(node.op, ast.Or):
            for value in node.values:
                if isinstance(value, ast.Constant) and value.value not in [True, False, None, 0, ""]:
                     self.add_warning("AST_BOOL_TRAP", {"value": repr(value.value)}, node.lineno)
        self.generic_visit(node)
        
    def visit_BinOp(self, node):
        # XOR confusion
        if isinstance(node.op, ast.BitXor):
            self.add_warning("AST_BITWISE_XOR", {}, node.lineno)
        self.generic_visit(node)

    def visit_Call(self, node):
        # range(0, X)
        if isinstance(node.func, ast.Name) and node.func.id == 'range':
            if len(node.args) == 2 and isinstance(node.args[0], ast.Constant) and node.args[0].value == 0:
                self.add_warning("AST_RANGE_ZERO", {}, node.lineno)

        # open without with
        if isinstance(node.func, ast.Name) and node.func.id == 'open':
            self.add_warning("AST_OPEN_NO_WITH", {}, node.lineno)

        # input without prompt
        if isinstance(node.func, ast.Name) and node.func.id == 'input':
            if len(node.args) == 0:
                self.add_warning("STYLE_INPUT_PROMPT", {}, node.lineno)

        # lista.len()
        if isinstance(node.func, ast.Attribute) and node.func.attr == 'len':
             self.add_warning("AST_LEN_AS_METHOD", {}, node.lineno)

        # Print function ref
        if isinstance(node.func, ast.Name) and node.func.id == 'print':
            for arg in node.args:
                if isinstance(arg, ast.Name) and arg.id in self.defined_funcs:
                     self.add_warning("AST_PRINT_FUNC", {"name": arg.id}, node.lineno)
                elif isinstance(arg, ast.Attribute) and arg.attr == 'random':
                     self.add_warning("AST_PRINT_FUNC", {"name": "random.random"}, node.lineno)
        self.generic_visit(node)
    
    def visit_ExceptHandler(self, node):
        # Bare except
        if node.type is None:
            self.add_warning("AST_BARE_EXCEPT", {}, node.lineno)
        
        # Pass in except
        if len(node.body) == 1 and isinstance(node.body[0], ast.Pass):
             self.add_warning("AST_EXCEPT_PASS", {}, node.lineno)
        self.generic_visit(node)

    def visit_If(self, node):
        self.stats["conditionals"] += 1
        self.generic_visit(node)

    def visit_Return(self, node):
        self.stats["returns"] += 1
        # Check if returning tuple with trailing comma (return x,)
        if isinstance(node.value, ast.Tuple) and len(node.value.elts) == 1:
             # It's syntactically valid but confusing for beginners who often mean 'return x'
             self.add_warning("AST_CONFUSING_TUPLE", {}, node.lineno)
        self.generic_visit(node)

    def visit_Dict(self, node):
        # Duplicate keys
        seen_keys = set()
        for k in node.keys:
            if isinstance(k, ast.Constant):
                if k.value in seen_keys:
                    self.add_warning("AST_DUPLICATE_KEY", {"key": str(k.value)}, node.lineno)
                seen_keys.add(k.value)
        self.generic_visit(node)

    def analyze(self, code):
        try:
            tree = ast.parse(code)
            self.visit(tree)
            
            if self.shadowed_builtins:
                names = ", ".join(set(self.shadowed_builtins))
                self.add_warning("AST_SHADOWING", {"names": names})
            
            if self.mutable_defaults:
                funcs = ", ".join(set(self.mutable_defaults))
                self.add_warning("AST_MUTABLE_DEFAULT", {"funcs": funcs})
                
            # Regex checks on Source Code
            if re.search(r"\\belse\\s+if\\b", code):
                 self.add_warning("SYNTAX_ELSE_IF")
            if re.search(r"\\bnull\\b", code):
                 self.add_warning("AST_NULL_CHECK")
                
            return {"stats": self.stats, "warnings": self.warnings}
            
        except SyntaxError as e:
            return {"error": "syntax", "details": str(e), "line": e.lineno, "offset": e.offset}
        except Exception as e:
            return {"error": "internal", "details": str(e)}

def humanize_runtime_error(exc_type, exc_value, exc_tb):
    msg = str(exc_value)
    err_name = exc_type.__name__
    
    # 1. Check ADVICE_DB patterns
    for key, info in ADVICE_DB.items():
        if "pattern" in info and re.search(info["pattern"], msg):
            return {
                "message": msg,
                "advice_code": info["code"]
            }
    
    # 2. Check type/name map (fallback)
    type_map = {
        "ZeroDivisionError": "AST_ZERO_DIV",
        "ModuleNotFoundError": "AST_MODULE_NOT_FOUND",
        "RecursionError": "AST_RECURSION",
        "IndexError": "RUNTIME_INDEX_ERROR",
        "KeyError": "RUNTIME_KEY_ERROR",
        "TypeError": "RUNTIME_TYPE_ERROR",
        "ValueError": "RUNTIME_VALUE_ERROR",
        "NameError": "RUNTIME_NAME_ERROR",
        "AttributeError": "RUNTIME_ATTRIBUTE_ERROR"
    }
    
    code = type_map.get(err_name, "RUNTIME_GENERIC")
    
    return {
        "message": f"{err_name}: {msg}",
        "advice_code": code
    }

# ==========================================
# 3. INTERFAZ PÚBLICA
# ==========================================

def analyze_code_expert(code_str):
    linter = ExpertLinter()
    return linter.analyze(code_str)
`