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
        expect(title.ENG).toContain('Calculating Real Memory');
    }
  });

  it('should contain the sum strategy explanation', () => {
    const sumExercise = content.blocks.find(b => b.type === 'exercise' && (b as any).exerciseId === 'ds-w02-sparse-ex9');
    expect(sumExercise).toBeDefined();
    if (sumExercise) {
        const title = sumExercise.title as any;
        expect(title.ENG).toContain('The Merge (Sum)');
    }
  });
});