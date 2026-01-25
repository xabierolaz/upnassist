import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from './progressStore';

describe('Progress Store', () => {
  beforeEach(() => {
    // Resetear estado antes de cada test
    useProgressStore.setState({ completedExercises: {} });
  });

  it('should start with empty progress', () => {
    const { completedExercises } = useProgressStore.getState();
    expect(Object.keys(completedExercises)).toHaveLength(0);
  });

  it('should mark an exercise as completed', () => {
    const exerciseId = 'part01-01_emoticon';
    
    useProgressStore.getState().markAsCompleted(exerciseId);
    
    const { completedExercises } = useProgressStore.getState();
    expect(completedExercises[exerciseId]).toBe(true);
  });

  it('should accumulate completed exercises', () => {
    const store = useProgressStore.getState();
    store.markAsCompleted('ex1');
    store.markAsCompleted('ex2');
    
    const { completedExercises } = useProgressStore.getState();
    expect(completedExercises['ex1']).toBe(true);
    expect(completedExercises['ex2']).toBe(true);
    expect(Object.keys(completedExercises)).toHaveLength(2);
  });
});
