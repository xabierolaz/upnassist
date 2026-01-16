export const ANALYSIS_ENGINE_PY = `
import ast
import sys
import traceback
import builtins
import re

# ==========================================
# 1. DICCIONARIO DE CONSEJOS (KNOWLEDGE BASE)
# ==========================================

ADVICE_DB = {
    # Syntax Errors
    "missing_colon": {
        "pattern": r"expected ':'",
        "es": "Te falta un signo de dos puntos ':' al final de la línea. Es obligatorio en if, for, while, def, class.",
        "eu": "Bi puntu ':' falta zaizkizu lerroaren amaieran. Derrigorrezkoa da if, for, while, def eta class erabiltzean."
    },
    "unmatched_parenthesis": {
        "pattern": r"unexpected EOF while parsing|was never closed",
        "es": "Parece que te has dejado un paréntesis '(', corchete '[' o llave '{' sin cerrar.",
        "eu": "Parentesi '(', kortxete '[' edo giltza '{' bat itxi gabe utzi duzula dirudi."
    },
    "indentation_error": {
        "pattern": r"unexpected indent|unindent does not match",
        "es": "Error de indentación. Python es muy estricto: asegúrate de usar siempre espacios (4 es lo estándar) y no mezclarlos con tabuladores.",
        "eu": "Indentazio errorea. Python oso zorrotza da: ziurtatu beti espazioak erabiltzen dituzula (4 da estandarra) eta ez nahastu tabuladoreekin."
    },
    "assignment_in_condition": {
        "pattern": r"cannot assign to literal",
        "es": "Quizás intentaste comparar con un solo igual '='. Para comparar usa doble igual '=='.",
        "eu": "Beharbada '=' bakarrarekin konparatzen saiatu zara. Konparatzeko erabili berdin bikoitza '=='."
    },
    
    # Runtime Errors
    "name_error": {
        "es": "Estás usando la variable o función '{name}' que no ha sido definida todavía. ¿Revisaste si está bien escrita?",
        "eu": "'{name}' aldagaia edo funtzioa erabiltzen ari zara eta ez da definitu oraindik. Ondo idatzita dagoen egiaztatu duzu?"
    },
    "type_error_math": {
        "pattern": r"unsupported operand type.*str.*int",
        "es": "Estás intentando operar matemáticamente con texto. Recuerda convertir el input con int() o float().",
        "eu": "Testuarekin eragiketa matematikoak egiten saiatzen ari zara. Gogoratu input-a bihurtzea int() edo float() erabiliz."
    },
    "index_error": {
        "es": "Estás intentando acceder a una posición que no existe en la lista. Recuerda que si la lista tiene tamaño N, el último índice es N-1.",
        "eu": "Zerrendan existitzen ez den posizio batera sartzen saiatzen ari zara. Gogoratu zerrendak N tamaina badu, azken indizea N-1 dela."
    },
    "attribute_error_none": {
        "pattern": r"'NoneType' object has no attribute",
        "es": "Tu variable está vacía (es None) y intentas usar un método sobre ella. Causa común: una función que no tiene 'return' devuelve None por defecto.",
        "eu": "Zure aldagaia hutsik dago (None da) eta metodo bat erabiltzen saiatzen ari zara. Kausa ohikoa: 'return' ez duen funtzio batek None itzultzen du lehenetsita."
    },
    "key_error": {
        "es": "La clave '{key}' no existe en el diccionario. Usa 'if key in dic:' o '.get()' para evitar este error.",
        "eu": "'{key}' gakoa ez da existitzen hiztegian. Erabili 'if key in dic:' edo '.get()' errore hau saihesteko."
    },
    "recursion_error": {
        "es": "Has caído en una recursión infinita. Revisa tu 'caso base' (la condición que detiene la recursión).",
        "eu": "Errekurtsio infinitu batean erori zara. Berrikusi zure 'oinarri kasua' (errekurtsioa gelditzen duen baldintza)."
    }
}

# ==========================================
# 2. LINTER ESTÁTICO (AST VISITOR)
# ==========================================

class ExpertLinter(ast.NodeVisitor):
    def __init__(self):
        self.warnings = []
        self.stats = {
            "loops": 0, "conditionals": 0, "functions": 0, "classes": 0, "returns": 0, "prints": 0
        }
        self.defined_funcs = set()
        self.called_funcs = set()
        self.shadowed_builtins = []
        self.mutable_defaults = []
        self.global_usage = []

    def visit_FunctionDef(self, node):
        self.stats["functions"] += 1
        self.defined_funcs.add(node.name)
        
        # Check 1: Mutable Default Arguments (Anti-pattern mortal)
        for arg in node.args.defaults:
            if isinstance(arg, (ast.List, ast.Dict, ast.Set)):
                self.mutable_defaults.append(node.name)
                
        # Check 2: Missing Return detection logic
        has_return = any(isinstance(n, ast.Return) for n in ast.walk(node))
        has_print = any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print' for n in ast.walk(node))
        
        if not has_return and has_print and node.name != 'main':
             # Heuristic: if it prints but doesn't return, and isn't 'main', it's suspicious for exercises expecting return values
             self.warnings.append({
                 "code": "print_no_return",
                 "msg_es": f"La función '{node.name}' imprime pero no devuelve nada (return). Los tests suelen fallar por esto.",
                 "msg_eu": f"'{node.name}' funtzioak inprimatu egiten du baina ez du ezer itzultzen (return). Testek askotan huts egiten dute horregatik."
             })
             
        self.generic_visit(node)

    def visit_Assign(self, node):
        # Check 3: Variable Shadowing (Builtins)
        forbidden = ['list', 'dict', 'str', 'int', 'sum', 'min', 'max', 'type', 'input', 'len']
        for target in node.targets:
            if isinstance(target, ast.Name):
                if target.id in forbidden:
                    self.shadowed_builtins.append(target.id)
        self.generic_visit(node)

    def visit_Global(self, node):
        # Check 4: Global keywords usage
        self.global_usage.extend(node.names)
        self.generic_visit(node)

    def visit_For(self, node):
        self.stats["loops"] += 1
        self.generic_visit(node)
    
    def visit_While(self, node):
        self.stats["loops"] += 1
        # Check 5: While True simple check
        if isinstance(node.test, ast.Constant) and node.test.value == True:
            # Look for break
            has_break = any(isinstance(n, ast.Break) for n in ast.walk(node))
            if not has_break:
                self.warnings.append({
                    "code": "infinite_loop",
                    "msg_es": "Tienes un 'while True' sin 'break'. Esto causará un bucle infinito.",
                    "msg_eu": "'while True' bat daukazu 'break' gabe. Honek begizta infinitu bat sortuko du."
                })
        self.generic_visit(node)

    def visit_If(self, node):
        self.stats["conditionals"] += 1
        self.generic_visit(node)

    def visit_Return(self, node):
        self.stats["returns"] += 1
        self.generic_visit(node)

    def analyze(self, code):
        try:
            tree = ast.parse(code)
            self.visit(tree)
            
            # Post-analysis processing
            if self.shadowed_builtins:
                names = ", ".join(self.shadowed_builtins)
                self.warnings.append({
                    "code": "shadowing",
                    "msg_es": f"¡Peligro! Has llamado a tus variables: {names}. Estos son nombres reservados de Python. Cámbialos (ej: 'lista' en vez de 'list').",
                    "msg_eu": f"Arriskua! Zure aldagaiei izen hauek eman dizkiezu: {names}. Hauek Pythonen izen erreserbatuak dira. Alda itzazu (adib: 'zerrenda' 'list' ordez)."
                })
            
            if self.mutable_defaults:
                funcs = ", ".join(self.mutable_defaults)
                self.warnings.append({
                    "code": "mutable_default",
                    "msg_es": f"En '{funcs}': Usar listas/diccionarios vacíos como valor por defecto en argumentos causa errores graves de memoria persistente.",
                    "msg_eu": f"'{funcs}'-en: Zerrenda/hiztegi hutsak balio lehenetsi gisa erabiltzeak memoria errore larriak eragiten ditu."
                })
                
            return {"stats": self.stats, "warnings": self.warnings}
            
        except SyntaxError as e:
            return {"error": "syntax", "details": str(e), "line": e.lineno, "offset": e.offset}
        except Exception as e:
            return {"error": "internal", "details": str(e)}

# ==========================================
# 3. INTERFAZ PÚBLICA
# ==========================================

def analyze_code_expert(code_str):
    linter = ExpertLinter()
    return linter.analyze(code_str)

def humanize_runtime_error(exc_type, exc_value, tb):
    error_msg = str(exc_value)
    exc_name = exc_type.__name__
    
    advice_es = "Ha ocurrido un error inesperado. Revisa la línea indicada."
    advice_eu = "Espero gabeko errorea gertatu da. Berrikusi adierazitako lerroa."
    
    # 1. Match specific regex patterns from DB
    found_match = False
    
    # Check syntax specific messages first if it's syntax error
    if exc_name == "SyntaxError":
        for key, info in ADVICE_DB.items():
            if "pattern" in info and re.search(info["pattern"], error_msg):
                advice_es = info["es"]
                advice_eu = info["eu"]
                found_match = True
                break
    
    # Check Type/Value/Index errors
    if not found_match:
        if exc_name == "NameError":
            # Extract name from message "name 'x' is not defined"
            match = re.search(r"name '(.+?)' is not defined", error_msg)
            if match:
                var_name = match.group(1)
                advice_es = ADVICE_DB["name_error"]["es"].format(name=var_name)
                advice_eu = ADVICE_DB["name_error"]["eu"].format(name=var_name)
        elif exc_name == "IndexError":
            advice_es = ADVICE_DB["index_error"]["es"]
            advice_eu = ADVICE_DB["index_error"]["eu"]
        elif exc_name == "KeyError":
            match = re.search(r"'(.*?)'", error_msg)
            key = match.group(1) if match else "?"
            advice_es = ADVICE_DB["key_error"]["es"].format(key=key)
            advice_eu = ADVICE_DB["key_error"]["eu"].format(key=key)
        elif exc_name == "RecursionError":
            advice_es = ADVICE_DB["recursion_error"]["es"]
            advice_eu = ADVICE_DB["recursion_error"]["eu"]
        elif exc_name == "AttributeError" and "NoneType" in error_msg:
            advice_es = ADVICE_DB["attribute_error_none"]["es"]
            advice_eu = ADVICE_DB["attribute_error_none"]["eu"]
        elif exc_name == "TypeError" and re.search(r"unsupported operand type", error_msg):
             advice_es = ADVICE_DB["type_error_math"]["es"]
             advice_eu = ADVICE_DB["type_error_math"]["eu"]
             
    # Default indentation handling
    if "IndentationError" in exc_name:
         advice_es = ADVICE_DB["indentation_error"]["es"]
         advice_eu = ADVICE_DB["indentation_error"]["eu"]

    line_no = None
    if tb:
        # Extract the last line from the student code (not the test runner)
        # We walk the traceback stack
        for frame in traceback.extract_tb(tb):
            if "<string>" in frame.filename: # Standard way exec() runs strings
                line_no = frame.lineno

    return {
        "type": exc_name,
        "message": error_msg,
        "advice_es": advice_es,
        "advice_eu": advice_eu,
        "line": line_no
    }
`;