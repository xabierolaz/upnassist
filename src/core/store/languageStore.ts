import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ENG } from '../../i18n/locales/en';
import { CAS } from '../../i18n/locales/cas';
import { EUS } from '../../i18n/locales/eus';

export type Language = 'ENG' | 'CAS' | 'EUS';

export interface Translation {
  // Core UI
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
  hintsAvailable: string;
  hintLabel: string;
  useNextHint: string;
  remaining: string;
  qualityScore: string;
  lineLabel: string;
  codeAnalysisTitle: string;
  points: string;
  dataStruct: string;
  action: string;
  info: string;

  // Visualizers
  visualizers: {
    // List Visualizer
    list: {
      title: string;
      instruction: string;
      method: string;
      usage: string;
      description: string;
    };
    // F-String Visualizer
    fstring: {
      title: string;
    };
    // Sparse Matrix Visualizer
    sparseMatrix: {
      title: string;
      denseMatrix: string;
      cooFormat: string;
      instruction: string;
      memoryUsage: string;
      fixedUnits: string;
    };
    // Main Guard Visualizer
    mainGuard: {
      title: string;
      runDirect: string;
      importModule: string;
      descExecute: string;
      descImport: string;
    };
    // OOP Visualizer
    oop: {
      constructor: string;
      selfPointer: string;
      stack: string;
      heap: string;
      btnCall: string;
      btnAssign: string;
      btnReset: string;
      selfInstruction: string;
      waiting: string;
      paramExists: string;
      dataCopied: string;
    };
  };

  // Error Messages (Codes)
  errors: Record<string, string>;
}

const translations: Record<Language, Translation> = {
  ENG,
  CAS,
  EUS
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
      partialize: (state) => ({ currentLang: state.currentLang }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.t = translations[state.currentLang];
        }
      }
    }
  )
);