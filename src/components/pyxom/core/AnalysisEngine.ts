export const ANALYSIS_ENGINE_PY = `
import ast
import sys
import traceback

class PedagogicalAnalyzer(ast.NodeVisitor):
    def __init__(self):
        self.stats = {
            "loops": 0,
            "conditionals": 0,
            "functions": 0,
            "imports": [],
            "variables": set()
        }
        self.suggestions = []

    def visit_For(self, node):
        self.stats["loops"] += 1
        self.generic_visit(node)

    def visit_While(self, node):
        self.stats["loops"] += 1
        self.generic_visit(node)

    def visit_If(self, node):
        self.stats["conditionals"] += 1
        self.generic_visit(node)

    def visit_FunctionDef(self, node):
        self.stats["functions"] += 1
        self.generic_visit(node)

    def visit_Import(self, node):
        for alias in node.names:
            self.stats["imports"].append(alias.name)
        self.generic_visit(node)
    
    def visit_ImportFrom(self, node):
        self.stats["imports"].append(node.module)
        self.generic_visit(node)

    def analyze(self, code):
        try:
            tree = ast.parse(code)
            self.visit(tree)
            return self.stats
        except SyntaxError as e:
            return {"error": "syntax", "details": str(e), "line": e.lineno}

def analyze_student_code(code_str):
    analyzer = PedagogicalAnalyzer()
    return analyzer.analyze(code_str)

def humanize_error(exc_type, exc_value, tb):
    # Traducir errores crípticos de Python a consejos útiles
    error_msg = str(exc_value)
    advice = ""
    
    if "NameError" in str(exc_type):
        advice = "Parece que intentas usar una variable o función que no existe. ¿Revisaste si está bien escrita o definida antes?"
    elif "IndentationError" in str(exc_type):
        advice = "Python es muy estricto con los espacios. Asegúrate de que todas las líneas dentro de un bloque estén alineadas."
    elif "SyntaxError" in str(exc_type):
        if "expected ':'" in error_msg:
            advice = "Te falta un signo de dos puntos ':' al final de la línea."
        elif "EOL while scanning string literal" in error_msg:
            advice = "No has cerrado unas comillas en tu texto."
    elif "TypeError" in str(exc_type):
        if "unsupported operand type" in error_msg:
            advice = "Estás intentando operar con tipos de datos incompatibles (ej: sumar texto con número)."
            
    return {
        "type": str(exc_type.__name__),
        "message": error_msg,
        "advice": advice,
        "line": traceback.extract_tb(tb)[-1].lineno if tb else None
    }
`;
