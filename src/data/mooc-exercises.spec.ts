import { describe, it, expect } from 'vitest';
import { courseStructure, loadSection } from './mooc-exercises';

describe('MOOC Content Architecture', () => {
  
  it('should load course structure with 27 parts', () => {
    expect(courseStructure.length).toBeGreaterThan(60);
    const parts = new Set(courseStructure.map(s => s.part));
    expect(parts.size).toBe(27);
  });

  it('should have valid metadata for Part 1', () => {
    const part1 = courseStructure.filter(s => s.part === 1);
    expect(part1.length).toBe(5);
    expect(part1.map(p => (typeof p.title === 'string' ? p.title : p.title.ENG))).toEqual([
        "1. Getting Started",
        "2. Information from the user",
        "3. More about variables",
        "4. Arithmetic operations",
        "5. Conditional statements"
    ]);
  });

  it('should load section data asynchronously', async () => {
    const section = await loadSection('part1-1');
    expect(section).toBeDefined();
    expect(section?.id).toBe('part1-1');
    expect(section?.blocks.length).toBeGreaterThan(0);
  });
});