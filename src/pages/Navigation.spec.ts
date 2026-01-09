import { describe, it, expect } from 'vitest';
import { coursePages } from '../data/mooc-exercises';

describe('Navigation Logic', () => {
  it('should traverse sections correctly', () => {
    // Simular estar en la primera página
    const firstPageId = coursePages[0].id;
    const firstIndex = coursePages.findIndex(p => p.id === firstPageId);
    
    // Verificar que el siguiente es correcto
    const nextPage = coursePages[firstIndex + 1];
    expect(nextPage).toBeDefined();
    expect(nextPage.id).toBe(coursePages[1].id);
    expect(nextPage.title).toContain('Information from the user');
  });

  it('should handle last page', () => {
    const lastIndex = coursePages.length - 1;
    const lastPage = coursePages[lastIndex];
    
    // El siguiente debe ser undefined
    const nextPage = coursePages[lastIndex + 1];
    expect(nextPage).toBeUndefined();
  });
});
