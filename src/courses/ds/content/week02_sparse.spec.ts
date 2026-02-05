import { describe, it, expect } from 'vitest';
import week02Sparse from './week02_sparse.json';

describe('Week 02 Sparse Matrix Module (Audit Fix)', () => {
    it('should have the correct ID and metadata', () => {
        expect(week02Sparse.id).toBe('ds-w02-sparse');
        expect(week02Sparse.part).toBe(15.2);
        expect(week02Sparse.title.ENG).toBe('Lab: Sparse Matrices (COO)');
    });

    it('should contain the Introduction section', () => {
        const introBlock = week02Sparse.blocks.find(b => 
            b.type === 'markdown' && 
            typeof b.content === 'object' && 
            (b.content as any).ENG.includes('# Sparse Matrices')
        );
        expect(introBlock).toBeDefined();
    });

    it('should contain the SparseMatrixVisualizer', () => {
        const visBlock = week02Sparse.blocks.find(b => b.type === 'interactive-sparse-matrix');
        expect(visBlock).toBeDefined();
    });

    it('should contain exactly 10 exercises', () => {
        const exercises = week02Sparse.blocks.filter(b => b.type === 'exercise');
        expect(exercises.length).toBe(10);
    });

    it('should have Exercise 1: input_matrix', () => {
        const ex1 = week02Sparse.blocks.find(b => 
            b.type === 'exercise' && b.exerciseId === 'ds-w02-sparse-ex1'
        );
        expect(ex1).toBeDefined();
        expect((ex1 as any).title.ENG).includes('input_matrix');
    });

    it('should have Exercise 4: normal_to_coo', () => {
        const ex4 = week02Sparse.blocks.find(b => 
            b.type === 'exercise' && b.exerciseId === 'ds-w02-sparse-ex4'
        );
        expect(ex4).toBeDefined();
        expect((ex4 as any).title.ENG).includes('normal_to_coo');
    });

    it('should have Exercise 9: sum_sparses', () => {
        const ex9 = week02Sparse.blocks.find(b => 
            b.type === 'exercise' && b.exerciseId === 'ds-w02-sparse-ex9'
        );
        expect(ex9).toBeDefined();
        expect((ex9 as any).title.ENG).includes('sum_sparses');
    });
});
