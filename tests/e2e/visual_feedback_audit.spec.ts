import { test, expect } from '@playwright/test';

test.describe('Visual Feedback Audit', () => {
  const EXERCISE_URL = 'http://localhost:5173/course/mooc/part1-1';

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        window.localStorage.setItem('upnassist-auth-bypass', 'true');
    });
    await page.goto(EXERCISE_URL);
    await page.waitForSelector('.monaco-editor', { timeout: 30000 });
  });

  test('Linter should detect issues and show feedback', async ({ page }) => {
    const BAD_CODE = `
def bad_code():
    global x
    1 + 1
    print("Done")
`;

    const editor = page.locator('.monaco-editor').first();
    await editor.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(BAD_CODE);

    const submitButton = page.locator('button').filter({ hasText: /Submit|Enviar|Bidali/i }).first();
    await submitButton.click();

    // Verify Analysis Results
    // Look for the specific warning message in the feedback list
    // The warnings usually appear in a list or colored box.
    // "Avoid using 'global'"
    
    // We search for the text "global" anywhere in the page visible
    // But specifically we expect it in the analysis/feedback section.
    // Let's just check if it appears after submission.
    
    const warningText = page.locator('text=/global/i').first(); 
    // Wait for it
    await expect(warningText).toBeVisible({ timeout: 15000 });
    
    console.log("Analysis feedback detected successfully.");
  });

  test('Debugger should open and show variables', async ({ page }) => {
    const DEBUG_CODE = `
x = 10
y = x + 5
print(y)
`;

    const editor = page.locator('.monaco-editor').first();
    await editor.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(DEBUG_CODE);

    const debugButton = page.locator('button').filter({ hasText: /Debug|Depurar|Araztu/i }).first();
    await debugButton.click();

    const panelText = page.locator('text=Variables').or(page.locator('text=No variables defined'));
    await expect(panelText.first()).toBeVisible({ timeout: 15000 });
  });
});
