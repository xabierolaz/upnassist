import { describe, it, expect } from 'vitest';
import week02Theory from './week02_theory.json';

describe('Week 02 Theory Module (Audit Fix)', () => {
    it('should have the correct ID and metadata', () => {
        expect(week02Theory.id).toBe('ds-w02-intro');
        expect(week02Theory.part).toBe(15);
        expect(week02Theory.title.ENG).toBe('Review: Python Tips & Tricks');
    });

    it('should contain the Development Environment section', () => {
        const ideBlock = week02Theory.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' && 
            (b.content as any).ENG.includes('Development Environment (IDEs)')
        );
        expect(ideBlock).toBeDefined();
    });

    it('should contain the new Comments & Documentation section', () => {
        const commentsBlock = week02Theory.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' && 
            (b.content as any).ENG.includes('## 5. Comments & Documentation')
        );
        expect(commentsBlock).toBeDefined();
        expect((commentsBlock?.content as any).ENG).includes('NumPy style');
    });

    it('should contain the File Modes Cheat Sheet', () => {
        const tableBlock = week02Theory.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' &&
            (b.content as any).ENG.includes('| Mode | Behavior | Pointer | Truncates? |')
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
