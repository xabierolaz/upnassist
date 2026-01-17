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
}

const translations: Record<Language, Translation> = {
  ENG: {
    title: "Python 2026",
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
    footer: "Content adapted for Pyxom vNext.",
    courses: "Courses",
    writeCode: "Type here and press Enter...",
    editorTitle: "Python Editor",
    endOf: "End of",
    errorPrefix: "\n⚠️ Error: ",
    criticalError: "Critical Error: ",
    noTests: "This exercise has no tests configured.",
    interrupted: "\n⛔ Execution interrupted.",
    feedbackSuccess: "Excellent! All tests passed",
    feedbackReview: "Review needed",
    testCount: "Tests",
    feedbackFail: "Some tests failed. Check details below.",
    introProg: "Introduction to Programming",
    advProg: "Advanced Course"
  },
  CAS: {
    title: "Python 2026",
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
    footer: "Contenido adaptado para Pyxom vNext.",
    courses: "Cursos",
    writeCode: "Escribe aquí y pulsa Enter...",
    editorTitle: "Editor Python",
    endOf: "Fin de la",
    errorPrefix: "\n⚠️ Error: ",
    criticalError: "Error crítico: ",
    noTests: "Este ejercicio no tiene pruebas configuradas.",
    interrupted: "\n⛔ Ejecución interrumpida.",
    feedbackSuccess: "¡Excelente! Todo correcto",
    feedbackReview: "Revisión necesaria",
    testCount: "Pruebas",
    feedbackFail: "Algunas pruebas fallaron. Revisa los detalles abajo.",
    introProg: "Introducción a la Programación",
    advProg: "Curso Avanzado"
  },
  EUS: {
    title: "Python 2026",
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
    footer: "Pyxom vNext-erako egokitutako edukia.",
    courses: "Ikastaroak",
    writeCode: "Idatzi hemen eta sakatu Enter...",
    editorTitle: "Python Editorea",
    endOf: "Amaiera:",
    errorPrefix: "\n⚠️ Errorea: ",
    criticalError: "Errore larria: ",
    noTests: "Ariketa honek ez du probarik konfiguratuta.",
    interrupted: "\n⛔ Exekuzioa etenda.",
    feedbackSuccess: "Bikain! Proba guztiak gainditu dira",
    feedbackReview: "Berrikusi beharra",
    testCount: "Probak",
    feedbackFail: "Proba batzuek huts egin dute. Ikusi xehetasunak behean.",
    introProg: "Programazioaren Sarrera",
    advProg: "Ikastaro Aurreratua"
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
