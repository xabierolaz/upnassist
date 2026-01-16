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
    "missing_colon": {
        "pattern": r"expected ':'",
        "es": "Te falta un signo de dos puntos ':' al final de la línea (obligatorio en if, for, while, def).",
        "eu": "Bi puntu ':' falta zaizkizu lerroaren amaieran (derrigorrezkoa if, for, while, def-etan)."
    },
    "outside_loop": {
        "pattern": r"'break' outside loop|'continue' outside loop",
        "es": "Has usado 'break' o 'continue' fuera de un bucle. Solo funcionan dentro de for o while.",
        "eu": "'break' edo 'continue' begizta batetik kanpo erabili duzu. Soilik for edo while barruan funtzionatzen dute."
    },
    "unmatched_parenthesis": {
        "pattern": r"unexpected EOF while parsing|was never closed",
        "es": "Te has dejado un paréntesis '(', corchete '[' o llave '{' sin cerrar. Revisa líneas anteriores.",
        "eu": "Parentesi '(', kortxete '[' edo giltza '{' bat itxi gabe utzi duzu. Berrikusi aurreko lerroak."
    },
    "indentation_error": {
        "pattern": r"unexpected indent|unindent does not match",
        "es": "Error de indentación. Python es muy estricto: usa siempre 4 espacios y NUNCA mezcles tabs.",
        "eu": "Indentazio errorea. Python oso zorrotza da: erabili beti 4 espazio eta INOIZ ez nahastu tabuladoreekin."
    },
    "assignment_in_condition": {
        "pattern": r"cannot assign to literal",
        "es": "Quizás usaste '=' (asignar) en vez de '==' (comparar) en un if/while.",
        "eu": "Agian '=' (esleitu) erabili duzu '==' (konparatu) ordez if/while batean."
    },
    "eol_string": {
        "pattern": r"EOL while scanning string literal",
        "es": "No has cerrado unas comillas al final de la línea.",
        "eu": "Ez dituzu komatxoak itxi lerroaren amaieran."
    },

    # --- TYPE & ATTRIBUTE ERRORS ---
    "str_no_append": {
        "pattern": r"'str' object has no attribute 'append'",
        "es": "Los textos (strings) no tienen .append(). Son inmutables. Para unir texto usa '+'.",
        "eu": "Testuek (strings) ez dute .append(). Aldaezinak dira. Testua elkartzeko erabili '+'."
    },
    "list_no_add": {
        "pattern": r"'list' object has no attribute 'add'",
        "es": "Las listas en Python usan .append(), no .add() (eso es de Java/C#).",
        "eu": "Pythoneko zerrendek .append() erabiltzen dute, ez .add() (hori Java/C#-koa da)."
    },
    "str_no_reverse": {
        "pattern": r"'str' object has no attribute 'reverse'",
        "es": "Los textos no tienen .reverse(). Para invertir usa slicing: texto[::-1].",
        "eu": "Testuek ez dute .reverse(). Itzultzeko erabili slicing: testua[::-1]."
    },
    "type_error_math": {
        "pattern": r"unsupported operand type.*str.*int",
        "es": "No puedes sumar texto con números. Usa str() o int() para convertir.",
        "eu": "Ezin dituzu testua eta zenbakiak batu. Erabili str() edo int() bihurtzeko."
    },
    "not_subscriptable": {
        "pattern": r"object is not subscriptable",
        "es": "Intentas usar corchetes [] en algo que no es una lista ni un diccionario (quizás es un número).",
        "eu": "Kortxeteak [] erabiltzen saiatzen ari zara zerrenda edo hiztegia ez den zerbaitetan (agian zenbaki bat da)."
    },
    "not_callable": {
        "pattern": r"object is not callable",
        "es": "Intentas llamar '()' a una variable que no es una función. (Ej: x=5; x()).",
        "eu": "Funtzioa ez den aldagai bati deitzen '()' saiatzen ari zara. (Adib: x=5; x())."
    },

    # --- VALUE & INDEX ERRORS ---
    "value_error_int": {
        "pattern": r"invalid literal for int\(\)",
        "es": "Intentas convertir a número (int) un texto que no es un número válido (ej: 'hola').",
        "eu": "Zenbaki baliozkoa ez den testu bat zenbaki (int) bihurtzen saiatzen ari zara (adib: 'kaixo')."
    },
    "unpacking_error": {
        "pattern": r"not enough values to unpack|too many values to unpack",
        "es": "Error al desempaquetar: el número de variables a la izquierda no coincide con los elementos de la lista.",
        "eu": "Errorea desegitean: ezkerreko aldagai kopurua ez dator bat zerrendako elementuekin."
    },
    "index_error": {
        "es": "Índice fuera de rango. Si la lista mide N, los índices van de 0 a N-1.",
        "eu": "Indizea rangotik kanpo. Zerrendak N neurtzen badu, indizeak 0-tik N-1-era doaz."
    },
    "key_error": {
        "es": "Esa clave no existe en el diccionario.",
        "eu": "Gako hori ez da existitzen hiztegian."
    },

    # --- LOGIC & RUNTIME ---
    "attribute_error_none": {
        "pattern": r"'NoneType' object has no attribute",
        "es": "Tu variable es 'None' (vacía). Posiblemente una función anterior no devolvió nada (olvidaste el 'return').",
        "eu": "Zure aldagaia 'None' (hutsik) da. Litekeena da aurreko funtzio batek ezer ez itzultzea ('return' ahaztu duzu)."
    },
    "zero_division": {
        "es": "División por cero. Matemáticamente imposible.",
        "eu": "Zatuketa zeroz. Matematikoki ezinezkoa."
    },
    "module_not_found": {
        "es": "El módulo que intentas importar no existe o no está instalado.",
        "eu": "Inportatzen saiatzen ari zaren modulua ez da existitzen edo ez dago instalatuta."
    },
    "eof_error": {
        "es": "El programa pidió más 'input()' de los que había disponibles. ¿Bucle infinito pidiendo datos?",
        "eu": "Programak zeudenak baino 'input()' gehiago eskatu ditu. Begizta infinitua duzu datuak eskatzen?"
    },
    "unbound_local": {
        "es": "Usas una variable local antes de asignarle valor. ¿Querías usar una variable global? (usa 'global x').",
        "eu": "Aldagai lokal bat erabiltzen ari zara balioa esleitu aurretik. Aldagai global bat erabili nahi zenuen? (erabili 'global x')."
    },
    "recursion_error": {
        "es": "Recursión infinita. Tu función se llama a sí misma sin parar. Revisa el caso base.",
        "eu": "Errekurtsio infinitua. Zure funtzioak bere buruari deitzen dio etengabe. Berrikusi oinarri kasua."
    }
}

# ==========================================
# 2. LINTER ESTÁTICO (AST VISITOR)
# ==========================================

class ExpertLinter(ast.NodeVisitor):
    def __init__(self):
        self.warnings = []
        self.stats = {
            "loops": 0, "conditionals": 0, "functions": 0, "classes": 0, "returns": 0
        }
        self.defined_funcs = set()
        self.defined_vars = set()
        self.shadowed_builtins = []
        self.mutable_defaults = []
        
    def visit_ClassDef(self, node):
        self.stats["classes"] += 1
        for item in node.body:
            if isinstance(item, ast.FunctionDef):
                # Caso: Typos en __init__
                if item.name in ['_init_', 'init', '__int__']:
                    self.warnings.append({
                        "code": "init_typo",
                        "msg_es": f"En clase '{node.name}': Método '{item.name}' sospechoso. ¿Querías decir '__init__'?",
                        "msg_eu": f"'{node.name}' klasean: '{item.name}' metodo susmagarria. '__init__' esan nahi zenuen?"
                    })
                
                # Caso: Falta self
                if item.args.args:
                    first_arg = item.args.args[0].arg
                    if first_arg != 'self' and item.name != '__new__':
                        is_static = any(isinstance(dec, ast.Name) and dec.id in ['staticmethod', 'classmethod'] for dec in item.decorator_list)
                        if not is_static:
                            self.warnings.append({
                                "code": "missing_self",
                                "msg_es": f"En método '{item.name}': El primer argumento suele ser 'self'.",
                                "msg_eu": f"'{item.name}' metodoan: Lehenengo argumentua 'self' izan ohi da."
                            })
                else:
                     self.warnings.append({
                        "code": "missing_self_arg",
                        "msg_es": f"En método '{item.name}': Falta el argumento 'self'.",
                        "msg_eu": f"'{item.name}' metodoan: 'self' argumentua falta da."
                    })
        self.generic_visit(node)

    def visit_FunctionDef(self, node):
        self.stats["functions"] += 1
        self.defined_funcs.add(node.name)
        
        # Caso: Mutable Defaults
        for arg in node.args.defaults:
            if isinstance(arg, (ast.List, ast.Dict, ast.Set)):
                self.mutable_defaults.append(node.name)
        
        # Caso: Print sin Return
        has_return = any(isinstance(n, ast.Return) for n in ast.walk(node))
        has_print = False
        for n in ast.walk(node):
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print':
                has_print = True
        
        if not has_return and has_print and node.name != 'main' and not node.name.startswith('test'):
             self.warnings.append({
                 "code": "print_no_return",
                 "msg_es": f"La función '{node.name}' imprime pero no devuelve nada. ¿Falta un 'return'?",
                 "msg_eu": f"'{node.name}' funtzioak inprimatu egiten du baina ez du ezer itzultzen. 'return' falta da?"
             })
             
        self.generic_visit(node)

    def visit_Assign(self, node):
        # Caso: Shadowing
        forbidden = ['list', 'dict', 'str', 'int', 'sum', 'min', 'max', 'type', 'input', 'len', 'range', 'id']
        for target in node.targets:
            if isinstance(target, ast.Name):
                self.defined_vars.add(target.id)
                if target.id in forbidden:
                    self.shadowed_builtins.append(target.id)
        
        # Caso: Asignar resultado de métodos in-place (l.sort()) a variable
        # Detecta: x = lista.sort() o x = lista.append(y)
        if isinstance(node.value, ast.Call) and isinstance(node.value.func, ast.Attribute):
            method_name = node.value.func.attr
            if method_name in ['sort', 'append', 'extend', 'remove', 'reverse', 'insert']:
                self.warnings.append({
                    "code": "inplace_assign",
                    "msg_es": f"¡Cuidado! El método '.{method_name}()' modifica la lista pero devuelve 'None'. No lo asignes a una variable.",
                    "msg_eu": f"Kontuz! '.{method_name}()' metodoak zerrenda aldatzen du baina 'None' itzultzen du. Ez esleitu aldagai bati."
                })

        # Caso: Tupla accidental (19,99) en asignación
        if isinstance(node.value, ast.Tuple) and not isinstance(node.targets[0], ast.Tuple):
             # Heuristic: Assigning tuple to single variable
             # Check if elements are numbers
             if all(isinstance(elt, (ast.Constant, ast.Num)) for elt in node.value.elts):
                 self.warnings.append({
                     "code": "accidental_tuple",
                     "msg_es": "Has asignado varios números separados por coma a una variable. ¿Querías usar decimales (punto)?",
                     "msg_eu": "Zenbaki batzuk komaz bereizita esleitu dizkiozu aldagai bati. Hamartarrak (puntua) erabili nahi zenituen?"
                 })

        self.generic_visit(node)

    def visit_Expr(self, node):
        # Caso: Inmutabilidad de Strings (s.upper() sin asignar)
        if isinstance(node.value, ast.Call) and isinstance(node.value.func, ast.Attribute):
            method_name = node.value.func.attr
            if method_name in ['upper', 'lower', 'capitalize', 'replace', 'strip']:
                self.warnings.append({
                    "code": "immutable_string",
                    "msg_es": f"Llamas a '.{method_name}()' pero no guardas el resultado. Los strings no cambian in-place.",
                    "msg_eu": "'.{method_name}()' deitzen duzu baina ez duzu emaitza gordetzen. String-ak ez dira in-place aldatzen."
                })
        
        # Caso: Función sin llamar (referencia a función en expresión suelta, raro pero posible en repl)
        self.generic_visit(node)

    def visit_For(self, node):
        self.stats["loops"] += 1
        # Caso: Modificar lista iterada
        if isinstance(node.iter, ast.Name):
            iter_name = node.iter.id
            for child in ast.walk(node):
                if isinstance(child, ast.Call) and isinstance(child.func, ast.Attribute):
                    if isinstance(child.func.value, ast.Name) and child.func.value.id == iter_name:
                        if child.func.attr in ['remove', 'append', 'pop']:
                             self.warnings.append({
                                "code": "modify_iter",
                                "msg_es": f"Modificas la lista '{iter_name}' mientras la recorres. Usa una copia: 'for x in {iter_name}[:]'.",
                                "msg_eu": f"'{iter_name}' zerrenda aldatzen ari zara zeharkatzen duzun bitartean. Erabili kopia bat: 'for x in {iter_name}[:]'."
                            })
        self.generic_visit(node)
    
    def visit_While(self, node):
        self.stats["loops"] += 1
        # Caso: While True sin break
        if isinstance(node.test, ast.Constant) and node.test.value == True:
            has_break = any(isinstance(n, ast.Break) for n in ast.walk(node))
            if not has_break:
                self.warnings.append({
                    "code": "infinite_loop",
                    "msg_es": "Bucle 'while True' infinito (falta 'break').",
                    "msg_eu": "'while True' begizta infinitua ('break' falta da)."
                })
        self.generic_visit(node)

    def visit_Compare(self, node):
        # Caso: Comparar floats (a == 0.3)
        for op in node.ops:
            if isinstance(op, ast.Eq):
                # Check operands for float literals
                has_float = isinstance(node.left, ast.Constant) and isinstance(node.left.value, float)
                if not has_float:
                    for comp in node.comparators:
                        if isinstance(comp, ast.Constant) and isinstance(comp.value, float):
                            has_float = True
                            break
                if has_float:
                    self.warnings.append({
                        "code": "float_equality",
                        "msg_es": "Comparar floats con '==' es peligroso por precisión. Usa 'abs(a - b) < 0.0001'.",
                        "msg_eu": "Float-ak '=='-rekin konparatzea arriskutsua da doitasunagatik. Erabili 'abs(a - b) < 0.0001'."
                    })
        self.generic_visit(node)

    def visit_BoolOp(self, node):
        # Caso: Trampa del OR (if x == 5 or 6)
        if isinstance(node.op, ast.Or):
            for value in node.values:
                if isinstance(value, ast.Constant) and value.value not in [True, False, None, 0, ""]:
                     self.warnings.append({
                         "code": "bool_trap",
                         "msg_es": f"Lógica sospechosa: '... or {repr(value.value)}'. Esto siempre es True.",
                         "msg_eu": f"Logika susmagarria: '... or {repr(value.value)}'. Hau beti da True."
                     })
        self.generic_visit(node)

    def visit_Call(self, node):
        # Caso: Olvidar paréntesis en función conocida (random.random) como argumento
        # Esto es dificil de detectar en AST puro salvo que veamos el uso. 
        # Pero podemos detectar si imprimimos una funcion.
        if isinstance(node.func, ast.Name) and node.func.id == 'print':
            for arg in node.args:
                if isinstance(arg, ast.Name) and arg.id in self.defined_funcs:
                     # Imprimiendo nombre de funcion definida sin llamar
                     self.warnings.append({
                         "code": "print_func_ref",
                         "msg_es": f"Estás imprimiendo la función '{arg.id}' en vez de su resultado. ¿Faltan paréntesis '()'?",
                         "msg_eu": f"'{arg.id}' funtzioa inprimatzen ari zara emaitzaren ordez. Parentesiak '()' falta dira?"
                     })
                elif isinstance(arg, ast.Attribute) and arg.attr == 'random':
                     # Caso especifico random.random
                     self.warnings.append({
                         "code": "print_func_ref",
                         "msg_es": "Estás usando la referencia a la función. ¿Querías llamar a 'random.random()'?",
                         "msg_eu": "Funtzioaren erreferentzia erabiltzen ari zara. 'random.random()' deitu nahi zenuen?"
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
            
            if self.shadowed_builtins:
                names = ", ".join(set(self.shadowed_builtins))
                self.warnings.append({
                    "code": "shadowing",
                    "msg_es": f"Nombre reservado usado como variable: {names}.",
                    "msg_eu": f"Izen erreserbatu aldagai gisa erabilia: {names}."
                })
            
            if self.mutable_defaults:
                funcs = ", ".join(set(self.mutable_defaults))
                self.warnings.append({
                    "code": "mutable_default",
                    "msg_es": f"En '{funcs}': Argumento por defecto mutable (lista vacía).",
                    "msg_eu": f"'{funcs}'-en: Argumentu lehenetsi aldakorra (zerrenda hutsa)."
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
    
    advice_es = f"Error {exc_name}."
    advice_eu = f"Errorea {exc_name}."
    
    # 1. Regex Match
    found_match = False
    for key, info in ADVICE_DB.items():
        if "pattern" in info and re.search(info["pattern"], error_msg, re.IGNORECASE):
            advice_es = info["es"]
            advice_eu = info["eu"]
            found_match = True
            break
            
    # 2. Heuristics for non-regex errors
    if not found_match:
        if exc_name == "NameError":
            match = re.search(r"name '(.+?)' is not defined", error_msg)
            var_name = match.group(1) if match else "?"
            
            # Case sensitivity check heuristic
            # We would need access to defined vars, but static analysis happens before.
            # We provide general advice.
            if var_name[0].isupper():
                 advice_es = f"No existe '{var_name}'. Python distingue mayúsculas. ¿Quizás '{var_name.lower()}'?"
                 advice_eu = f"Ez da existitzen '{var_name}'. Pythonek maiuskulak bereizten ditu. Agian '{var_name.lower()}'?"
            else:
                 advice_es = f"No existe la variable '{var_name}'. ¿Error al escribir?"
                 advice_eu = f"Ez da existitzen '{var_name}' aldagaia. Idaztean errorea?"
        
        elif exc_name == "IndexError":
            advice_es = ADVICE_DB["index_error"]["es"]
            advice_eu = ADVICE_DB["index_error"]["eu"]
            
        elif exc_name == "KeyError":
             advice_es = ADVICE_DB["key_error"]["es"]
             advice_eu = ADVICE_DB["key_error"]["eu"]
             
        elif exc_name == "IndentationError" or exc_name == "TabError":
             advice_es = ADVICE_DB["indentation_error"]["es"]
             advice_eu = ADVICE_DB["indentation_error"]["eu"]
             
        elif exc_name == "ZeroDivisionError":
             advice_es = ADVICE_DB["zero_division"]["es"]
             advice_eu = ADVICE_DB["zero_division"]["eu"]
             
        elif exc_name == "ModuleNotFoundError":
             advice_es = ADVICE_DB["module_not_found"]["es"]
             advice_eu = ADVICE_DB["module_not_found"]["eu"]

    line_no = None
    if tb:
        for frame in traceback.extract_tb(tb):
            if "<string>" in frame.filename:
                line_no = frame.lineno

    return {
        "type": exc_name,
        "message": error_msg,
        "advice_es": advice_es,
        "advice_eu": advice_eu,
        "line": line_no
    }
`;
