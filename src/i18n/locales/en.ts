import { Translation } from '../../core/store/languageStore';

export const ENG: Translation = {
    // Core UI
    title: "UpnAssist 2026",
    university: "UPNA - Public University of Navarre",
    sandbox: "Free Playground",
    part1: "Part 1",
    run: "Run",
    submit: "Submit",
    stop: "Stop",
    reset: "Reset",
    resetConfirm: "Restore original code? Your changes will be lost.",
    terminal: "Terminal Output",
    tests: "Test Results",
    exercise: "Exercise",
    completed: "Completed",
    footer: "Designed by Xabier Olaz Moratinos. Content adapted for UPNassist 2026.",
    courses: "Courses",
    writeCode: "Type here and press Enter...",
    editorTitle: "Python Editor",
    endOf: "End of",
    errorPrefix: "\nError: ",
    criticalError: "Critical Error: ",
    noTests: "This exercise has no tests configured.",
    interrupted: "\nExecution interrupted.",
    feedbackSuccess: "Excellent! All tests passed",
    feedbackReview: "Review needed",
    testCount: "Tests",
    feedbackFail: "Some tests failed. Check details below.",
    introProg: "Introduction to Programming",
    advProg: "Advanced Course",
    logOut: "Log out",
    analyzing: "Analyzing...",
    debug: "Debug",
    step: "Step",
    continue: "Continue",
    executing: "Running...",
    variables: "Variables",
    noVariables: "No variables defined",
    hints: "Hints",
    hide: "Hide",
    show: "Show",
    allHintsUsed: "You have used all available hints",
    hintsAvailable: "Available hints:",
    hintLabel: "Hint",
    useNextHint: "Use next hint",
    remaining: "remaining",
    qualityScore: "Quality Score",
    lineLabel: "Line",
    codeAnalysisTitle: "Code Analysis",
    points: "Points",
    dataStruct: "Data Structures (Python)",
    action: "Action",
    info: "Info",

    // Visualizers
    visualizers: {
      list: {
        title: "List Methods Simulator",
        instruction: "Hover over methods to see how the list changes.",
        method: "Method",
        usage: "Usage",
        description: "Description"
      },
      fstring: {
        title: "F-Strings Laboratory"
      },
      sparseMatrix: {
        title: "Dense Matrix vs COO Format",
        denseMatrix: "Dense Matrix",
        cooFormat: "COO Representation (3 Lists)",
        instruction: "Click on the grid to add/remove non-zero numbers.",
        memoryUsage: "Memory Usage:",
        fixedUnits: "25 units (Fixed)"
      },
      mainGuard: {
        title: "Module Context Simulator",
        runDirect: "Run directly (python script.py)",
        importModule: "Import (import script)",
        descExecute: "When you run a file directly, Python sets its name to '__main__'. This triggers the protected code.",
        descImport: "When imported, the file keeps its original filename. The protected code is SKIPPED."
      },
      oop: {
        constructor: "1. The Constructor",
        selfPointer: "2. The 'self' Pointer",
        stack: "Function Scope (Temporary)",
        heap: "Object Memory (Permanent)",
        btnCall: "Call Estudiante('Alice')",
        btnAssign: "Exec: self.name = name",
        btnReset: "Reset",
        selfInstruction: "Click an object to call its 'greet()' method and see where 'self' points.",
        waiting: "Waiting to start...",
        paramExists: "Parameter 'nombre' exists in temporary memory.",
        dataCopied: "Data copied to 'self'. Now it survives!"
      }
    },
    errors: {
        // STYLE
        STYLE_SNAKE_CASE_VAR: "Variable '{name}' should use snake_case naming.",
        STYLE_SNAKE_CASE_FUNC: "Function '{name}' should use snake_case naming.",
        STYLE_PRIVATE_VAR: "Variable '{name}' is marked as private/internal.",
        STYLE_IMPORTS_TOP: "Imports should be at the top of the file.",
        STYLE_INPUT_PROMPT: "input() called without a prompt string. User won't know what to type.",
        
        // LOGIC
        LOGIC_UNUSED_VAR: "Variable '{name}' is assigned but never used.",
        LOGIC_DEEP_NESTING: "Deep nesting detected (consider refactoring).",
        LOGIC_ASSIGN_IN_COND: "Assignment in conditional statement (did you mean ==?).",
        
        // PERF
        PERF_RANGE_LEN: "Consider using direct iteration instead of range(len()).",
        
        // BEST PRACTICE
        BEST_PRACTICE_DOCSTRING: "Function '{name}' should have a docstring.",
        BEST_PRACTICE_MANY_PRINT: "Many print statements detected.",
        BEST_PRACTICE_COMMENTS: "Consider adding more comments to explain your code.",
        
        // FILE
        FILE_TOO_LARGE: "Large file detected - consider breaking into smaller modules.",

        // AST (Python)
        AST_MISSING_COLON: "Missing colon ':' at the end of the line.",
        AST_LEADING_ZEROS: "Numbers cannot start with 0 in Python.",
        AST_OUTSIDE_LOOP: "'break' or 'continue' used outside a loop.",
        AST_UNMATCHED_PAREN: "Unmatched parenthesis, bracket, or brace.",
        AST_INDENTATION: "Indentation error. Check your spaces.",
        AST_ASSIGN_COMPARE: "Cannot assign to literal here.",
        AST_EOL_STRING: "EOL while scanning string literal (unclosed quote).",
        AST_STR_NO_APPEND: "Strings do not have .append(). Use '+' to join.",
        AST_LIST_NO_ADD: "Lists use .append(), not .add().",
        AST_STR_NO_REVERSE: "Strings do not have .reverse(). Use slicing [::-1].",
        AST_TYPE_MATH: "Unsupported operand types (e.g. str + int).",
        AST_NOT_SUBSCRIPTABLE: "Object is not subscriptable (cannot use []).",
        AST_NOT_CALLABLE: "Object is not callable (cannot use ()).",
        AST_ARG_COUNT: "Incorrect number of arguments.",
        AST_VALUE_INT: "Invalid literal for int().",
        AST_UNPACKING: "Wrong number of values to unpack.",
        AST_INDEX_ERROR: "List index out of range.",
        AST_KEY_ERROR: "Key not found in dictionary.",
        AST_DICT_SIZE: "Dictionary changed size during iteration.",
        AST_ATTR_NONE: "'NoneType' has no attribute (variable is None).",
        AST_ZERO_DIV: "Division by zero.",
        AST_MODULE_NOT_FOUND: "Module not found.",
        AST_EOF: "Unexpected EOF (End Of File). Input request loop?",
        AST_UNBOUND_LOCAL: "Local variable referenced before assignment.",
        AST_RECURSION: "Maximum recursion depth exceeded.",
        AST_INIT_TYPO: "In class '{class}': Method '{method}' looks like a typo of '__init__'.",
        AST_MISSING_SELF: "In method '{method}': First argument should be 'self'.",
        AST_PRINT_NO_RETURN: "Function '{func}' prints but returns nothing. Missing return?",
        AST_SHADOWING: "Shadowing built-in name: {names}.",
        AST_MUTABLE_DEFAULT: "Mutable default argument in: {funcs}.",
        AST_INPLACE_ASSIGN: "Method '{method}' returns None. Do not assign it.",
        AST_TUPLE_COMMA: "Accidental tuple created with comma.",
        AST_LIST_MULT: "List multiplication [[x]*n]*m creates references.",
        AST_IMMUTABLE_STR: "String method '{method}' returns new string. Assign it.",
        AST_MODIFY_ITER: "Modifying list '{name}' while iterating over it.",
        AST_WHILE_TRUE: "Infinite 'while True' loop (missing break).",
        AST_FLOAT_EQ: "Comparing floats with == is dangerous.",
        AST_IS_LITERAL: "Do not use 'is' with literals.",
        AST_BOOL_TRAP: "Boolean logic trap with literal value.",
        AST_BITWISE_XOR: "Used bitwise XOR (^). Did you mean power (**)?",
        AST_OPEN_NO_WITH: "Consider using 'with open(...)'.",
        AST_PRINT_FUNC: "Printing function '{name}' instead of calling it.",
        AST_BARE_EXCEPT: "Avoid bare 'except:'.",
        AST_EXCEPT_PASS: "Avoid 'pass' in exception block.",
        
        // PARETO EXPANSION
        AST_TUPLE_ITEM_ASSIGN: "Tuples are immutable. You cannot change their items.",
        AST_STR_ITEM_ASSIGN: "Strings are immutable. Use slicing to create a new string.",
        AST_LEN_AS_METHOD: "Lists do not have .len(). Use len(list).",
        AST_NULL_CHECK: "Python uses 'None', not 'null'.",
        AST_RETURN_LOOP_EARLY: "Unconditional return inside loop. Loop will only run once.",
        AST_UNREACHABLE_CODE: "Code after return/break is unreachable.",
        AST_COMPARE_BOOL: "Comparing with True/False is redundant. Use 'if x:' or 'if not x:'.",
        AST_REDUNDANT_KEYS: ".keys() is redundant. Just iterate over the dictionary.",
        AST_RANGE_ZERO: "range(0, X) is the same as range(X). The 0 is implicit.",
        SYNTAX_ELSE_IF: "Python uses 'elif', not 'else if'.",

        // EXPANDED RULES (CLEANUP)
        AST_POINTLESS_STATEMENT: "Pointless statement (no effect). Did you forget an assignment?",
        AST_GLOBAL_STMT: "Avoid using 'global'. Pass arguments and return values instead.",
        AST_CONFUSING_TUPLE: "Trailing comma creates a tuple. Did you mean to return a single value?",
        AST_DUPLICATE_KEY: "Duplicate key '{key}' in dictionary.",

        // RUNTIME
        RUNTIME_SYNTAX_PRINT: "Missing parentheses in call to 'print'.",
        RUNTIME_SYNTAX_INVALID: "Invalid syntax.",
        RUNTIME_NAME_ERROR: "Name '{name}' is not defined.",
        RUNTIME_INDENT_BLOCK: "Expected an indented block.",
        RUNTIME_INDENT_ALIGN: "Indentation alignment is incorrect.",
        RUNTIME_TYPE_CALLABLE: "Object is not callable.",
        RUNTIME_ZERO_DIV: "Division by zero.",

        // ASSERTIONS
        ASSERT_EQUAL_STR: "Expected '{expected}', but got '{actual}'. {hint}",
        ASSERT_EQUAL_NUM: "Expected {expected}, but got {actual}. {hint}",
        ASSERT_GENERIC: "{message}",

        // SYSTEM
        SYS_INTERNAL: "Internal Error.",
        SYS_TIMEOUT: "Execution timed out.",
        SYS_OUTPUT_CORRUPT: "Corrupt output.",

        // COMMON ASSERTIONS
        ASSERT_INPUT_TOO_MANY: "Input is asked too many times.",
        ASSERT_INPUT_NOT_EXPECTED: "Asking input from the user was not expected.",
        ASSERT_NO_OUTPUT: "Your program does not print out anything.",
        ASSERT_MISSING_FUNC: "Your code should contain function named as '{name}'."
    }
};
