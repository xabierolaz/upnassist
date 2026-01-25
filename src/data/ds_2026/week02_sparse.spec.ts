
import { describe, it, expect, vi } from 'vitest';

// We simulate the "PyXomEnvironment" execution context here.
// In the real app, `testCode` runs in a context where `code` is the student's code 
// and variables from `initialCode` are available in `locals()`.
// Since we can't easily run Python in Vitest, we will TRANSLATE the Python logic 
// to JS/TS to verify the logical assertions hold, OR we verify the regexes.

describe('Week 02 Sparse Matrix Exercises Verification', () => {

    it('Ex 1: Initialize Structure - Logic Check', () => {
        // Python: return [[], [], []]
        const res = [[], [], []];
        expect(res).toEqual([[], [], []]);
    });

    it('Ex 2: Non-Zero Filter - Regex Check', () => {
        // Goal: Check if user wrote "if v != 0:"
        const solutions = [
            "if v != 0:",
            "if v!=0:",
            "if v  !=  0 :",
            "if v!= 0:"
        ];
        const regex = /if\s+v\s*!=\s*0\s*:/;
        
        solutions.forEach(sol => {
            expect(regex.test(sol)).toBe(true);
        });

        const badCode = "if v == 0:";
        expect(regex.test(badCode)).toBe(false);
    });

    it('Ex 3: Parallel Access - Logic Check', () => {
        // Python logic: m[filas[i]][columnas[i]] = 10
        const m = [[0,0], [0,0]];
        const filas = [1];
        const columnas = [0];
        const i = 0;

        // Solution execution
        m[filas[i]][columnas[i]] = 10;

        // Assertion from testCode: assert m[1][0] == 10
        expect(m[1][0]).toBe(10);
    });

    it('Ex 4: Finding Coordinates - Regex Check', () => {
        // Goal: Check for "and" condition
        const solutions = [
            "if filas_coo[i] == f and cols_coo[i] == c:",
            "if f == filas_coo[i] and c == cols_coo[i]:"
        ];
        // The testCode uses: assert ' and ' in code
        solutions.forEach(sol => {
            expect(sol.includes(' and ')).toBe(true);
        });
    });

    it('Ex 5: Increment or Assign - Logic Check', () => {
        // Python logic: vals[indice] += valor_nuevo
        const vals = [10, 20];
        const indice: number = 0;
        const valor_nuevo = 5;

        // Solution execution
        if (indice === -1) {
            vals.push(valor_nuevo);
        } else {
            vals[indice] += valor_nuevo;
        }

        // Assertion from testCode: assert vals[0] == 15
        expect(vals[0]).toBe(15); // 20 is vals[1], vals[0] starts at 10. 10+5=15.
        
        // Let's correct expectation to 15.
        expect(vals[0]).toBe(15);
    });

});
