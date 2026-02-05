import { describe, it, expect } from 'vitest';
import content from './week02_sparse.json';

describe('Week 2 Content (Sparse Matrices)', () => {
  it('should have the correct id', () => {
    expect(content.id).toBe('ds-w02-sparse');
  });

  it('should have a title in all languages', () => {
    expect(content.title.ENG).toBeDefined();
    expect(content.title.CAS).toBeDefined();
    expect(content.title.EUS).toBeDefined();
  });

  it('should start with the visual introduction', () => {
    const firstBlock = content.blocks[0];
    expect(firstBlock.type).toBe('markdown');
    expect(firstBlock.content.ENG).toContain('The Problem: An Ocean of Zeros');
  });

  it('should contain the sparse matrix visualizer', () => {
    const visualizerBlock = content.blocks.find(b => b.type === 'interactive-sparse-matrix');
    expect(visualizerBlock).toBeDefined();
  });

  it('should contain the memory calculation exercise', () => {
    const memoryExercise = content.blocks.find(b => b.exerciseId === 'ds-w02-sparse-ex5');
    expect(memoryExercise).toBeDefined();
    if (memoryExercise && memoryExercise.type === 'exercise') {
        expect(memoryExercise.title.ENG).toContain('Calculating Real Memory');
    }
  });

  it('should contain the sum strategy explanation', () => {
    const sumBlock = content.blocks.find(b => 
      b.type === 'markdown' && b.content.ENG.includes('The Merge (Sum)')
    );
    // Note: The title is in the exercise, not markdown block, let's check the exercise
    const sumExercise = content.blocks.find(b => b.exerciseId === 'ds-w02-sparse-ex9');
    expect(sumExercise).toBeDefined();
    if (sumExercise && sumExercise.type === 'exercise') {
        expect(sumExercise.title.ENG).toContain('The Merge (Sum)');
    }
  });
});