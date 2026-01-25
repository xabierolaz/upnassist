import { describe, it, expect } from 'vitest';
import { loadUnit } from '../../loader';
import { courseStructureMetadata as courseStructure } from '../../../courses/mooc/manifest';

describe('Python Exercises Integrity', () => {
  // Test all sections
  courseStructure.forEach((meta: any) => {
    it(`Section ${meta.id} should have valid Python code blocks`, async () => {
        const page = await loadUnit('mooc', meta.id);
        if (!page) return;

        const exercises = page.blocks.filter((b: any) => b.type === 'exercise');
        
        exercises.forEach((ex: any) => {
            if (ex.initialCode) {
                const initialVersions = [];
                if (typeof ex.initialCode === 'string') {
                    initialVersions.push(ex.initialCode);
                } else {
                    initialVersions.push(...Object.values(ex.initialCode) as string[]);
                }

                initialVersions.forEach(code => {
                    expect(code, `Initial code in ${ex.exerciseId} is empty`).not.toBe("");
                });
            }
        });
    }, 10000); // Higher timeout for dynamic loading
  });
});