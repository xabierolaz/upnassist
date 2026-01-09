import { describe, it, expect } from 'vitest';
import { 
  mapDifficultyToEnglish, 
  mapDifficultyToSpanish, 
  getDifficultyColor,
  getDifficultyText 
} from './difficultyMapping';
import { formatDate, toDate, toTimestamp, getRelativeTime } from './dateHelpers';

describe('Utils', () => {
  describe('DifficultyMapping', () => {
    it('debe mapear español a inglés', () => {
      expect(mapDifficultyToEnglish('facil')).toBe('easy');
      expect(mapDifficultyToEnglish('fácil')).toBe('easy');
      expect(mapDifficultyToEnglish('difícil')).toBe('hard');
      // Case insensitive
      expect(mapDifficultyToEnglish('FACIL')).toBe('easy');
      // Default
      expect(mapDifficultyToEnglish('unknown' as any)).toBe('medium');
    });

    it('debe mapear inglés a español', () => {
      expect(mapDifficultyToSpanish('easy')).toBe('facil');
      expect(mapDifficultyToSpanish('medium')).toBe('intermedio');
    });

    it('debe devolver colores correctos', () => {
      expect(getDifficultyColor('easy')).toContain('green');
      expect(getDifficultyColor('hard')).toContain('red');
    });
    
    it('debe formatear texto según idioma', () => {
        expect(getDifficultyText('easy', 'es')).toBe('Facil');
        expect(getDifficultyText('easy', 'en')).toBe('Easy');
    });
  });

  // Basic mock test for dateHelpers assuming standard behavior
  describe('DateHelpers', () => {
    it('debe convertir a Date correctamente (toDate)', () => {
      const now = new Date();
      expect(toDate(now)).toEqual(now);
      expect(toDate(now.getTime())).toEqual(now);
      expect(toDate(now.toISOString())).toEqual(now);
      expect(toDate(undefined)).toBeInstanceOf(Date);
    });

    it('debe convertir a Timestamp correctamente (toTimestamp)', () => {
      const now = new Date();
      expect(toTimestamp(now)).toBe(now.getTime());
    });

    it('debe formatear fechas (formatDate)', () => {
      const date = new Date('2023-01-01T12:00:00');
      expect(formatDate(date, 'es-ES')).toBe('1 de enero de 2023');
    });

    it('debe calcular tiempo relativo (getRelativeTime)', () => {
      const now = new Date();
      expect(getRelativeTime(now)).toBe('hace unos segundos');
      
      const oneHourAgo = new Date(now.getTime() - 1000 * 60 * 60);
      expect(getRelativeTime(oneHourAgo)).toContain('hace 1 hora');
    });
  });
});
