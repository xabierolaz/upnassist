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
    # --- SYNTAX ERRORS ---
    "missing_colon": {
        "pattern": r"expected ':'",
        "es": "Te falta un signo de dos puntos ':' al final de la línea (obligatorio en if, for, while, def).",
        "eu": "Bi puntu ':' falta zaizkizu lerroaren amaieran (derrigorrezkoa if, for, while, def-etan)."
    },
    "unmatched_parenthesis": {
        "pattern": r"unexpected EOF while parsing|was never closed",
        "es": "Te has dejado un paréntesis '(', corchete '[' o llave '{' sin cerrar.",
        "eu": "Parentesi '(', kortxete '[' edo giltza '{' bat itxi gabe utzi duzu."
    },
    "indentation_error": {
        "pattern": r"unexpected indent|unindent does not match",
        "es": "Error de indentación. Asegúrate de usar siempre 4 espacios y no mezclar tabs.",
        "eu": "Indentazio errorea. Ziurtatu beti 4 espazio erabiltzen dituzula eta ez nahastu tabuladoreekin."
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

    # --- TYPE ERRORS ---
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
    "arg_count": {
        "pattern": r"takes \d+ positional arguments but \d+ were given|missing \d+ required positional argument",
        "es": "Has llamado a la función con un número incorrecto de argumentos.",
        "eu": "Funtzioari argumentu kopuru okerrarekin deitu diozu."
    },
    "list_indices_must_be_integers": {
        "pattern": r"list indices must be integers",
        "es": "Los índices de una lista deben ser números enteros, no texto ni decimales.",
        "eu": "Zerrenda baten indizeek zenbaki osoak izan behar dute, ez testua ezta hamartarrak ere."
    },

    # --- VALUE ERRORS ---
    "value_error_int": {
        "pattern": r"invalid literal for int\(\)",
        "es": "Intentas convertir a número (int) un texto que no es un número válido.",
        "eu": "Zenbaki baliozkoa ez den testu bat zenbaki (int) bihurtzen saiatzen ari zara."
    },
    "unpacking_error": {
        "pattern": r"not enough values to unpack|too many values to unpack",
        "es": "Intentas asignar una lista a variables individuales pero el número de elementos no coincide.",
        "eu": "Zerrenda bat aldagai indibidualei esleitzen saiatzen ari zara baina elementu kopurua ez dator bat."
    },
    "substring_not_found": {
        "pattern": r"substring not found",
        "es": "Intentas buscar (index/find) un texto que no existe en la cadena.",
        "eu": "Katean existitzen ez den testu bat bilatzen (index/find) saiatzen ari zara."
    },

    # --- ATTRIBUTE/KEY/INDEX ERRORS ---
    "attribute_error_none": {
        "pattern": r"'NoneType' object has no attribute",
        "es": "Tu variable es 'None' (vacía). Posiblemente una función anterior no devolvió nada (return).",
        "eu": "Zure aldagaia 'None' (hutsik) da. Litekeena da aurreko funtzio batek ezer ez itzultzea (return)."
    },
    "index_error": {
        "es": "Estás accediendo a una posición fuera de la lista. Recuerda: índices van de 0 a Longitud-1.",
        "eu": "Zerrendatik kanpoko posizio batera sartzen ari zara. Gogoratu: indizeak 0-tik Luzera-1-era doaz."
    },
    "key_error": {
        "es": "Esa clave no existe en el diccionario.",
        "eu": "Gako hori ez da existitzen hiztegian."
    },
    
    # --- OTHER ERRORS ---
    "zero_division": {
        "es": "División por cero. Matemáticamente imposible.",
        "eu": "Zatuketa zeroz. Matematikoki ezinezkoa."
    },
    "module_not_found": {
        "es": "El módulo que intentas importar no existe.",
        "eu": "Inportatzen saiatzen ari zaren modulua ez da existitzen."
    },
    "eof_error": {
        "es": "El programa pidió más 'input()' de los que había disponibles. Revisa tus bucles.",
        "eu": "Programak zeudenak baino 'input()' gehiago eskatu ditu. Berrikusi zure begiztak."
    },
    "unbound_local": {
        "es": "Usas una variable antes de asignarle valor (probablemente dentro de una función).",
        "eu": "Aldagai bat balioa esleitu aurretik erabiltzen ari zara (ziurrenik funtzio baten barruan)."
    },
    "recursion_error": {
        "es": "Recursión infinita. Revisa el caso base de tu función recursiva.",
        "eu": "Errekurtsio infinitua. Berrikusi zure funtzio errekurtsiboaren oinarri kasua."
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
        
        # Check 1: Mutable Default Arguments
        for arg in node.args.defaults:
            if isinstance(arg, (ast.List, ast.Dict, ast.Set)):
                self.mutable_defaults.append(node.name)
                
        # Check 2: Missing Return detection logic (improved)
        has_return = any(isinstance(n, ast.Return) for n in ast.walk(node))
        # Simple detection of print usage inside function
        has_print = False
        for n in ast.walk(node):
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print':
                has_print = True
        
        if not has_return and has_print and node.name != 'main' and not node.name.startswith('test'):
             self.warnings.append({
                 "code": "print_no_return",
                 "msg_es": f"La función '{node.name}' imprime pero no devuelve nada (return). ¿Seguro que es lo que pide el ejercicio?",
                 "msg_eu": f"'{node.name}' funtzioak inprimatu egiten du baina ez du ezer itzultzen (return). Ziur ariketak hori eskatzen duela?"
             })
             
        self.generic_visit(node)

    def visit_Assign(self, node):
        # Check 3: Variable Shadowing
        forbidden = ['list', 'dict', 'str', 'int', 'sum', 'min', 'max', 'type', 'input', 'len', 'range']
        for target in node.targets:
            if isinstance(target, ast.Name):
                if target.id in forbidden:
                    self.shadowed_builtins.append(target.id)
        self.generic_visit(node)

    def visit_Global(self, node):
        # Check 4: Global keywords
        self.global_usage.extend(node.names)
        self.generic_visit(node)

    def visit_For(self, node):
        self.stats["loops"] += 1
        self.generic_visit(node)
    
    def visit_While(self, node):
        self.stats["loops"] += 1
        # Check 5: While True simple check
        if isinstance(node.test, ast.Constant) and node.test.value == True:
            has_break = any(isinstance(n, ast.Break) for n in ast.walk(node))
            if not has_break:
                self.warnings.append({
                    "code": "infinite_loop",
                    "msg_es": "Tienes un 'while True' sin 'break'. Bucle infinito detectado.",
                    "msg_eu": "'while True' bat daukazu 'break' gabe. Begizta infinitua atzeman da."
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
                    "msg_es": f"Has usado nombres reservados de Python como variable: {names}. Esto romperá tu código.",
                    "msg_eu": f"Pythonen izen erreserbatuak erabili dituzu aldagai gisa: {names}. Honek zure kodea hautsiko du."
                })
            
            if self.mutable_defaults:
                funcs = ", ".join(set(self.mutable_defaults))
                self.warnings.append({
                    "code": "mutable_default",
                    "msg_es": f"En '{funcs}': No uses listas/diccionarios vacíos como argumento por defecto.",
                    "msg_eu": f"'{funcs}'-en: Ez erabili zerrenda/hiztegi hutsak argumentu lehenetsi gisa."
                })
                
            return {"stats": self.stats, "warnings": self.warnings}
            
        except SyntaxError as e:
            return {"error": "syntax", "details": str(e), "line": e.lineno, "offset": e.offset}
        except Exception as e:
            # Fallback for internal linter errors
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
    
    # Generic Fallback - But translated!
    advice_es = f"Error del tipo {exc_name}. Revisa el mensaje original."
    advice_eu = f"{exc_name} motako errorea. Berrikusi jatorrizko mezua."
    
    # 1. Match specific regex patterns from DB (Priority)
    found_match = False
    
    for key, info in ADVICE_DB.items():
        if "pattern" in info and re.search(info["pattern"], error_msg, re.IGNORECASE):
            advice_es = info["es"]
            advice_eu = info["eu"]
            found_match = True
            break
            
    # 2. Check Exception Names if no regex match found
    if not found_match:
        if exc_name == "NameError":
            match = re.search(r"name '(.+?)' is not defined", error_msg)
            var_name = match.group(1) if match else "variable"
            advice_es = f"No existe la variable '{var_name}'. ¿Error al escribir?"
            advice_eu = f"Ez da existitzen '{var_name}' aldagaia. Idaztean errorea?"
        
        elif exc_name == "IndexError":
            advice_es = ADVICE_DB["index_error"]["es"]
            advice_eu = ADVICE_DB["index_error"]["eu"]
            
        elif exc_name == "KeyError":
            match = re.search(r"'(.*?)'", error_msg)
            key = match.group(1) if match else "clave"
            advice_es = ADVICE_DB["key_error"]["es"] + f" Clave: {key}"
            advice_eu = ADVICE_DB["key_error"]["eu"] + f" Gakoa: {key}"
            
        elif exc_name == "ZeroDivisionError":
             advice_es = ADVICE_DB["zero_division"]["es"]
             advice_eu = ADVICE_DB["zero_division"]["eu"]

        elif exc_name == "ModuleNotFoundError" or exc_name == "ImportError":
             advice_es = ADVICE_DB["module_not_found"]["es"]
             advice_eu = ADVICE_DB["module_not_found"]["eu"]

        elif exc_name == "EOFError":
             advice_es = ADVICE_DB["eof_error"]["es"]
             advice_eu = ADVICE_DB["eof_error"]["eu"]
             
        elif exc_name == "UnboundLocalError":
             advice_es = ADVICE_DB["unbound_local"]["es"]
             advice_eu = ADVICE_DB["unbound_local"]["eu"]
             
        elif exc_name == "RecursionError":
             advice_es = ADVICE_DB["recursion_error"]["es"]
             advice_eu = ADVICE_DB["recursion_error"]["eu"]
             
        elif exc_name == "AttributeError" and "NoneType" in error_msg:
             advice_es = ADVICE_DB["attribute_error_none"]["es"]
             advice_eu = ADVICE_DB["attribute_error_none"]["eu"]
             
        elif exc_name == "IndentationError":
             advice_es = ADVICE_DB["indentation_error"]["es"]
             advice_eu = ADVICE_DB["indentation_error"]["eu"]

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
