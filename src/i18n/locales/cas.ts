import { Translation } from '../../core/store/languageStore';

export const CAS: Translation = {
    // Core UI
    title: "UpnAssist 2026",
    university: "UPNA - Universidad Pública de Navarra",
    sandbox: "Zona de Pruebas",
    part1: "Parte 1",
    run: "Ejecutar",
    submit: "Enviar",
    stop: "Parar",
    reset: "Reiniciar",
    resetConfirm: "¿Restaurar código original? Se perderán tus cambios.",
    terminal: "Terminal",
    tests: "Resultados",
    exercise: "Ejercicio",
    completed: "Completado",
    footer: "Diseñado por Xabier Olaz Moratinos. Contenido adaptado para UPNassist 2026.",
    courses: "Cursos",
    writeCode: "Escribe aquí y pulsa Enter...",
    editorTitle: "Editor Python",
    endOf: "Fin de la",
    errorPrefix: "\nError: ",
    criticalError: "Error crítico: ",
    noTests: "Este ejercicio no tiene pruebas configuradas.",
    interrupted: "\nEjecución interrumpida.",
    feedbackSuccess: "¡Excelente! Todo correcto",
    feedbackReview: "Revisión necesaria",
    testCount: "Pruebas",
    feedbackFail: "Algunas pruebas fallaron. Revisa los detalles abajo.",
    introProg: "Introducción a la Programación",
    advProg: "Curso Avanzado",
    logOut: "Cerrar sesión",
    analyzing: "Analizando...",
    debug: "Depurar",
    step: "Paso",
    continue: "Continuar",
    executing: "Ejecutando...",
    variables: "Variables",
    noVariables: "No hay variables definidas",
    hints: "Pistas",
    hide: "Ocultar",
    show: "Mostrar",
    allHintsUsed: "Has usado todas las pistas disponibles",
    hintsAvailable: "Pistas disponibles:",
    hintLabel: "Pista",
    useNextHint: "Usar siguiente pista",
    remaining: "restantes",
    qualityScore: "Calidad del Código",
    lineLabel: "Línea",
    codeAnalysisTitle: "Análisis de Código",
    points: "Puntos",
    dataStruct: "Estructura de Datos (Python)",
    action: "Acción",
    info: "Info",

    // Visualizers
    visualizers: {
      list: {
        title: "Simulador de Métodos de Lista",
        instruction: "Pasa el ratón sobre los métodos para ver cómo cambia la lista.",
        method: "Método",
        usage: "Uso",
        description: "Explicación"
      },
      fstring: {
        title: "Laboratorio F-Strings"
      },
      sparseMatrix: {
        title: "Matriz Densa vs Formato COO",
        denseMatrix: "Matriz Densa (5x5)",
        cooFormat: "Representación COO (3 Listas)",
        instruction: "Haz clic en la cuadrícula para poner/quitar números.",
        memoryUsage: "Memoria Usada:",
        fixedUnits: "25 unidades (Fijo)"
      },
      mainGuard: {
        title: "Simulador de Contexto de Módulo",
        runDirect: "Ejecutar directo (python script.py)",
        importModule: "Importar (import script)",
        descExecute: "Al ejecutar el archivo directamente, Python le pone el nombre '__main__'. Esto activa el código protegido.",
        descImport: "Al importarse, el archivo mantiene su nombre original. El código protegido se SALTA."
      },
      oop: {
        constructor: "1. El Constructor",
        selfPointer: "2. El Puntero 'self'",
        stack: "Ámbito de Función (Temporal)",
        heap: "Memoria del Objeto (Permanente)",
        btnCall: "Llamar Estudiante('Alicia')",
        btnAssign: "Ejec: self.nombre = nombre",
        btnReset: "Reiniciar",
        selfInstruction: "Haz clic en un objeto para llamar a 'saludar()' y ver a dónde apunta 'self'.",
        waiting: "Esperando a empezar...",
        paramExists: "El parámetro 'nombre' existe en la memoria temporal.",
        dataCopied: "¡Datos copiados a 'self'. Ahora sobrevive!"
      }
    },
    errors: {
        // STYLE
        STYLE_SNAKE_CASE_VAR: "La variable '{name}' debería usar snake_case.",
        STYLE_SNAKE_CASE_FUNC: "La función '{name}' debería usar snake_case.",
        STYLE_PRIVATE_VAR: "La variable '{name}' está marcada como privada/interna.",
        STYLE_IMPORTS_TOP: "Las importaciones deberían estar al inicio del archivo.",
        STYLE_INPUT_PROMPT: "Llamada a input() sin mensaje. El usuario no sabrá qué escribir.",
        
        // LOGIC
        LOGIC_UNUSED_VAR: "La variable '{name}' se asigna pero nunca se usa.",
        LOGIC_DEEP_NESTING: "Anidamiento profundo detectado (considera refactorizar).",
        LOGIC_ASSIGN_IN_COND: "Asignación en condicional (¿querías decir ==?).",
        
        // PERF
        PERF_RANGE_LEN: "Considera iterar directamente en lugar de range(len()).",
        
        // BEST PRACTICE
        BEST_PRACTICE_DOCSTRING: "La función '{name}' debería tener un docstring.",
        BEST_PRACTICE_MANY_PRINT: "Se han detectado demasiados prints.",
        BEST_PRACTICE_COMMENTS: "Considera añadir más comentarios explicativos.",
        
        // FILE
        FILE_TOO_LARGE: "Archivo muy largo - considera dividirlo en módulos.",

        // AST (Python)
        AST_MISSING_COLON: "Faltan dos puntos ':' al final de la línea.",
        AST_LEADING_ZEROS: "Los números no pueden empezar por 0 en Python.",
        AST_OUTSIDE_LOOP: "Uso de 'break' o 'continue' fuera de un bucle.",
        AST_UNMATCHED_PAREN: "Paréntesis, corchete o llave sin cerrar.",
        AST_INDENTATION: "Error de indentación. Revisa los espacios.",
        AST_ASSIGN_COMPARE: "No se puede asignar a un literal.",
        AST_EOL_STRING: "Cadena de texto sin cerrar al final de la línea.",
        AST_STR_NO_APPEND: "Los strings no tienen .append(). Usa '+' para unir.",
        AST_LIST_NO_ADD: "Las listas usan .append(), no .add().",
        AST_STR_NO_REVERSE: "Los strings no tienen .reverse(). Usa slicing [::-1].",
        AST_TYPE_MATH: "Tipos no compatibles (ej. str + int).",
        AST_NOT_SUBSCRIPTABLE: "El objeto no es indexable (no puedes usar []).",
        AST_NOT_CALLABLE: "El objeto no es llamable (no puedes usar ()).",
        AST_ARG_COUNT: "Número incorrecto de argumentos.",
        AST_VALUE_INT: "Literal inválido para int().",
        AST_UNPACKING: "Número incorrecto de valores para desempaquetar.",
        AST_INDEX_ERROR: "Índice de lista fuera de rango.",
        AST_KEY_ERROR: "Clave no encontrada en el diccionario.",
        AST_DICT_SIZE: "El diccionario cambió de tamaño durante la iteración.",
        AST_ATTR_NONE: "'NoneType' no tiene atributo (la variable es None).",
        AST_ZERO_DIV: "División por cero.",
        AST_MODULE_NOT_FOUND: "Módulo no encontrado.",
        AST_EOF: "Fin de archivo inesperado. ¿Bucle infinito pidiendo input?",
        AST_UNBOUND_LOCAL: "Variable local usada antes de asignación.",
        AST_RECURSION: "Profundidad máxima de recursión excedida.",
        AST_INIT_TYPO: "En clase '{class}': '{method}' parece una errata de '__init__'.",
        AST_MISSING_SELF: "En método '{method}': El primer argumento debe ser 'self'.",
        AST_PRINT_NO_RETURN: "La función '{func}' imprime pero no retorna nada.",
        AST_SHADOWING: "Ocultando nombre reservado: {names}.",
        AST_MUTABLE_DEFAULT: "Argumento por defecto mutable en: {funcs}.",
        AST_INPLACE_ASSIGN: "El método '{method}' retorna None. No lo asignes.",
        AST_TUPLE_COMMA: "Tupla accidental creada con coma.",
        AST_LIST_MULT: "La multiplicación de listas [[x]*n]*m crea referencias.",
        AST_IMMUTABLE_STR: "El método '{method}' retorna un nuevo string. Asígnalo.",
        AST_MODIFY_ITER: "Modificando lista '{name}' mientras se itera.",
        AST_WHILE_TRUE: "Bucle 'while True' infinito (falta break).",
        AST_FLOAT_EQ: "Comparar floats con == es peligroso.",
        AST_IS_LITERAL: "No uses 'is' con literales.",
        AST_BOOL_TRAP: "Trampa lógica con literal en booleano.",
        AST_BITWISE_XOR: "Usado XOR bit a bit (^). ¿Querías decir potencia (**)?",
        AST_OPEN_NO_WITH: "Considera usar 'with open(...)'.",
        AST_PRINT_FUNC: "Imprimiendo función '{name}' en lugar de llamarla.",
        AST_BARE_EXCEPT: "Evita 'except:' vacío.",
        AST_EXCEPT_PASS: "Evita 'pass' en bloque de excepción.",

        // PARETO EXPANSION
        AST_TUPLE_ITEM_ASSIGN: "Las tuplas son inmutables. No puedes cambiar sus elementos.",
        AST_STR_ITEM_ASSIGN: "Los strings son inmutables. Usa slicing para crear uno nuevo.",
        AST_LEN_AS_METHOD: "Las listas no tienen .len(). Usa len(lista).",
        AST_NULL_CHECK: "Python usa 'None', no 'null'.",
        AST_RETURN_LOOP_EARLY: "Return incondicional en bucle. El bucle solo correrá una vez.",
        AST_UNREACHABLE_CODE: "El código después de return/break es inalcanzable.",
        AST_COMPARE_BOOL: "Comparar con True/False es redundante. Usa 'if x:' o 'if not x:'.",
        AST_REDUNDANT_KEYS: ".keys() es redundante. Itera directamente sobre el diccionario.",
        AST_RANGE_ZERO: "range(0, X) es lo mismo que range(X). El 0 es implícito.",
        SYNTAX_ELSE_IF: "Python usa 'elif', no 'else if'.",

        // EXPANDED RULES (CLEANUP)
        AST_POINTLESS_STATEMENT: "Sentencia sin efecto. ¿Olvidaste una asignación?",
        AST_GLOBAL_STMT: "Evita usar 'global'. Pasa argumentos y retorna valores en su lugar.",
        AST_CONFUSING_TUPLE: "La coma final crea una tupla. ¿Querías retornar un solo valor?",
        AST_DUPLICATE_KEY: "Clave duplicada '{key}' en el diccionario.",

        // RUNTIME
        RUNTIME_SYNTAX_PRINT: "Faltan paréntesis en la llamada a 'print'.",
        RUNTIME_SYNTAX_INVALID: "Sintaxis inválida.",
        RUNTIME_NAME_ERROR: "El nombre '{name}' no está definido.",
        RUNTIME_INDENT_BLOCK: "Se esperaba un bloque indentado.",
        RUNTIME_INDENT_ALIGN: "Alineación de indentación incorrecta.",
        RUNTIME_TYPE_CALLABLE: "El objeto no es llamable.",
        RUNTIME_ZERO_DIV: "División por cero.",

        // ASSERTIONS
        ASSERT_EQUAL_STR: "Se esperaba '{expected}', pero se obtuvo '{actual}'. {hint}",
        ASSERT_EQUAL_NUM: "Se esperaba {expected}, pero se obtuvo {actual}. {hint}",
        ASSERT_GENERIC: "{message}",

        // SYSTEM
        SYS_INTERNAL: "Error Interno.",
        SYS_TIMEOUT: "Tiempo de ejecución agotado.",
        SYS_OUTPUT_CORRUPT: "Salida corrupta.",

        // COMMON ASSERTIONS (AUTO-TRANSLATED)
        ASSERT_INPUT_TOO_MANY: "Se pidió 'input' demasiadas veces.",
        ASSERT_INPUT_NOT_EXPECTED: "No se esperaba que el programa pidiera 'input'.",
        ASSERT_NO_OUTPUT: "Tu programa no imprimió nada.",
        ASSERT_MISSING_FUNC: "Tu código debería contener la función '{name}'."
    }
};
