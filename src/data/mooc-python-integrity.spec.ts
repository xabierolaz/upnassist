import { describe, it, expect } from 'vitest';
import { courseStructure, loadSection } from './mooc-exercises';

describe('Python Snippet Integrity (Deep Audit)', () => {
  
  it('should verify all python exercises for syntax integrity', async () => {
      let checkedExercises = 0;

      for (const pageInfo of courseStructure) {
          const page = await loadSection(pageInfo.id);
          if (!page) continue;

          const exercises = page.blocks.filter(b => b.type === 'exercise');
          
          for (const exercise of exercises) {
              const id = exercise.exerciseId || 'unknown';
              
              // Check Balanced Code
              expect(isBalanced(exercise.initialCode || ''), `Unbalanced initialCode in ${id}`).toBe(true);
              
              if (exercise.testCode && exercise.testCode !== 'pass') {
                  expect(isBalanced(exercise.testCode), `Unbalanced testCode in ${id}`).toBe(true);
                  expect(exercise.testCode).toContain('import unittest');
              }

              // Check Suspicious Characters
              const forbidden = ['\uFFFD', '\u0000', '\u0008'];
              forbidden.forEach(char => {
                  expect(exercise.initialCode).not.toContain(char);
                  if(exercise.testCode) expect(exercise.testCode).not.toContain(char);
              });

              checkedExercises++;
          }
      } 
      console.log(`Audited ${checkedExercises} Python exercises.`);
  }, 60000);
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
        
        // Simple string parsing logic
        if ((char === "'" || char === '"') && (i === 0 || code[i-1] !== '\\')) {
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
            if (stack.length === 0 || stack.pop() !== closeToOpen[char]) return false;
        }
    }
    return stack.length === 0;
}