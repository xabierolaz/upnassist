import { test, expect } from '@playwright/test';

test.describe('Brand Verification', () => {
  test('should show Xabier Olaz Moratinos in the footer and UPNA branding', async ({ page }) => {
    await page.goto('/');

    // Verify footer contains designer attribution
    const footer = page.locator('footer');
    await expect(footer).toContainText(/Diseñado por Xabier Olaz Moratinos|Designed by Xabier Olaz Moratinos|Xabier Olaz Moratinosek diseinatua/);
    
    // Verify footer contains UPNA/UPNassist
    await expect(footer).toContainText(/UPNA|UPNassist/i);

    // Verify sidebar header contains UPNA
    const sidebarHeader = page.locator('aside');
    await expect(sidebarHeader).toContainText(/UPNA|NUP/i);

    // Verify no Helsinki or mooc.fi remains in the main visible areas
    const bodyText = await page.innerText('body');
    expect(bodyText).not.toContain('Helsinki');
    expect(bodyText).not.toContain('mooc.fi');
  });

  test('should verify part 9 section 5 has Pamplona instead of Helsinki', async ({ page }) => {
    await page.goto('/');

    // Expand Part 9 if needed (we'll need to find it by text)
    const part9Button = page.locator('button').filter({ hasText: /Part 9|Parte 9|9\. Zatia/i });
    
    // We might need to scroll the sidebar or wait for it
    await part9Button.scrollIntoViewIfNeeded();
    await part9Button.click();

    // Click on Class Attributes section (Section 5)
    const section5Button = page.locator('button').filter({ hasText: /Class attributes|Atributos de clase|Klase-atributuak/i });
    await section5Button.click();

    // Verify content contains Pamplona
    await expect(page.locator('main')).toContainText(/Pamplona/i);
    await expect(page.locator('main')).not.toContainText(/Helsinki/i);
  });
});
