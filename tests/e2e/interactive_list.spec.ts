import { test, expect } from '@playwright/test';

test.describe('Interactive List Visualizer', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Data Structures course, specifically the Week 2 Theory page
    // Note: The URL structure depends on how routing is set up, but usually we can find it via the UI
    await page.goto('/');
    
    // Wait for the app to load (Title in sidebar)
    await expect(page.locator('h1:has-text("UpnAssist 2026")')).toBeVisible();

    // The "Data Structures" group is open by default.
    // BUT the "Part 15" inside it is closed by default.
    // We need to click "Parte 15" to expand it.
    await page.click('text=Parte 15');
    
    // Now the item should be visible
    await page.click('text=Repaso: Trucos y Básicos de Python');
  });

  test('should render the interactive list component', async ({ page }) => {
    // Check if the component title exists (Spanish default)
    await expect(page.locator('text=Simulador de Métodos de Lista')).toBeVisible();
    
    // Check if the initial list [3, 1, 4, 1, 5] is visible
    // We look for the container with these numbers
    await expect(page.locator('text=3').first()).toBeVisible();
    await expect(page.locator('text=1').first()).toBeVisible();
    await expect(page.locator('text=4').first()).toBeVisible();
    await expect(page.locator('text=5').first()).toBeVisible();
  });

  test('should update list on hover', async ({ page }) => {
    // Hover over 'append' row
    const appendRow = page.locator('tr:has-text("append")');
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
