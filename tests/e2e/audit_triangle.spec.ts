import { test, expect } from '@playwright/test';

test.describe('Audit Part 4-2: Triangle', () => {

  test.beforeEach(async ({ page }) => {
    // 0. Bypass Auth
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('upnassist-auth-bypass', 'true');
      localStorage.setItem('pyxom-language-storage', JSON.stringify({ state: { currentLang: 'ENG' }, version: 0 }));
    });

    // 1. Go to exercise page
    await page.goto('/course/mooc/part4-2');
    
    // 2. Wait for content
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
  });

  async function getExerciseEnv(page, title) {
     // Find the h3 with the title (exact match preferred or contains)
     const header = page.locator('h3').filter({ hasText: title }).first();
     await expect(header).toBeVisible();
     
     // Find the container that holds this header.
     // The container class is usually "rounded-2xl" or similar shadow container.
     const container = page.locator('.rounded-2xl').filter({ has: header }).first();
     return container;
  }

  test('Audit: Robustness (Syntax Error)', async ({ page }) => {
    const container = await getExerciseEnv(page, 'A triangle');
    const editor = container.locator('.monaco-editor').first();
    const runBtn = container.locator('button').filter({ hasText: 'Run' });
    // The terminal output is inside the same container
    const terminal = container.locator('.whitespace-pre-wrap').first();

    await expect(editor).toBeVisible();
    await editor.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('def triangle(size): print(', { delay: 50 });

    await runBtn.click();
    
    // Check for SyntaxError in the terminal output
    await expect(terminal).toContainText('SyntaxError');
  });

  test('Audit: Pedagogical Failure', async ({ page }) => {
     const container = await getExerciseEnv(page, 'A triangle');
     const editor = container.locator('.monaco-editor').first();
     const submitBtn = container.locator('button').filter({ hasText: 'Submit' });
     
     await expect(editor).toBeVisible();
     await editor.click();
     await page.keyboard.press('Control+A');
     await page.keyboard.press('Backspace');
     // Wrong implementation
     await page.keyboard.type('def triangle(size): print("Wrong")', { delay: 50 });

     await submitBtn.click();

     // Wait for processing
     await page.waitForTimeout(2000);
     
     // Check that we DO NOT see "System Error" or "Internal Error"
     // We expect some feedback, but definitely not a crash.
     const content = await page.content();
     expect(content).not.toContain('Internal Error');
     expect(content).not.toContain('System Error');
     
     // Ideally, we check for a specific failure message if possible, 
     // but the absence of System Error is the primary audit goal here.
     // The "Review needed" header should be visible.
     await expect(container.locator('text=Review needed')).toBeVisible();
  });
  
  test('Audit: Success', async ({ page }) => {
     const container = await getExerciseEnv(page, 'A triangle');
     const editor = container.locator('.monaco-editor').first();
     const submitBtn = container.locator('button').filter({ hasText: 'Submit' });

     await expect(editor).toBeVisible();
     await editor.click();
     await page.keyboard.press('Control+A');
     await page.keyboard.press('Backspace');
     
     const correctCodeLines = [
        'def line(size, character):',
        '    if character == "":',
        '        character = "*"',
        '    print(character[0] * size)',
        '',
        'def triangle(size):',
        '    i = 1',
        '    while i <= size:',
        '        line(i, "#")',
        '        i += 1'
     ];

     // Type line by line to simulate user and avoid clipboard issues
     for (const line of correctCodeLines) {
         await page.keyboard.type(line);
         await page.keyboard.press('Enter');
     }
     
     await submitBtn.click();
     
     // Expect Success
     // Look for green banner or "Points"
     // In the screenshot we saw "Points: 0/1", we want "1/1".
     await expect(page.locator('text=Points: 1/1').or(page.locator('text=Puntos: 1/1'))).toBeVisible({ timeout: 15000 });
  });

});