import { test } from '@playwright/test';

test('Debug Sidebar Buttons', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2000); // Wait for hydration

  const buttons = await page.locator('aside button').allInnerTexts();
  console.log('Sidebar buttons:', buttons);
  
  // Also check language buttons
  const langButtons = await page.locator('main button').allInnerTexts();
  console.log('Main buttons:', langButtons);
});
