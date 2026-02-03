import { describe, it, expect } from 'vitest';
import { METHODS, BASE_LIST } from './InteractiveListVisualizer';

describe('InteractiveListVisualizer Logic', () => {
    // Helper to get a method by name
    const getMethod = (name: string) => METHODS.find(m => m.name === name);

    it('should have the correct base list', () => {
        expect(BASE_LIST).toEqual([3, 1, 4, 1, 5]);
    });

    it('append(9) should add 9 to the end', () => {
        const method = getMethod('append');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([3, 1, 4, 1, 5, 9]);
        expect(result?.addedIndices).toContain(5);
    });

    it('insert(2, 9) should insert 9 at index 2', () => {
        const method = getMethod('insert');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([3, 1, 9, 4, 1, 5]);
        expect(result?.addedIndices).toContain(2);
    });

    it('pop() should remove and return the last element (5)', () => {
        const method = getMethod('pop');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([3, 1, 4, 1]);
        expect(result?.returnedValue).toBe(5);
        expect(result?.removedIndices).toContain(4);
    });

    it('pop(1) should remove and return the element at index 1 (1)', () => {
        const method = getMethod('pop(i)');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([3, 4, 1, 5]);
        expect(result?.returnedValue).toBe(1);
        expect(result?.removedIndices).toContain(1);
    });

    it('sort() should sort the list', () => {
        const method = getMethod('sort');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([1, 1, 3, 4, 5]);
        expect(result?.highlightedIndices).toEqual([0, 1, 2, 3, 4]);
    });

    it('reverse() should reverse the list', () => {
        const method = getMethod('reverse');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([5, 1, 4, 1, 3]);
        expect(result?.highlightedIndices).toEqual([0, 1, 2, 3, 4]);
    });

    it('del a_list[2] should remove element at index 2 (4)', () => {
        const method = getMethod('del');
        const result = method?.apply(BASE_LIST);
        expect(result?.resultList).toEqual([3, 1, 1, 5]);
        expect(result?.removedIndices).toContain(2);
    });

    it('index(1) should return the index of the first 1', () => {
        const method = getMethod('index');
        const result = method?.apply(BASE_LIST);
        expect(result?.returnedValue).toBe(1);
        expect(result?.highlightedIndices).toContain(1);
    });

    it('count(1) should return 2', () => {
        const method = getMethod('count');
        const result = method?.apply(BASE_LIST);
        expect(result?.returnedValue).toBe(2);
        // Should highlight both occurrences of 1 (indices 1 and 3)
        expect(result?.highlightedIndices).toEqual(expect.arrayContaining([1, 3]));
    });

    it('remove(1) should remove the first 1 only', () => {
        const method = getMethod('remove');
        const result = method?.apply(BASE_LIST);
        // Should result in [3, 4, 1, 5] (removed the first 1 at index 1)
        expect(result?.resultList).toEqual([3, 4, 1, 5]);
        expect(result?.removedIndices).toContain(1);
    });
});
