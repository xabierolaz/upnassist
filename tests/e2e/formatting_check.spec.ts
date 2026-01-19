import { test, expect } from '@playwright/test';

test.describe('Content Formatting Verification', () => {
  test('Part 1 Section 2 should render rich text and code blocks correctly', async ({ page }) => {
    // 1. Navigate to Part 1 -> Section 2
    await page.goto('/');
    
    // Relaxed locator
    const part1Button = page.locator('button').filter({ hasText: /Part 1|Parte 1|1\. Zatia/ }).first();
    await expect(part1Button).toBeVisible();
    // Check if expanded, if not click
    // Actually the button text changes arrow direction? 
    // Assuming default is expanded or we click.
    // Target sidebar link
    const sectionLink = page.locator('aside button').filter({ hasText: /2\.\s+Information from the user|2\.\s+Información del usuario|2\.\s+Erabiltzailearen informazioa/i });
    
    // If section link not visible (collapsed), click part 1
    if (!await sectionLink.isVisible()) {
        await part1Button.click();
    }
    await expect(sectionLink).toBeVisible();
    await sectionLink.click();

    // 2. Verify Main Header
    const mainHeader = page.locator('h1').filter({ hasText: /Information from the user|Información del usuario/ });
    await expect(mainHeader).toBeVisible();

    // 3. Verify Markdown Headers (H2/H3)
    // "Learning objectives"
    const objectivesHeader = page.locator('h2, h3').filter({ hasText: /Learning objectives|Objetivos de aprendizaje/ });
    await expect(objectivesHeader).toBeVisible();

    // 4. Verify Paragraphs
    // Check for a specific paragraph text ensuring it's not squashed
    const p1 = page.locator('p').filter({ hasText: /Input refers to any information/ });
    await expect(p1).toBeVisible();

    // 5. Verify Code Blocks
    // Target the specific python code block
    const codeBlock = page.locator('pre code').filter({ hasText: 'name =' }).first();
    await expect(codeBlock).toBeVisible();
    const codeText = await codeBlock.textContent();
    expect(codeText).toContain('input');
    expect(codeText).toContain('print');

    // 6. Verify Sample Output (should be distinct from normal text)
    // My restoration script wrapped them in ```text
    // So they should be in a pre/code block too, likely without language class or language-text
    const sampleOutput = page.locator('div').filter({ hasText: /Sample output/ }).first();
    await expect(sampleOutput).toBeVisible();
    
    // 7. Verify Exercise Component
    // Look for "Name twice" exercise
    const exerciseTitle = page.locator('h4').filter({ hasText: /Name twice|Nombre dos veces/ });
    await expect(exerciseTitle).toBeVisible();
    
    // Verify it is inside the border box
    const exerciseBox = page.locator('div[class*="border"]').filter({ has: exerciseTitle }).first();
    await expect(exerciseBox).toBeVisible();
    await expect(exerciseBox).toHaveClass(/border/);

    // 8. Verify formatting separation
    // Ensure "Learning objectives" is NOT followed immediately by "After this section" in the same text node
    // content should be separate elements
    const afterSection = page.locator('p, li').filter({ hasText: /After this section|Después de esta sección/ });
    await expect(afterSection).toBeVisible();
    
    // Ensure they are not the same element
    expect(await objectivesHeader.elementHandle()).not.toBe(await afterSection.elementHandle());
  });
});
