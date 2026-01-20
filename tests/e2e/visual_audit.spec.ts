import { test, expect } from '@playwright/test';

test.describe('Visual Audit', () => {
  test('Audit Part 1 Section 1: Content & Exercises', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // 1. Verify Main Title
    const mainTitle = page.locator('main h1').first();
    await expect(mainTitle).toBeVisible();
    await expect(mainTitle).toHaveClass(/text-4xl/);
    
    // 2. Verify Markdown Content (Injected "Row Your Boat")
    // Use .first() because it appears in Title and Description
    await expect(page.getByText('Rema, rema, rema tu bote').first()).toBeVisible();
    
    // 3. Verify "Clinical" Exercise Card
    const pointsLabel = page.locator('text=Puntos:').first().or(page.locator('text=Points:')).first();
    await expect(pointsLabel).toBeVisible();
    
    // Verify Red Header (Incomplete state) via SVG icon
    await expect(page.locator('svg[data-icon="pencil-alt"]').first()).toBeVisible();

    await page.screenshot({ path: 'test-results/audit-p1s1-clinical.png', fullPage: true });
  });

  test('Audit Part 1 Section 3: Quiz & Arithmetics Buttons', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Navigate to Section 3 using the Next buttons
    await page.locator('button:has-text("→")').first().click(); 
    await page.waitForTimeout(500); 
    await page.locator('button:has-text("→")').first().click(); 
    await page.waitForTimeout(1000); 

    // Verify Quiz Container
    const quizCard = page.locator('.rounded-2xl.shadow-xl').first();
    await expect(quizCard).toBeVisible();
    
    // Verify Arithmetics Exercise (Should be further down)
    // We check for the footer buttons which we moved.
    
    // Find the footer container
    const footer = page.locator('.bg-gray-100.border-t.border-gray-200').first();
    await expect(footer).toBeVisible();
    
    // Check RUN button (Blue)
    const runBtn = footer.locator('button:has-text("▶")').first(); // Using the icon text
    await expect(runBtn).toBeVisible();
    await expect(runBtn).toHaveClass(/bg-blue-600/);
    
    // Check TEST/SUBMIT button (Eye icon/Orange text style)
    const submitBtn = footer.locator('button:has-text("👁")').first();
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toHaveClass(/text-orange-700/);

    await page.screenshot({ path: 'test-results/audit-p1s3-clinical-buttons.png', fullPage: true });
  });
});