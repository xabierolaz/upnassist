import { describe, it, expect } from 'vitest';
import week02Theory from './week02_theory.json';

describe('Week 02 Theory Module', () => {
    it('should have the correct ID and metadata', () => {
        expect(week02Theory.id).toBe('ds-w02-intro');
        expect(week02Theory.part).toBe(15);
        expect(week02Theory.title.ENG).toBe('Review: Python Tips & Tricks');
    });

    it('should contain the new SVG image reference', () => {
        const introBlock = week02Theory.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' && 
            (b.content as any).ENG.includes('array_list_diagram.svg')
        );
        expect(introBlock).toBeDefined();
    });

    it('should contain the embedded tables', () => {
        const tableBlock = week02Theory.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' &&
            (b.content as any).ENG.includes('| Method | Usage | Explanation |')
        );
        expect(tableBlock).toBeDefined();
    });

    it('should have a valid exercise with an ID', () => {
        const exercise = week02Theory.blocks.find(b => b.type === 'exercise');
        expect(exercise).toBeDefined();
        expect(exercise?.exerciseId).toBe('ds-w02-ex1');
        expect(exercise?.title).toBeDefined();
        expect(exercise?.initialCode).toBeDefined();
    });
});