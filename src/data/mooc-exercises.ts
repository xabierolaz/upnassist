import { SectionMetadata, courseStructureMetadata } from './course-structure';

// Export SectionMetadata for type usage
export type { SectionMetadata };

// Tipo para textos localizables (ENG, CAS, EUS)
export type LocalizedString = string | {
  ENG: string;
  CAS: string;
  EUS: string;
};

export interface Exercise {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  initialCode: LocalizedString;
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
  content?: LocalizedString;
  exerciseId?: string;
  title?: LocalizedString;
  description?: LocalizedString;
  initialCode?: LocalizedString;
  testCode?: string;
  questions?: QuizQuestion[];
}

export interface CoursePage {
  id: string;
  title: LocalizedString;
  blocks: ContentBlock[];
}

// Full structure defined in metadata file
export const courseStructure = courseStructureMetadata;

// Mapping of all sections for Vite static analysis
const sectionModules = import.meta.glob('./part*/section*.json');

/**
 * Dynamic loader for sections.
 */
export const loadSection = async (id: string): Promise<CoursePage | undefined> => {
    const meta = courseStructureMetadata.find(m => m.id === id);
    if (!meta) return undefined;

    const part = meta.part;
    // Extract section number from ID (e.g., "part-1-2" -> 2, "part10-3" -> 3)
    let sectionNum = id.split('-').pop();
    
    // Path in glob is literal: ./part1/section1.json
    const path = `./part${part}/section${sectionNum}.json`;
    const loader = sectionModules[path];

    if (!loader) {
        console.error(`No loader found for path: ${path}`);
        return undefined;
    }

    try {
        const data = await loader() as any;
        // JSON imports in Vite return the object directly
        return data.default || data as CoursePage;
    } catch (e) {
        console.error(`Failed to load section ${id} from part ${part}`, e);
        return undefined;
    }
};

// Helper para extraer texto seguro según idioma
export const getLocalizedText = (text: LocalizedString | undefined, lang: 'ENG' | 'CAS' | 'EUS'): string => {
    if (!text) return "";
    if (typeof text === 'string') return text;
    return (text as any)[lang] || (text as any)['ENG'] || "";
};

export const playgroundExercise: Exercise = {
  id: "playground",
  title: "Sandbox / Playground",
  description: "Space to experiment freely.",
  initialCode: "# Sandbox\nprint(\"Hola\")\n",
  testCode: ""
};

// Compatibility exports for tests
export const coursePages: any[] = [];
export const exercisesDB: Record<string, Exercise> = {};
export const moocExercises: Exercise[] = [];
export const getExercise = (id: string) => undefined;