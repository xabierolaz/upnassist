import { test, expect } from '@playwright/test';

test.describe('Markdown Table Rendering', () => {
  test('Verify GFM Table Rendering in Part 1 Section 4', async ({ page }) => {
    // Navigate to Part 1 Section 4 (Arithmetic operations)
    await page.goto('http://localhost:5173/');
    
    // Switch to English to match selectors
    await page.click('button:has-text("ENG")');

    // Open the "Introduction to Programming" group (collapsed by default)
    await page.click('button:has-text("Introduction to Programming")');

    // Part 1 should be auto-expanded because the active page is in Part 1.
    // Click the target section directly.
    await page.click('button:has-text("4. Arithmetic operations")');

    // Wait for content
    await expect(page.locator('main h1')).toContainText('Arithmetic operations');

    // Check for table element
    const table = page.locator('table').first();
    await expect(table).toBeVisible();

    // Check for headers
    await expect(table.locator('th').first()).toBeVisible();
    await expect(table.locator('th', { hasText: 'Operator' })).toBeVisible();
    await expect(table.locator('th', { hasText: 'Result' })).toBeVisible();

    // Check for some cell content
    await expect(table.locator('td', { hasText: 'Addition' })).toBeVisible();
    await expect(table.locator('td', { hasText: '2 + 4' })).toBeVisible();
  });
});
