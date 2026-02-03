import { Translation } from '../../core/store/languageStore';

export const EUS: Translation = {
    // Core UI
    title: "UpnAssist 2026",
    university: "NUP - Nafarroako Unibertsitate Publikoa",
    sandbox: "Proba Eremua",
    part1: "1. Zatia",
    run: "Exekutatu",
    submit: "Bidali",
    stop: "Gelditu",
    reset: "Hasieratu",
    resetConfirm: "Jatorrizko kodea berreskuratu? Aldaketak galduko dira.",
    terminal: "Terminala",
    tests: "Emaitzak",
    exercise: "Ariketa",
    completed: "Eginda",
    footer: "Xabier Olaz Moratinosek diseinatua. UPNassist 2026rako egokitutako edukia.",
    courses: "Ikastaroak",
    writeCode: "Idatzi hemen eta sakatu Enter...",
    editorTitle: "Python Editorea",
    endOf: "Amaiera:",
    errorPrefix: "\nErrorea: ",
    criticalError: "Errore larria: ",
    noTests: "Ariketa honek ez du probarik konfiguratuta.",
    interrupted: "\nExekuzioa etenda.",
    feedbackSuccess: "Bikain! Proba guztiak gainditu dira",
    feedbackReview: "Berrikusi beharra",
    testCount: "Probak",
    feedbackFail: "Proba batzuek huts egin dute. Ikusi xehetasunak behean.",
    introProg: "Programazioaren Sarrera",
    advProg: "Ikastaro Aurreratua",
    logOut: "Saioa itxi",
    analyzing: "Aztertzen...",
    debug: "Araztu",
    step: "Urratsa",
    continue: "Jarraitu",
    executing: "Exekutatzen...",
    variables: "Aldagaiak",
    noVariables: "Ez dago aldagairik definituta",
    hints: "Pistak",
    hide: "Ezkutatu",
    show: "Erakutsi",
    allHintsUsed: "Erabilgarri dauden pista guztiak erabili dituzu",
    hintsAvailable: "Erabilgarri dauden pistak:",
    hintLabel: "Pista",
    useNextHint: "Erabili hurrengo pista",
    remaining: "geratzen dira",
    qualityScore: "Kodearen Kalitatea",
    lineLabel: "Lerroa",
    codeAnalysisTitle: "Kodearen Analisia",
    points: "Puntuak",
    dataStruct: "Datu Egiturak (Python)",
    action: "Ekintza",
    info: "Info",

    // Visualizers
    visualizers: {
      list: {
        title: "Zerrenda Metodoen Simulatzailea",
        instruction: "Pasatu sagua metodoen gainetik zerrenda nola aldatzen den ikusteko.",
        method: "Metodoa",
        usage: "Erabilera",
        description: "Azalpena"
      },
      fstring: {
        title: "F-Strings Laborategia"
      },
      sparseMatrix: {
        title: "Matrize Trinkoa vs COO Formatua",
        denseMatrix: "Matrize Trinkoa (5x5)",
        cooFormat: "COO Adierazpena (3 Zerrenda)",
        instruction: "Egin klik saretan zenbakiak gehitzeko/kentzeko.",
        memoryUsage: "Memoria Erabilera:",
        fixedUnits: "25 unitate (Finkoa)"
      },
      mainGuard: {
        title: "Modulu Testuinguru Simuladorea",
        runDirect: "Zuzenean exekutatu (python script.py)",
        importModule: "Inportatu (import script)",
        descExecute: "Fitxategia zuzenean exekutatzen duzunean, Python-ek '__main__' izena jartzen dio. Honek babestutako kodea aktibatzen du.",
        descImport: "Inportatzean, fitxategiak bere jatorrizko izena mantentzen du. Babestutako kodea SALTATU egiten da."
      },
      oop: {
        constructor: "1. Eraikitzailea",
        selfPointer: "2. 'self' Erakuslea",
        stack: "Funtzio Eremua (Denborazkoa)",
        heap: "Objektuaren Memoria (Iraunkorra)",
        btnCall: "Deitu Estudiante('Ane')",
        btnAssign: "Exek: self.izena = izena",
        btnReset: "Berrabiarazi",
        selfInstruction: "Egin klik objektu batean 'agurtu()' deitzeko eta ikusi 'self' nora doan.",
        waiting: "Hasteko zain...",
        paramExists: "'izena' parametroa aldi baterako memorian dago.",
        dataCopied: "Datuak 'self'-era kopiatuta. Orain biziraunen du!"
      }
    },
    errors: {
        // STYLE
        STYLE_SNAKE_CASE_VAR: "'{name}' aldagaiak snake_case erabili beharko luke.",
        STYLE_SNAKE_CASE_FUNC: "'{name}' funtzioak snake_case erabili beharko luke.",
        STYLE_PRIVATE_VAR: "'{name}' aldagaia pribatu/barneko gisa markatuta dago.",
        STYLE_IMPORTS_TOP: "Inportazioak fitxategiaren hasieran egon beharko lirateke.",
        STYLE_INPUT_PROMPT: "input() deia prompt-ik gabe. Erabiltzaileak ez du jakingo zer idatzi.",
        
        // LOGIC
        LOGIC_UNUSED_VAR: "'{name}' aldagaia esleitzen da baina ez da inoiz erabiltzen.",
        LOGIC_DEEP_NESTING: "Habiaratze sakona antzeman da (kontuan hartu berregituratzea).",
        LOGIC_ASSIGN_IN_COND: "Esleipena baldintzazkoan (== esan nahi zenuen?).",
        
        // PERF
        PERF_RANGE_LEN: "Erabili iterazio zuzena range(len()) ordez.",
        
        // BEST PRACTICE
        BEST_PRACTICE_DOCSTRING: "'{name}' funtzioak docstring bat izan beharko luke.",
        BEST_PRACTICE_MANY_PRINT: "Print gehiegi antzeman dira.",
        BEST_PRACTICE_COMMENTS: "Kontuan hartu iruzkin gehiago gehitzea.",
        
        // FILE
        FILE_TOO_LARGE: "Fitxategi handiegia - zatitu modulu txikiagoetan.",

        // AST (Python)
        AST_MISSING_COLON: "Bi puntu ':' falta dira lerroaren amaieran.",
        AST_LEADING_ZEROS: "Zenbakiak ezin dira 0z hasi Python-en.",
        AST_OUTSIDE_LOOP: "'break' edo 'continue' begizta kanpoan.",
        AST_UNMATCHED_PAREN: "Parentesi, kortxete edo giltza itxi gabe.",
        AST_INDENTATION: "Indentazio errorea. Egiaztatu espazioak.",
        AST_ASSIGN_COMPARE: "Ezin zaio literal bati esleitu.",
        AST_EOL_STRING: "Testu katea itxi gabe lerroaren amaieran.",
        AST_STR_NO_APPEND: "String-ek ez dute .append(). Erabili '+' elkartzeko.",
        AST_LIST_NO_ADD: "Zerrendek .append() darabilte, ez .add().",
        AST_STR_NO_REVERSE: "String-ek ez dute .reverse(). Erabili slicing [::-1].",
        AST_TYPE_MATH: "Mota bateraezinak (adib. str + int).",
        AST_NOT_SUBSCRIPTABLE: "Objektua ez da indexagarria (ezin erabili []).",
        AST_NOT_CALLABLE: "Objektua ez da deigarria (ezin erabili ()).",
        AST_ARG_COUNT: "Argumentu kopuru okerra.",
        AST_VALUE_INT: "Literal baliogabea int()-rako.",
        AST_UNPACKING: "Balio kopuru okerra desegiteko.",
        AST_INDEX_ERROR: "Zerrenda indizea rangotik kanpo.",
        AST_KEY_ERROR: "Gakoa ez da hiztegian aurkitu.",
        AST_DICT_SIZE: "Hiztegiaren tamaina aldatu da iterazioan.",
        AST_ATTR_NONE: "'NoneType'-k ez du atributurik (aldagaia None da).",
        AST_ZERO_DIV: "Zatuketa zeroz.",
        AST_MODULE_NOT_FOUND: "Modulua ez da aurkitu.",
        AST_EOF: "Fitxategi amaiera ustekabean. Input eskaera begizta?",
        AST_UNBOUND_LOCAL: "Aldagai lokala esleipenaren aurretik erabilia.",
        AST_RECURSION: "Errekurtsio sakonera maximoa gaindituta.",
        AST_INIT_TYPO: "'{class}' klasean: '{method}' '__init__' errata dirudi.",
        AST_MISSING_SELF: "'{method}' metodoan: Lehen argumentuak 'self' izan behar du.",
        AST_PRINT_NO_RETURN: "'{func}' funtzioak inprimatzen du baina ez du ezer itzultzen.",
        AST_SHADOWING: "Izen erreserbatua ezkutatzen: {names}.",
        AST_MUTABLE_DEFAULT: "Argumentu lehenetsi aldakorra: {funcs}.",
        AST_INPLACE_ASSIGN: "'{method}' metodoak None itzultzen du. Ez esleitu.",
        AST_TUPLE_COMMA: "Tupla istripuz sortua komarekin.",
        AST_LIST_MULT: "[[x]*n]*m zerrenda biderketak erreferentziak sortzen ditu.",
        AST_IMMUTABLE_STR: "'{method}' metodoak string berria itzultzen du. Esleitu.",
        AST_MODIFY_ITER: "'{name}' zerrenda aldatzen iteratzen den bitartean.",
        AST_WHILE_TRUE: "'while True' begizta infinitua (break falta da).",
        AST_FLOAT_EQ: "Float-ak == bidez konparatzea arriskutsua da.",
        AST_IS_LITERAL: "Ez erabili 'is' literalekin.",
        AST_BOOL_TRAP: "Tranpa logikoa literalarekin boolearrean.",
        AST_BITWISE_XOR: "Bitwise XOR (^) erabilia. Potentzia (**) nahi zenuen?",
        AST_OPEN_NO_WITH: "Kontuan hartu 'with open(...)' erabiltzea.",
        AST_PRINT_FUNC: "'{name}' funtzioa inprimatzen deitu ordez.",
        AST_BARE_EXCEPT: "Saihestu 'except:' hutsa.",
        AST_EXCEPT_PASS: "Saihestu 'pass' salbuespen blokean.",

        // PARETO EXPANSION
        AST_TUPLE_ITEM_ASSIGN: "Tuplak aldaezinak dira. Ezin dituzu elementuak aldatu.",
        AST_STR_ITEM_ASSIGN: "String-ak aldaezinak dira. Erabili slicing berria sortzeko.",
        AST_LEN_AS_METHOD: "Zerrendek ez dute .len(). Erabili len(zerrenda).",
        AST_NULL_CHECK: "Python-ek 'None' darabil, ez 'null'.",
        AST_RETURN_LOOP_EARLY: "Return inkonozionala begiztan. Behin bakarrik exekutatuko da.",
        AST_UNREACHABLE_CODE: "Return/break ondorengo kodea ez da inoiz exekutatuko.",
        AST_COMPARE_BOOL: "True/False-rekin konparatzea erredundantea da. Erabili 'if x:'.",
        AST_REDUNDANT_KEYS: ".keys() erredundantea da. Iteratu hiztegiaren gainean.",
        AST_RANGE_ZERO: "range(0, X) eta range(X) berdinak dira. 0a inplizitua da.",
        SYNTAX_ELSE_IF: "Python-ek 'elif' darabil, ez 'else if'.",

        // EXPANDED RULES (CLEANUP)
        AST_POINTLESS_STATEMENT: "Eraginik gabeko sententzia. Esleipen bat ahaztu duzu?",
        AST_GLOBAL_STMT: "Saihestu 'global' erabiltzea. Pasa argumentoak eta itzuli balioak.",
        AST_CONFUSING_TUPLE: "Amaierako komak tupla bat sortzen du. Balio bakarra itzuli nahi zenuen?",
        AST_DUPLICATE_KEY: "'{key}' gako bikoiztua hiztegian.",

        // RUNTIME
        RUNTIME_SYNTAX_PRINT: "Parentesiak falta dira 'print' deian.",
        RUNTIME_SYNTAX_INVALID: "Sintaxi baliogabea.",
        RUNTIME_NAME_ERROR: "'{name}' izena ez dago definituta.",
        RUNTIME_INDENT_BLOCK: "Indentatutako blokea espero zen.",
        RUNTIME_INDENT_ALIGN: "Indentazio lerrokatzea okerra da.",
        RUNTIME_TYPE_CALLABLE: "Objektua ez da deigarria.",
        RUNTIME_ZERO_DIV: "Zatuketa zeroz.",

        // ASSERTIONS
        ASSERT_EQUAL_STR: "'{expected}' espero zen, baina '{actual}' lortu da. {hint}",
        ASSERT_EQUAL_NUM: "{expected} espero zen, baina {actual} lortu da. {hint}",
        ASSERT_GENERIC: "{message}",

        // SYSTEM
        SYS_INTERNAL: "Barne Errorea.",
        SYS_TIMEOUT: "Exekuzio denbora agortuta.",
        SYS_OUTPUT_CORRUPT: "Irteera hondatuta."
    }
};
