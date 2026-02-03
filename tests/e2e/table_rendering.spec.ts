import { test, expect } from '@playwright/test';
import { setupAuth } from './fixtures/auth';

test.describe('Markdown Table Rendering', () => {
  test.beforeEach(async ({ page }) => {
    await setupAuth(page);
    await page.goto('/course/mooc/part1-4');
  });

  test('Verify GFM Table Rendering in Part 1 Section 4', async ({ page }) => {
    // Wait for content
    await expect(page.locator('main h1').first()).toBeVisible();

    // Verify Table exists
    // Tables should be rendered as standard HTML tables
    const table = page.locator('table').first();
    await expect(table).toBeVisible();
    
    // Verify Table Headers
    const headers = table.locator('th');
    await expect(headers.first()).toBeVisible();
    
    // Verify Table Rows
    const rows = table.locator('tr');
    expect(await rows.count()).toBeGreaterThan(1);
    
    // Verify styling (Tailwind classes for bordered tables)
    // Assuming our Markdown renderer applies some basic table styles or the prose plugin does.
    // Prose usually adds borders.
    // We can check if it's inside a prose container.
    await expect(table.locator('..')).toHaveClass(/prose/);
  });
});
