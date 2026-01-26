import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'ENG' | 'CAS' | 'EUS';

interface Translation {
  title: string;
  university: string;
  sandbox: string;
  part1: string;
  run: string;
  submit: string;
  stop: string;
  reset: string;
  resetConfirm: string;
  terminal: string;
  tests: string;
  exercise: string;
  completed: string;
  footer: string;
  courses: string;
  writeCode: string;
  editorTitle: string;
  endOf: string;
  errorPrefix: string;
  criticalError: string;
  noTests: string;
  interrupted: string;
  feedbackSuccess: string;
  feedbackReview: string;
  testCount: string;
  feedbackFail: string;
  introProg: string;
  advProg: string;
  // New additions
  logOut: string;
  analyzing: string;
  debug: string;
  step: string;
  continue: string;
  executing: string;
  variables: string;
  noVariables: string;
  hints: string;
  hide: string;
  show: string;
  allHintsUsed: string;
  // Dynamic hint strings (simplified for now)
  hintsAvailable: string; // "Available hints: "
  hintLabel: string; // "Hint"
  useNextHint: string; // "Use next hint"
  remaining: string; // "remaining"
  qualityScore: string;
  lineLabel: string;
  codeAnalysisTitle: string;
  points: string;
  dataStruct: string;
}

const translations: Record<Language, Translation> = {
  ENG: {
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
    dataStruct: "Data Structures (Python)"
  },
  CAS: {
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
    dataStruct: "Estructura de Datos (Python)"
  },
  EUS: {
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
    dataStruct: "Datu Egiturak (Python)"
  }
};

interface LanguageState {
  currentLang: Language;
  t: Translation;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLang: 'CAS',
      t: translations['CAS'],
      setLanguage: (lang) => set({ currentLang: lang, t: translations[lang] })
    }),
    {
      name: 'pyxom-language-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ currentLang: state.currentLang } as any),
      onRehydrateStorage: () => (state) => {
        if (state) {
            state.t = translations[state.currentLang];
        }
      }
    }
  )
);
