import { test, expect } from '@playwright/test';
import { setupAuth } from './fixtures/auth';

test.describe('Markdown Rendering Clinical Audit', () => {
  test.beforeEach(async ({ page }) => {
    await setupAuth(page);
    await page.goto('/course/mooc/part1-1');
  });

  test('Verify Text Box and Sample Output Rendering', async ({ page }) => {
    // 1. Verify <text-box> transformation
    // It should be converted to an H3 header "Learning objectives" (or "Objetivos de aprendizaje" in CAS)
    const learningHeader = page.locator('h3').filter({ hasText: /Objetivos de aprendizaje|Learning objectives/ }).first();
    await expect(learningHeader).toBeVisible();
    
    // Verify content follows (e.g. list items)
    await expect(page.locator('ul li').first()).toBeVisible();

    // 2. Verify <sample-output> transformation
    // Should be rendered as a code block container with "Sample output" label.
    const sampleBox = page.locator('.border-l-4.border-gray-300').first();
    await expect(sampleBox).toBeVisible();
    await expect(sampleBox).toContainText('Sample output');
    
    // 3. Verify Code Blocks
    const codeBlock = page.locator('pre code').first();
    await expect(codeBlock).toBeVisible();
    
    // 4. Verify no "Soup"
    // Ensure standard paragraphs exist and are readable
    await expect(page.locator('main .prose p').first()).toHaveClass(/mb-4/); 
  });
});