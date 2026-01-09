import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import ProgresoService from './ProgresoService';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock
});

describe('ProgresoService', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('debe devolver array vacío si no hay progreso', () => {
    const progreso = ProgresoService.getProgreso('240304');
    expect(progreso).toEqual([]);
  });

  it('debe actualizar el progreso de un tema nuevo', () => {
    ProgresoService.actualizarProgresoTema('240304', 'tema-1', { teoriaCompletada: true });
    
    const progreso = ProgresoService.getProgreso('240304');
    expect(progreso).toHaveLength(1);
    expect(progreso[0].temaId).toBe('tema-1');
    expect(progreso[0].teoriaCompletada).toBe(true);
  });

  it('debe actualizar el progreso de un tema existente', () => {
    // Primero crear
    ProgresoService.actualizarProgresoTema('240304', 'tema-1', { teoriaCompletada: true });
    
    // Luego actualizar
    ProgresoService.actualizarProgresoTema('240304', 'tema-1', { teoriaCompletada: false }); // toggle por ejemplo
    
    const progreso = ProgresoService.getProgreso('240304');
    expect(progreso).toHaveLength(1);
    expect(progreso[0].teoriaCompletada).toBe(false);
  });

  it('debe marcar teoría como completada', () => {
    ProgresoService.marcarTeoriaCompletada('240304', 'tema-1');
    
    const progreso = ProgresoService.getProgreso('240304');
    expect(progreso[0].teoriaCompletada).toBe(true);
  });

  it('debe marcar ejercicios como completados sin duplicados', () => {
    ProgresoService.marcarEjercicioCompletado('240304', 'tema-1', 'ej-1');
    ProgresoService.marcarEjercicioCompletado('240304', 'tema-1', 'ej-1'); // Intento duplicado
    ProgresoService.marcarEjercicioCompletado('240304', 'tema-1', 'ej-2');
    
    const progreso = ProgresoService.getProgreso('240304');
    expect(progreso[0].ejerciciosCompletados).toHaveLength(2);
    expect(progreso[0].ejerciciosCompletados).toContain('ej-1');
    expect(progreso[0].ejerciciosCompletados).toContain('ej-2');
  });
});
