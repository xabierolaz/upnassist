import { describe, it, expect } from 'vitest';
import { moocExercises } from './mooc-exercises';

describe('Python Snippet Integrity (Deep Audit)', () => {
  
  moocExercises.forEach((exercise) => {
    describe(`Exercise: ${exercise.id}`, () => {
      
      it('should have balanced brackets/quotes in initialCode', () => {
        const code = exercise.initialCode;
        expect(isBalanced(code)).toBe(true);
      });

      it('should have balanced brackets/quotes in testCode', () => {
        const code = exercise.testCode;
        if (code) {
            expect(isBalanced(code)).toBe(true);
            expect(code).toContain('import unittest');
        }
      });

      it('should not contain suspicious control characters', () => {
        // Buscamos caracteres que suelen indicar errores de pegado o codificación
        const forbidden = ['\uFFFD', '\u0000', '\u0008'];
        forbidden.forEach(char => {
            expect(exercise.initialCode).not.toContain(char);
            expect(exercise.testCode).not.toContain(char);
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
