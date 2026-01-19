import { test, expect } from '@playwright/test';

test.describe('PyXom Course Verification', () => {
  test('should load the homepage and navigate to Part 1', async ({ page }) => {
    await page.goto('/');

    // Verify sidebar loaded
    const part1Button = page.locator('button').filter({ hasText: /Part 1|Parte 1|1\. Zatia/ });
    await expect(part1Button.first()).toBeVisible({ timeout: 15000 });

    // Click on the first section of Part 1 (Getting started)
    const firstSectionButton = page.locator('button').filter({ hasText: /Getting started|Comenzando|Hasten/ });
    await expect(firstSectionButton.first()).toBeVisible();
    await firstSectionButton.first().click();

    // Check if the main content heading updated (use first() to avoid strict mode violation)
    const mainHeading = page.locator('main h1').first();
    await expect(mainHeading).toBeVisible();
    
    // Check if the first exercise is present
    const exerciseLabel = page.locator('span').filter({ hasText: /EXERCISE|EJERCICIO|ARIKETA/i });
    await expect(exerciseLabel.first()).toBeVisible();
  });

  test('should switch languages correctly', async ({ page }) => {
    await page.goto('/');

    // Switch to CAS
    const casButton = page.locator('button').filter({ hasText: /^CAS$/ });
    await casButton.click();
    await expect(page.locator('aside')).toContainText(/Información|Introducción/i);

    // Switch to EUS
    const eusButton = page.locator('button').filter({ hasText: /^EUS$/ });
    await eusButton.click();
    await expect(page.locator('aside')).toContainText(/Informazioa|Sarrera/i);

    // Switch to ENG
    const engButton = page.locator('button').filter({ hasText: /^ENG$/ });
    await engButton.click();
    await expect(page.locator('aside')).toContainText(/Information|Introduction/i);
  });
});
