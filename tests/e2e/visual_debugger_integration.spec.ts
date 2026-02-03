import { test, expect } from '@playwright/test';

test('Visual Debugger Integration Flow', async ({ page }) => {
  // 0. Bypass Auth for E2E
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.setItem('upnassist-auth-bypass', 'true');
    localStorage.setItem('pyxom-language-storage', JSON.stringify({ state: { currentLang: 'ENG' }, version: 0 }));
  });

  // 1. Go to a specific exercise page (Part 1, Section 1)
  await page.goto('/course/mooc/part1-1');
  
  // Wait for editor to be ready
  const editor = page.locator('.monaco-editor').first();
  await expect(editor).toBeVisible({ timeout: 15000 });

  // 2. Identify the "Debug" button
  const debugBtn = page.locator('button').filter({ hasText: /Debug|Depurar|Araztu/i }).first();
  await expect(debugBtn).toBeVisible();

  // 3. Clear editor and type a simple script
  // Note: Interacting with Monaco is tricky, we'll use a simpler approach if needed
  // but usually clicking and typing works for basic checks.
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('x = 10\ny = 20\nz = x + y');

  // 4. Start Debugging
  await debugBtn.click();

  // 5. Verify Debugger Panel appears
  const debuggerPanel = page.locator('text=Step 1 /').first();
  await expect(debuggerPanel).toBeVisible({ timeout: 10000 });

  // 6. Step forward
  const nextBtn = page.locator('button[title="Next Step"]').first();
  await nextBtn.click();
  
  // 7. Check Variable Explorer
  // After 'x = 10', x should be in the explorer
  const varX = page.locator('text=x').first();
  await expect(varX).toBeVisible();
  const val10 = page.locator('text=10').first();
  await expect(val10).toBeVisible();

  // Step again
  await nextBtn.click();
  const varY = page.locator('text=y').first();
  await expect(varY).toBeVisible();
  const val20 = page.locator('text=20').first();
  await expect(val20).toBeVisible();

  // 8. Verify line highlighting (visual check via class)
  const highlightedLine = page.locator('.debug-line-highlight').first();
  await expect(highlightedLine).toBeVisible();

  // 9. Stop Session
  await page.locator('button[title="Stop"]').first().click();
  await expect(debuggerPanel).not.toBeVisible();
  // Terminal should be back
  await expect(page.locator('button:has-text("Terminal")').first()).toBeVisible();
});
