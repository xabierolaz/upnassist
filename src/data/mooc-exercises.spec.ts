import { describe, it, expect } from 'vitest';
import { courseStructure, loadSection, getLocalizedText } from './mooc-exercises';

describe('MOOC Content Architecture', () => {
  
  it('should include Part 1 sections in structure', () => {
    const part1 = courseStructure.filter(p => p.id.startsWith('part1-'));
    expect(part1.length).toBe(5);
    expect(part1.map(p => getLocalizedText(p.title, 'ENG'))).toEqual([
        "Getting started",
        "Information from the user",
        "More about variables",
        "Arithmetic operations",
        "Conditional statements"
    ]);
  });

  it('should have valid exercise links and content in all pages', async () => {
    let checkedPages = 0;
    
    for (const pageInfo of courseStructure) {
        const page = await loadSection(pageInfo.id);
        expect(page).toBeDefined();
        if (!page) continue;

        // Verify content existence
        expect(page.blocks.length).toBeGreaterThan(0);

        // Check exercises
        const exerciseBlocks = page.blocks.filter(b => b.type === 'exercise');
        
        exerciseBlocks.forEach(block => {
            const id = block.exerciseId;
            expect(id, `Block in ${pageInfo.id} has no exerciseId`).toBeTruthy();

            // Verify inline properties
            expect(block.title, `Exercise ${id} missing title`).toBeTruthy();
            expect(block.initialCode, `Exercise ${id} missing initialCode`).toBeDefined();
            
            if (block.testCode && block.testCode !== 'pass') {
                expect(block.testCode).toContain('import unittest');
            }
        });

        // Check markdown strings
        const mdBlocks = page.blocks.filter(b => b.type === 'markdown');
        mdBlocks.forEach(b => {
             if (b.content) {
                const content = getLocalizedText(b.content, 'ENG');
                expect(content).not.toContain('\uFFFD'); 
                expect(content.length).toBeGreaterThan(0);
            }
        });
        
        checkedPages++;
    }
    
    console.log(`Audited ${checkedPages} pages and their content.`);
  }, 60000); // Increased timeout for reading all files
});
