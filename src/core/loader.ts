import { CoursePage, QuizQuestion } from '../types';
import { getLocalizedText } from '../utils/localization';

// Dynamic loaders for different courses
const moocModules = import.meta.glob<CoursePage>('../courses/mooc/content/part*/section*.json', { import: 'default' });
const dsModules = import.meta.glob<CoursePage>('../courses/ds/content/*.json', { import: 'default' });

/**
 * Loads a specific unit/page from a course
 */
export const loadUnit = async (courseId: string, unitId: string): Promise<CoursePage | undefined> => {
    if (courseId === 'mooc') {
        // IDs like "part1-1" -> path "../courses/mooc/content/part1/section1.json"
        const match = unitId.match(/part(\d+)-(\d+)/);
        if (!match) return undefined;
        const [_, part, section] = match;
        const path = `../courses/mooc/content/part${part}/section${section}.json`;
        const loader = moocModules[path];
        return loader ? await loader() : undefined;
    }

    if (courseId === 'ds') {
        // IDs like "ds-w02-intro" -> path "../courses/ds/content/week02_theory.json"
        let filename = '';
        if (unitId === 'ds-w02-intro') filename = 'week02_theory.json';
        if (unitId === 'ds-w02-sparse') filename = 'week02_sparse.json';
        
        if (!filename) return undefined;
        const path = `../courses/ds/content/${filename}`;
        const loader = dsModules[path];
        return loader ? await loader() : undefined;
    }

    return undefined;
};

export { getLocalizedText };
export type { QuizQuestion };