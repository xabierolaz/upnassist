import { describe, it, expect } from 'vitest';
import { courseStructure, loadSection } from '../data/mooc-exercises';

describe('Python Course Content Integrity Audit', () => {
    it('should have balanced brackets and include unittest in test code', async () => {
        let errors = 0;
        let total = 0;

        console.log('🚀 Starting deep validation of Python snippets...');

        for (const pageMeta of courseStructure) {
            // console.log(`Checking Section: ${pageMeta.id}`);
            const page = await loadSection(pageMeta.id);
            
            if (!page) {
                console.error(`❌ [${pageMeta.id}] Error: Failed to load section.`);
                errors++;
                continue;
            }

            if (!page.blocks) {
                 console.error(`❌ [${pageMeta.id}] Error: Section has no blocks.`);
                 errors++;
                 continue;
            }

            page.blocks.forEach(block => {
                if (block.type === 'exercise') {
                    total++;
                    const exerciseId = block.exerciseId || 'unknown';
                    const initial = block.initialCode || '';
                    const test = block.testCode || '';

                    // Basic Syntax Validation (Bracket Balancing)
                    if (!checkBalance(initial)) {
                        console.error(`❌ [${exerciseId}] Error: initialCode has unbalanced brackets/braces.`);
                        errors++;
                    }
                    if (!checkBalance(test)) {
                        console.error(`❌ [${exerciseId}] Error: testCode has unbalanced brackets/braces.`);
                        errors++;
                    }

                    // Verify testCode contains the driver
                    if (test && !test.includes('unittest')) {
                        console.error(`⚠️ [${exerciseId}] Warning: testCode does not seem to use unittest.`);
                        // Treat as warning for now, or error if we want strictness. 
                        // Part 13 tests use unittest.mock so they pass this.
                        // Some Part 1 exercises might use different checks? No, they use unittest too.
                        errors++; 
                    }
                }
            });
        }

        console.log(`
=========================================
`);
        console.log(`Audit finished: ${total} exercises checked.`);
        
        if (errors > 0) {
            console.error(`❌ Found ${errors} critical errors/warnings.`);
        } else {
            console.log('✅ All exercises passed integrity validation.');
        }

        expect(errors).toBe(0);
    }, 60000); // Increase timeout for dynamic imports
});

function checkBalance(code: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}' };
    
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        
        // Handle strings
        if (inString) {
            if (char === stringChar && code[i-1] !== '\\') {
                inString = false;
            }
            continue;
        }
        
        if (char === '"' || char === "'") {
            inString = true;
            stringChar = char;
            continue;
        }
        
        // Handle brackets
        if (pairs[char]) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (pairs[last!] !== char) return false;
        }
    }
    
    return stack.length === 0;
}