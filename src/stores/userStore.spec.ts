import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUserStore } from './userStore';

describe('useUserStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useUserStore.setState({
      mode: 'student',
      theme: 'light'
    });
  });

  it('debe tener valores por defecto correctos', () => {
    const state = useUserStore.getState();
    expect(state.mode).toBe('student');
    expect(state.theme).toBe('light');
  });

  it('debe actualizar el modo de usuario', () => {
    const { setMode } = useUserStore.getState();
    
    setMode('professor');
    expect(useUserStore.getState().mode).toBe('professor');
    
    setMode('student');
    expect(useUserStore.getState().mode).toBe('student');
  });

  it('debe actualizar el tema visual', () => {
    const { setTheme } = useUserStore.getState();
    
    setTheme('dark');
    expect(useUserStore.getState().theme).toBe('dark');
    
    setTheme('light');
    expect(useUserStore.getState().theme).toBe('light');
  });
});
