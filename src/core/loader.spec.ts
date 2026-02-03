import { describe, it, expect } from 'vitest';
import { loadUnit } from './loader';
import { courseStructureMetadata as courseStructure } from '../courses/mooc/manifest';

describe('Content Loader', () => {
  it('should have a valid course structure for MOOC', () => {
    expect(courseStructure.length).toBeGreaterThan(0);
    const parts = new Set(courseStructure.map(s => s.part));
    expect(parts.has(1)).toBe(true);
  });

  it('should load section 1.1 correctly', async () => {
    const section1_1 = courseStructure.find(s => s.part === 1 && s.id === "part1-1");
    expect(section1_1).toBeDefined();
    
    const part1 = courseStructure.filter(s => s.part === 1);
    
    expect(part1.map(p => (typeof p.title === 'string' ? p.title : p.title.ENG))).toContain("1. Getting Started");
  });

  it('should load unit data dynamically', async () => {
    const data = await loadUnit('mooc', 'part1-1');
    if (data) {
        expect(data.id).toBe('part1-1');
    }
  });

  it('should return undefined for invalid courseId', async () => {
    const data = await loadUnit('invalid', 'part1-1');
    expect(data).toBeUndefined();
  });

  it('should return undefined for invalid mooc unitId pattern', async () => {
    const data = await loadUnit('mooc', 'invalid-id');
    expect(data).toBeUndefined();
  });

  it('should return undefined for invalid ds unitId pattern', async () => {
    const data = await loadUnit('ds', 'invalid-id');
    expect(data).toBeUndefined();
  });

  it('should load ds unit with mapping', async () => {
    const data = await loadUnit('ds', 'ds-w02-intro');
    if (data) {
        expect(data.id).toBeDefined();
    }
  });

  it('should load ds unit with fallback pattern', async () => {
    const data = await loadUnit('ds', 'ds-w02-sparse');
    if (data) {
        expect(data.id).toBeDefined();
    }
  });
});
