import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Word Game - Syntax Smoke Test', () => {
  let exercise: any;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../courses/mooc/content/part10/section1.json');
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    // Word Game is Block 4
    exercise = json.blocks.find((b: any) => b.exerciseId === 'part10-04_word_game');
  });

  it('should have valid split patterns in Word Game', () => {
    const testCode = exercise.testCode;
    console.log("TEST CODE PREVIEW:\n", testCode.substring(0, 500));
    
    // The problematic pattern was split('\n') which resulted in a literal newline.
    // After my fix, it should be .split('\n') (the string contains backslash and n).
    
    // In JS, to check for a string containing backslash n:
    expect(testCode).toContain(".split('\\n')");
    
    // And it should NOT contain a literal newline between quotes in split
    const brokenPattern = /\.split\(['"]\n['"]\)/;
    expect(brokenPattern.test(testCode)).toBe(false);
  });
});