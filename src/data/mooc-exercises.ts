import { section1 } from './part1/section1';
import { section2 } from './part1/section2';
import { section3 } from './part1/section3';
import { section4 } from './part1/section4';
import { section5 } from './part1/section5';

// Tipo para textos localizables (ENG, CAS, EUS)
// Si es string, se asume ENG por defecto.
export type LocalizedString = string | {
  ENG: string;
  CAS: string;
  EUS: string;
};

export interface Exercise {
  id: string;
  title: LocalizedString;
  description?: LocalizedString; 
  initialCode: string;
  testCode: string;
}

export interface QuizQuestion {
  id: string;
  prompt: LocalizedString;
  options: {
    id: string;
    text: LocalizedString;
    isCorrect: boolean;
    feedback?: LocalizedString;
  }[];
}

export interface ContentBlock {
  type: 'markdown' | 'exercise' | 'quiz';
  content?: LocalizedString; // Ahora soporta multi-idioma
  exerciseId?: string;
  title?: LocalizedString;
  description?: LocalizedString;
  initialCode?: string;
  testCode?: string;
  questions?: QuizQuestion[];
}

export interface CoursePage {
  id: string;
  title: LocalizedString;
  blocks: ContentBlock[];
}

export const coursePages: CoursePage[] = [
  section1,
  section2,
  section3,
  section4,
  section5
];

export const courseStructure = coursePages;

export const loadSection = (id: string): CoursePage | undefined => {
    return coursePages.find(p => p.id === id);
};

// Helper para extraer texto seguro según idioma
export const getLocalizedText = (text: LocalizedString | undefined, lang: 'ENG' | 'CAS' | 'EUS'): string => {
    if (!text) return "";
    if (typeof text === 'string') return text;
    return text[lang] || text['ENG'] || "";
};

const extractExercises = (pages: CoursePage[]): Record<string, Exercise> => {
  const exercises: Record<string, Exercise> = {};
  pages.forEach(page => {
    page.blocks.forEach(block => {
      if (block.type === 'exercise' && block.exerciseId) {
        exercises[block.exerciseId] = {
          id: block.exerciseId,
          title: block.title || 'Untitled Exercise',
          description: block.description || '', 
          initialCode: block.initialCode || '',
          testCode: block.testCode || ''
        };
      }
    });
  });
  return exercises;
};

export const exercisesDB: Record<string, Exercise> = extractExercises(coursePages);

export const playgroundExercise: Exercise = {
  id: "playground",
  title: "Sandbox / Playground",
  description: "Space to experiment freely.",
  initialCode: "# Sandbox\nprint(\"Hola\")\n",
  testCode: ""
};

export const getExercise = (id: string): Exercise | undefined => exercisesDB[id];
export const moocExercises: Exercise[] = Object.values(exercisesDB);