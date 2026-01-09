import { coursePages } from '../src/data/mooc-exercises.ts';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando validación profunda de snippets de Python...');

let errors = 0;
let total = 0;

coursePages.forEach(page => {
    console.log(`\nChecking Section: ${page.title}`);
    page.blocks.forEach(block => {
        if (block.type === 'exercise') {
            total++;
            const exerciseId = block.exerciseId;
            const initial = block.initialCode || '';
            const test = block.testCode || '';

            // Validación básica de sintaxis (Balanceo de llaves/paréntesis)
            if (!checkBalance(initial)) {
                console.error(`❌ [${exerciseId}] Error: initialCode tiene paréntesis o llaves desbalanceadas.`);
                errors++;
            }
            if (!checkBalance(test)) {
                console.error(`❌ [${exerciseId}] Error: testCode tiene paréntesis o llaves desbalanceadas.`);
                errors++;
            }

            // Verificar que el testCode contenga el driver necesario
            if (test && !test.includes('unittest')) {
                console.error(`⚠️ [${exerciseId}] Warning: El testCode no parece usar unittest.`);
            }
        }
    });
});

function checkBalance(code) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
    for (let char of code) {
        if (pairs[char]) stack.push(char);
        else if (Object.values(pairs).includes(char)) {
            if (pairs[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

console.log(`\n=========================================`);
console.log(`Auditoría finalizada: ${total} ejercicios revisados.`);
if (errors === 0) {
    console.log('✅ Todos los ejercicios pasaron la validación de integridad.');
} else {
    console.error(`❌ Se encontraron ${errors} errores críticos.`);
    process.exit(1);
}
