import { describe, it, expect } from 'vitest';
import MaterialesService from './MaterialesService';

describe('MaterialesService', () => {
  describe('getMaterialUrl', () => {
    it('debe devolver la URL correcta para teoría de Ingeniería del Software', () => {
      const url = MaterialesService.getMaterialUrl(
        'Tema 1.pdf',
        '240304',
        'teoria'
      );
      expect(url).toBe('/materiales_asignaturas/240304_Ingenieria_Software/Teoria/Apuntes/Tema 1.pdf');
    });

    it('debe devolver la URL correcta para prácticas', () => {
      const url = MaterialesService.getMaterialUrl(
        'Practica 1.pdf',
        '240304',
        'practica'
      );
      expect(url).toBe('/materiales_asignaturas/240304_Ingenieria_Software/Practicas/Practica 1.pdf');
    });

    it('debe devolver null para asignatura desconocida', () => {
      // Mocking console.warn to keep output clean
      const originalWarn = console.warn;
      console.warn = () => {};
      
      const url = MaterialesService.getMaterialUrl(
        'Tema 1.pdf',
        '000000',
        'teoria'
      );
      
      console.warn = originalWarn;
      expect(url).toBeNull();
    });
  });

  describe('getMaterialesAsignatura', () => {
    it('debe devolver materiales para Ingeniería del Software', () => {
      const materiales = MaterialesService.getMaterialesAsignatura('240304');
      expect(materiales.length).toBeGreaterThan(0);
      
      const primerMaterial = materiales[0];
      expect(primerMaterial).toHaveProperty('tema');
      expect(primerMaterial).toHaveProperty('tipo');
      expect(primerMaterial).toHaveProperty('nombre');
      expect(primerMaterial).toHaveProperty('archivo');
    });

    it('debe devolver array vacío para asignatura sin materiales definidos', () => {
      const materiales = MaterialesService.getMaterialesAsignatura('999999');
      expect(materiales).toEqual([]);
    });
  });
});
