import { test, expect } from '@playwright/test';

test.describe('Inline Code Rendering Fix', () => {
  test('Verify inline code is rendered correctly (not as block)', async ({ page }) => {
    // Navigate to Part 1 Section 1 (default page)
    await page.goto('http://localhost:5173/');

    // Wait for content to load
    await expect(page.locator('main h1')).toBeVisible();

    // Find an inline code element. 
    // In Part 1 Section 1, "print" is used as inline code.
    // Text: "We have already used functions such as len, print and input..."
    
    // We look for a <code> element containing "print"
    const printCode = page.locator('code', { hasText: 'print' }).first();
    
    await expect(printCode).toBeVisible();

    // Check classes for inline styling
    await expect(printCode).toHaveClass(/bg-gray-100/);
    await expect(printCode).toHaveClass(/text-red-600/);

    // Check that it is NOT inside a pre tag
    // Playwright locator assertions on parents are tricky, but we can check the element itself
    // shouldn't match the block styling (bg-gray-900)
    await expect(printCode).not.toHaveClass(/bg-gray-900/);
    
    // Explicitly check parent is NOT pre
    // We can evaluate this in the browser context
    const isInsidePre = await printCode.evaluate(el => {
      return el.parentElement?.tagName === 'PRE';
    });
    expect(isInsidePre).toBe(false);

    // Also verify a real block (like sample output or code block)
    // There is a python block: name = "In Search of Lost Typing"
    // But that's later in Part 8. 
    // In Part 1 Section 1, there are code blocks too.
    const codeBlock = page.locator('pre code').first();
    if (await codeBlock.count() > 0) {
        // It might be inside the sample output div or a pre
        // Just ensure we didn't break blocks
        const blockParent = page.locator('pre').first();
        if (await blockParent.count() > 0) {
             await expect(blockParent).toHaveClass(/bg-gray-900/);
        }
    }
  });
});
