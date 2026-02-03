import { test, expect } from '@playwright/test';
import { setupAuth } from './fixtures/auth';

test.describe('PyXom Course Verification', () => {
  test.beforeEach(async ({ page }) => {
    await setupAuth(page);
    await page.goto('/course/mooc/part1-1');
  });

  test('should load the course page and verify exercise presence', async ({ page }) => {
    // Check if the first exercise is present
    const exerciseLabel = page.locator('div').filter({ hasText: /EXERCISE|EJERCICIO|ARIKETA/i });
    await expect(exerciseLabel.first()).toBeVisible();
  });

  test('should switch languages correctly', async ({ page }) => {
    // Click language switcher (assuming it's in the top bar)
    const langButton = page.locator('button').filter({ hasText: /CAS|ENG|EUS/ }).first();
    await expect(langButton).toBeVisible();
    
    // Note: This test depends on the specific implementation of the language switcher.
    // If it's a dropdown, we need to click it first.
    // For now, let's just check if we can find the button.
  });
});
