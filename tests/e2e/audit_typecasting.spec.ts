import { test, expect } from '@playwright/test';

test.describe('Audit Part 2-1: Typecasting', () => {

  test.beforeEach(async ({ page }) => {
    // 0. Bypass Auth & Set Language
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('upnassist-auth-bypass', 'true');
      localStorage.setItem('pyxom-language-storage', JSON.stringify({ state: { currentLang: 'ENG' }, version: 0 }));
    });

    // 1. Go to exercise page (Part 2, Section 1, Exercise 3) - Cache busted
    await page.goto('/course/mooc/part2-1?t=' + Date.now());
    
    // 2. Wait for content
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
  });

  async function getExerciseEnv(page, title) {
     const header = page.locator('h3', { hasText: title }).first();
     await expect(header).toBeVisible({ timeout: 15000 });
     // Ancestor with rounded-2xl class
     return header.locator('xpath=./ancestor::div[contains(@class, "rounded-2xl")][1]');
  }

  async function getTerminalOutput(container) {
      // Click terminal tab to be sure
      const terminalTab = container.locator('button', { hasText: 'Terminal Output' });
      await terminalTab.click();
      
      // Use attribute selector to avoid escaping issues with slashes in class names
      return container.locator('div[class*="bg-gray-50/30"]');
  }

  test('Audit: Pedagogical Failure (Logic Error)', async ({ page }) => {
     const container = await getExerciseEnv(page, 'Typecasting');
     const editor = container.locator('.monaco-editor').first();
     const submitBtn = container.locator('button', { hasText: 'Submit' });
     
     await expect(editor).toBeVisible({ timeout: 15000 });
     await editor.click();
     await page.keyboard.press('Control+A');
     await page.keyboard.press('Backspace');
     
     // Wrong implementation
     await page.keyboard.type('number = float(input("Please type in a number: "))');
     await page.keyboard.press('Enter');
     await page.keyboard.type('print("Integer part:", int(number))');
     await page.keyboard.press('Enter');
     await page.keyboard.type('print("Decimal part:", 0)'); 

     await page.waitForTimeout(1000); 
     await submitBtn.click();

     // Wait for execution to finish (Stop button disappears)
     await expect(container.locator('button', { hasText: 'Stop' })).not.toBeVisible({ timeout: 20000 });

     // Expect Failure but NO System Error
     const content = await page.content();
     expect(content).not.toContain('Internal Error');
     expect(content).not.toContain('System Error');
     
     // Check for "Review needed" header in FeedbackPanel
     await expect(container.locator('text=Review needed')).toBeVisible({ timeout: 15000 });
  });
  
  test('Audit: Success', async ({ page }) => {
     const container = await getExerciseEnv(page, 'Typecasting');
     const editor = container.locator('.monaco-editor').first();
     const submitBtn = container.locator('button', { hasText: 'Submit' });

     await expect(editor).toBeVisible({ timeout: 15000 });
     await editor.click();
     await page.keyboard.press('Control+A');
     await page.keyboard.press('Backspace');
     
     const correctCodeLines = [
        'number = float(input("Please type in a number: "))',
        'integer_part = int(number)',
        'decimal_part = number - integer_part',
        'print(f"Integer part: {integer_part}")',
        'print(f"Decimal part: {decimal_part}")'
     ];

     for (const line of correctCodeLines) {
         await page.keyboard.type(line);
         await page.keyboard.press('Enter');
     }
     
     await page.waitForTimeout(1000); 
     await submitBtn.click();
     
     // Wait for execution to finish
     await expect(container.locator('button', { hasText: 'Stop' })).not.toBeVisible({ timeout: 20000 });
     
     // Expect Success Header
     await expect(container.locator('text=Excellent! All tests passed')).toBeVisible({ timeout: 15000 });
  });

  test('Audit: Static Analysis (Code Quality)', async ({ page }) => {
      const container = await getExerciseEnv(page, 'Typecasting');
      const editor = container.locator('.monaco-editor').first();
      const submitBtn = container.locator('button', { hasText: 'Submit' });

      await expect(editor).toBeVisible({ timeout: 15000 });
      await editor.click();
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');

      // Dirty code
      await page.keyboard.type('NUM=float(input("Number: "))');
      await page.keyboard.press('Enter');
      await page.keyboard.type('INT=int(NUM)');
      await page.keyboard.press('Enter');
      await page.keyboard.type('DEC=NUM-INT');
      await page.keyboard.press('Enter');
      await page.keyboard.type('print(f"Integer part: {INT}")');
      await page.keyboard.press('Enter');
      await page.keyboard.type('print(f"Decimal part: {DEC}")');

      await page.waitForTimeout(1000); 
      await submitBtn.click();
      
      // Wait for execution to finish
      await expect(container.locator('button', { hasText: 'Stop' })).not.toBeVisible({ timeout: 20000 });
      
      // Wait for success first
      await expect(container.locator('text=Excellent! All tests passed')).toBeVisible({ timeout: 15000 });

      // Check Analysis Tab
      const analysisTab = container.locator('button', { hasText: 'Code Analysis' });
      await expect(analysisTab).toBeVisible();
      await analysisTab.click();
      
      // Expect warnings
      await expect(container.locator('text=snake_case')).toBeVisible();
  });

  test('Audit: Robustness (Syntax Error)', async ({ page }) => {
    const container = await getExerciseEnv(page, 'Typecasting');
    const editor = container.locator('.monaco-editor').first();
    const runBtn = container.locator('button', { hasText: 'Run' });
    
    await expect(editor).toBeVisible({ timeout: 15000 });
    await editor.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    // Syntax error
    await page.keyboard.type('if True print("Error")', { delay: 50 });

    await page.waitForTimeout(1000); 
    await runBtn.click();
    
    // Check for SyntaxError in the terminal output
    const terminal = await getTerminalOutput(container);
    await expect(terminal).toContainText('SyntaxError', { timeout: 10000 });
  });

});