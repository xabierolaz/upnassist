import { test, expect } from '@playwright/test';
import { getLocalizedText } from '../core/loader';
import { courseStructureMetadata as courseStructure } from '../courses/mooc/manifest';

test('Navigation menu works', async ({ page }) => {
    await page.goto('/');
    
    const firstPageId = courseStructure[0].id;
    const firstIndex = courseStructure.findIndex(p => p.id === firstPageId);
    const nextPage = courseStructure[firstIndex + 1];

    const currentLang = 'ENG';
    const nextPageTitle = getLocalizedText(nextPage.title, currentLang);

    // Wait for sidebar
    await page.waitForSelector('aside');
    
    // Toggle part if needed (this depends on UI being collapsed/expanded)
    // For now assume it's there
    await page.getByText(nextPageTitle).click();
    
    await expect(page.locator('h1')).toContainText(nextPageTitle);
});
