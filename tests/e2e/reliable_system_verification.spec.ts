import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Capture logs
  page.on('console', msg => console.log(`BROWSER: ${msg.text()}`));

  // 0. Bypass Auth
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.setItem('upnassist-auth-bypass', 'true');
    localStorage.setItem('pyxom-language-storage', JSON.stringify({ state: { currentLang: 'ENG' }, version: 0 }));
  });

  // 1. Go to exercise
  await page.goto('/course/mooc/part1-1');
});

test('Reliable System Verification: Terminal I/O', async ({ page }) => {
  // Scope to the first PyXomEnvironment
  const firstEnv = page.locator('.flex.flex-col.h-full.border.border-gray-300').first();
  await expect(firstEnv).toBeVisible({ timeout: 15000 });

  const editor = firstEnv.locator('.monaco-editor');
  await expect(editor).toBeVisible();

  // 2. Clear and Type
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  // Simple print test
  await page.keyboard.type('print("Init System")', { delay: 100 });

  // Verify Editor Content
  const editorContent = await editor.locator('.view-lines').textContent();
  console.log('Editor Content:', editorContent);
  expect(editorContent?.replace(/\u00a0/g, ' ')).toContain('Init System');

  // Wait for React State Sync
  await page.waitForTimeout(1000);

  // 3. Run
  // Click the Run button INSIDE this environment
  await firstEnv.locator('button').filter({ hasText: 'Run' }).click();

  // 4. Verify
  const terminal = firstEnv.locator('.whitespace-pre-wrap');
  await expect(terminal).toContainText('Init System');
});

test('Reliable System Verification: Runtime Error Reporting', async ({ page }) => {
  const firstEnv = page.locator('.flex.flex-col.h-full.border.border-gray-300').first();
  await expect(firstEnv).toBeVisible({ timeout: 15000 });

  const editor = firstEnv.locator('.monaco-editor');
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  
  await page.keyboard.type('print("About to crash")\nres = 1 / 0', { delay: 50 });
  await page.waitForTimeout(1000);

  // Run
  await firstEnv.locator('button').filter({ hasText: 'Run' }).click();

  const terminal = firstEnv.locator('.whitespace-pre-wrap');
  await expect(terminal).toContainText('About to crash');
  
  // Check Error
  const errorMsg = terminal.locator('.text-red-600');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toContainText('ZeroDivisionError');
});

test('Reliable System Verification: Visual Debugger', async ({ page }) => {
  const firstEnv = page.locator('.flex.flex-col.h-full.border.border-gray-300').first();
  await expect(firstEnv).toBeVisible({ timeout: 15000 });

  const editor = firstEnv.locator('.monaco-editor');
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  
  await page.keyboard.type('my_list = [10, 20]\nmy_dict = {"a": 1, "b": my_list}\nprint(my_dict["c"])', { delay: 50 });
  await page.waitForTimeout(1000);

  // Start Debug
  const debugBtn = firstEnv.locator('button').filter({ hasText: /Debug|Depurar/i }).first();
  await debugBtn.click();

  // Verify Panel
  const debuggerPanel = page.locator('text=Step 1 /').first();
  await expect(debuggerPanel).toBeVisible();

  // Step 1: my_list
  const nextBtn = page.locator('button[title="Next Step"]').first();
  await nextBtn.click();
  await expect(page.locator('text=my_list').first()).toBeVisible();
  await expect(page.locator('text=[10, 20]').first()).toBeVisible();

  // Step 2: my_dict
  await nextBtn.click();
  await expect(page.locator('text=my_dict').first()).toBeVisible();
  await expect(page.locator('text=a').first()).toBeVisible();

  // Step 3: Crash (KeyError)
  await nextBtn.click();

  const exceptionBox = page.locator('text=Exception:').first();
  await expect(exceptionBox).toBeVisible();
  const exceptionText = await exceptionBox.textContent();
  console.log('Exception Text:', exceptionText);
  expect(exceptionText).toContain('Exception');
});

test('Reliable System Verification: Analysis Engine', async ({ page }) => {
  const firstEnv = page.locator('.flex.flex-col.h-full.border.border-gray-300').first();
  await expect(firstEnv).toBeVisible({ timeout: 15000 });

  const editor = firstEnv.locator('.monaco-editor');
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  
  // Trigger specific analysis warnings
  await page.keyboard.type('x = 5\nx + 1\nreturn x,', { delay: 50 });
  
  // Submit to trigger server-side analysis return (or just wait for debounce if implemented)
  // Actually, we integrated it into the submit flow.
  await firstEnv.locator('button').filter({ hasText: 'Submit' }).click();

  // Switch to Analysis Tab inside this environment
  await firstEnv.locator('button').filter({ hasText: /Analysis|Análisis|Analisi/ }).click(); 

  // Check Quality Score
  const score = firstEnv.locator('text=Quality Score').first().or(firstEnv.locator('text=Calidad del Código')).first();
  await expect(score).toBeVisible();

  // Check for specific warning texts (AST prefix is removed in display)
  // "Pointless statement" or "Trailing comma"
  await expect(page.locator('text=Pointless statement').first()).toBeVisible();
  await expect(page.locator('text=Trailing comma').first()).toBeVisible();
});

test('Reliable System Verification: Feedback System', async ({ page }) => {
  const firstEnv = page.locator('.flex.flex-col.h-full.border.border-gray-300').first();
  await expect(firstEnv).toBeVisible({ timeout: 15000 });

  const editor = firstEnv.locator('.monaco-editor');
  await editor.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  
  await page.keyboard.type('print("Wrong Answer")', { delay: 50 });
  await page.waitForTimeout(1000);

  // Submit
  await firstEnv.locator('button').filter({ hasText: 'Submit' }).click();

  // Check Switch to "Results" tab
  const resultsTab = firstEnv.locator('button:has-text("Results")'); 
  await expect(resultsTab).toHaveClass(/border-b-2/);

  // Check Failure UI (Header Border)
  const failHeader = firstEnv.locator('.border-red-500').first();
  await expect(failHeader).toBeVisible();
});
