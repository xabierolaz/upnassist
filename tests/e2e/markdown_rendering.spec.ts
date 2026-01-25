import { test, expect } from '@playwright/test';

test.describe('Markdown Rendering Clinical Audit', () => {
  test('Verify Text Box and Sample Output Rendering', async ({ page }) => {
    // Navigate to Part 1 Section 1 (which has Learning Objectives)
    await page.goto('http://localhost:5173/');
    
    // 1. Verify <text-box> transformation
    // It should be converted to an H3 header "Learning objectives" (or "Objetivos de aprendizaje" in CAS)
    const learningHeader = page.locator('h3', { hasText: /Objetivos de aprendizaje|Learning objectives/ }).first();
    await expect(learningHeader).toBeVisible();
    
    // Verify content follows (e.g. list items)
    // Note: The HTML structure might vary slightly, but we expect a list nearby.
    // Actually, in the MD, the text box contains a list.
    // If it's converted to "### Header \n List", then H3 is followed by UL.
    // Let's verify visible list items.
    await expect(page.locator('ul li').first()).toBeVisible();

    // 2. Verify <sample-output> transformation
    // Should be rendered as a code block container with "Sample output" label.
    // We already audited this visually, but let's check the DOM structure.
    const sampleBox = page.locator('.border-l-4.border-gray-300').first();
    await expect(sampleBox).toBeVisible();
    await expect(sampleBox).toContainText('Sample output');
    
    // 3. Verify Code Blocks
    // Check for standard pre/code blocks
    const codeBlock = page.locator('pre code').first();
    await expect(codeBlock).toBeVisible();
    
    // 4. Verify no "Soup"
    // Ensure standard paragraphs exist and are readable
    await expect(page.locator('main .prose p').first()).toHaveClass(/mb-4/); // Check for spacing class
  });
});
