import { describe, it, expect } from 'vitest';
import { coursePages, exercisesDB, moocExercises } from './mooc-exercises';

describe('MOOC Content Architecture', () => {
  
  it('should load all 5 sections of Part 1', () => {
    expect(coursePages.length).toBe(5);
    expect(coursePages.map(p => p.title)).toEqual([
        "1. Getting Started",
        "2. Information from the user",
        "3. More about variables",
        "4. Arithmetic operations",
        "5. Conditional statements"
    ]);
  });

  it('should have a valid database of exercises', () => {
    const exerciseCount = Object.keys(exercisesDB).length;
    expect(exerciseCount).toBeGreaterThan(20); // Deberíamos tener ~30
    console.log(`Audited ${exerciseCount} exercises in DB.`);
  });

  describe('Integrity Check (Links between Pages and Exercises)', () => {
    coursePages.forEach(page => {
        it(`Page "${page.title}" should have valid exercise links`, () => {
            const exerciseBlocks = page.blocks.filter(b => b.type === 'exercise');
            
            // La página debe tener contenido
            expect(page.blocks.length).toBeGreaterThan(0);

            exerciseBlocks.forEach(block => {
                const id = block.exerciseId;
                if (!id) throw new Error(`Block in ${page.title} has no exerciseId`);

                // Verificar que el ID existe en la DB
                const exercise = exercisesDB[id];
                expect(exercise, `Exercise ID '${id}' found in page but missing in DB`).toBeDefined();
                
                // Verificar que el ejercicio tiene título y código
                expect(exercise.title).toBeTruthy();
                expect(exercise.initialCode).toBeDefined();
                expect(exercise.testCode).toContain('import unittest');
            });
        });
    });
  });

  describe('Sanity Check for Strings', () => {
    it('should not contain malformed unicode or escaped characters in descriptions', () => {
        // Muestreo aleatorio de bloques markdown
        coursePages.forEach(page => {
            const mdBlocks = page.blocks.filter(b => b.type === 'markdown');
            mdBlocks.forEach(b => {
                if (b.content) {
                    // Verificar que no haya caracteres de reemplazo unicode () que indican corrupción
                    expect(b.content).not.toContain('\uFFFD'); 
                    expect(b.content.length).toBeGreaterThan(10);
                }
            });
        });
    });
  });
});