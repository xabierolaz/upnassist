import { describe, it, expect } from 'vitest';
import content from './week02_sparse.json';
import { ContentBlock } from '../../../types';

describe('Week 2 Content (Sparse Matrices)', () => {
  it('should have the correct id', () => {
    expect(content.id).toBe('ds-w02-sparse');
  });

  it('should have a title in all languages', () => {
    const title = content.title as any;
    expect(title.ENG).toBeDefined();
    expect(title.CAS).toBeDefined();
    expect(title.EUS).toBeDefined();
  });

  it('should start with the visual introduction', () => {
    const firstBlock = content.blocks[0] as ContentBlock;
    expect(firstBlock.type).toBe('markdown');
    const blockContent = firstBlock.content as any;
    expect(blockContent.ENG).toContain('The Problem: An Ocean of Zeros');
  });

  it('should contain the sparse matrix visualizer', () => {
    const visualizerBlock = content.blocks.find(b => b.type === 'interactive-sparse-matrix');
    expect(visualizerBlock).toBeDefined();
  });

  it('should contain the memory calculation exercise', () => {
    const memoryExercise = content.blocks.find(b => b.type === 'exercise' && (b as any).exerciseId === 'ds-w02-sparse-ex5');
    expect(memoryExercise).toBeDefined();
    if (memoryExercise) {
        const title = memoryExercise.title as any;
        expect(title.ENG).toContain('Real Memory Size');
    }
  });

  it('should contain all 10 standard exercises', () => {
    const exerciseIds = ['ds-w02-sparse-ex1', 'ds-w02-sparse-ex2', 'ds-w02-sparse-ex3', 'ds-w02-sparse-ex4', 'ds-w02-sparse-ex5', 'ds-w02-sparse-ex6', 'ds-w02-sparse-ex7', 'ds-w02-sparse-ex8', 'ds-w02-sparse-ex9', 'ds-w02-sparse-ex10'];
    exerciseIds.forEach(id => {
        const ex = content.blocks.find(b => b.type === 'exercise' && (b as any).exerciseId === id);
        expect(ex).toBeDefined();
    });
  });

  it('should have proper sum strategy title', () => {
    const sumExercise = content.blocks.find(b => b.type === 'exercise' && (b as any).exerciseId === 'ds-w02-sparse-ex9');
    if (sumExercise) {
        const title = sumExercise.title as any;
        expect(title.ENG).toContain('Sparse Matrix Sum');
    }
  });
});