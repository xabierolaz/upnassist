import { describe, it, expect } from 'vitest';
import { courseStructure, loadSection } from './mooc-exercises';

describe('Python Snippet Integrity (Deep Audit)', () => {
  
  courseStructure.forEach((meta) => {
    describe(`Section: ${meta.id}`, () => {
      
      it('should have valid exercises with balanced syntax', async () => {
        const page = await loadSection(meta.id);
        expect(page).toBeDefined();
        
        const exercises = page!.blocks.filter(b => b.type === 'exercise');
        
        exercises.forEach(ex => {
            const initial = ex.initialCode || '';
            const test = ex.testCode || '';
            
            // Check initial code
            expect(isBalanced(initial), `Initial code unbalanced in ${ex.exerciseId}`).toBe(true);
            
            // Check test code
            if (test && test !== 'pass') {
                expect(isBalanced(test), `Test code unbalanced in ${ex.exerciseId}`).toBe(true);
                expect(test).toContain('import unittest');
            }
            
            // Control characters
            const forbidden = ['\uFFFD', '\u0000', '\u0008'];
            forbidden.forEach(char => {
                expect(initial).not.toContain(char);
                expect(test).not.toContain(char);
            });
        });
      });
    });
  });
});

function isBalanced(code: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}' };
    const closeToOpen: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
    
    // Ignoramos contenido dentro de strings para el balanceo básico
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        
        if ((char === "'" || char === '"') && code[i-1] !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (stringChar === char) {
                inString = false;
            }
            continue;
        }

        if (inString) continue;

        if (pairs[char]) {
            stack.push(char);
        } else if (closeToOpen[char]) {
            if (stack.pop() !== closeToOpen[char]) return false;
        }
    }
    return stack.length === 0;
}
