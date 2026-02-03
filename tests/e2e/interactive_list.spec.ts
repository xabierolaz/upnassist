import { test, expect } from '@playwright/test';
import { setupAuth } from './fixtures/auth';

test.describe('Interactive List Visualizer', () => {
  test.beforeEach(async ({ page }) => {
    await setupAuth(page);
    // Navigate to a DS page where the visualizer is likely used or sidebar is visible
    await page.goto('/course/ds/ds-w02-intro');
  });

  test('should render the interactive list component', async ({ page }) => {
    // Wait for the app to load (Title in TopBar)
    await expect(page.locator('div:has-text("UpnAssist 2026")').first()).toBeVisible();
  });

  test('should update list on hover', async ({ page }) => {
    // Hover over 'append' row
    const appendRow = page.locator('tr:has-text("append")').first();
    await appendRow.hover();
    
    // Check if '9' appears (result of append(9))
    // It should be highlighted (green background)
    await expect(page.locator('.bg-green-100').getByText('9')).toBeVisible();
    
    // Hover over 'sort' row
    const sortRow = page.locator('tr:has-text("sort")');
    await sortRow.hover();
    
    // Check 'pop'
    const popRow = page.locator('tr:has-text("pop")').first();
    await popRow.hover();
    
    // Expect 'Return: 5' bubble to appear
    await expect(page.locator('text=Return: 5')).toBeVisible();
  });
});
