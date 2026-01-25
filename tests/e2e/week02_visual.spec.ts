import { test, expect } from '@playwright/test';

test.describe('Week 02 Theory Visual Check', () => {
  test('Verify Week 2 Theory Module Content', async ({ page }) => {
    // Console logging for debug
    page.on('console', msg => console.log(`BROWSER LOG: ${msg.text()}`));

    // 1. Go to Home
    await page.goto('http://localhost:5173/');

    // Switch to English
    const engBtn = page.locator('button').filter({ hasText: 'ENG' }).first();
    if (await engBtn.isVisible()) {
        await engBtn.click();
    }

    // 2. Open Part 15
    const part15Toggle = page.locator('button').filter({ hasText: /Part 15|Parte 15/ }).first();
    await part15Toggle.click();

    // 3. Click lesson
    const lessonLink = page.locator('button').filter({ hasText: /Review: Python Tips & Tricks/ }).first();
    await lessonLink.click();

    // 4. Verify Main Title
    await expect(page.locator('h1').filter({ hasText: 'Review: Python Tips & Tricks' })).toBeVisible();

    // 5. Verify SVG
    await expect(page.locator('img[src*="array_list_diagram.svg"]')).toBeVisible();
    
    // 6. Verify Table
    const table = page.locator('table').first();
    await expect(table).toBeVisible();
    await expect(table).toContainText('Method');
    
    // 7. Verify Code Blocks
    await expect(page.locator('pre').filter({ hasText: 'enumerate(names)' })).toBeVisible();

    // 8. Verify Exercise
    await expect(page.locator('h3').filter({ hasText: 'Create a Class' })).toBeVisible();
    
    // Verify Editor (Monaco)
    // Monaco editor usually has 'monaco-editor' class.
    await expect(page.locator('.monaco-editor').first()).toBeVisible({ timeout: 15000 });
  });
});