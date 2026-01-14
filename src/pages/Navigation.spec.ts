import { describe, it, expect } from 'vitest';
import { courseStructure, getLocalizedText } from '../data/mooc-exercises';

describe('Navigation Logic', () => {
  it('should traverse sections correctly', () => {
    // Simular estar en la primera página
    const firstPageId = courseStructure[0].id;
    const firstIndex = courseStructure.findIndex(p => p.id === firstPageId);
    
    // Verificar que el siguiente es correcto
    const nextPage = courseStructure[firstIndex + 1];
    expect(nextPage).toBeDefined();
    expect(nextPage.id).toBe(courseStructure[1].id);
    expect(getLocalizedText(nextPage.title, 'ENG')).toContain('Information from the user');
  });

  it('should handle last page', () => {
    const lastIndex = courseStructure.length - 1;
    const lastPage = courseStructure[lastIndex];
    
    // El siguiente debe ser undefined
    const nextPage = courseStructure[lastIndex + 1];
    expect(nextPage).toBeUndefined();
  });
});