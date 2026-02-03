import { test, expect } from '@playwright/test';
import { setupAuth } from './fixtures/auth';

test.describe('Comprehensive Clinical Audit of Frontend', () => {
  
  test.beforeEach(async ({ page }) => {
    await setupAuth(page);
    await page.goto('/course/mooc/part1-1');
    await expect(page.locator('aside')).toBeVisible();
  });

  const languages = ['ENG', 'CAS', 'EUS'];

  async function switchLanguage(page, lang) {
    const langButton = page.locator('button').filter({ hasText: new RegExp(`^${lang}$`) });
    await langButton.click();
    if (lang === 'ENG') {
      await expect(page.locator('aside')).toContainText('Part 1');
    } else if (lang === 'CAS') {
        await expect(page.locator('aside')).toContainText('Parte 1');
    }
  }

  // Iterate over all parts (1-14)
  for (let partNum = 1; partNum <= 14; partNum++) {
    test(`Part ${partNum}: Full Section Scan`, async ({ page }) => {
      // 1. Ensure ENG for consistency
      await switchLanguage(page, 'ENG');

      // 2. Find Part Button
      // The button contains "Part 1", "Part 2", etc. and a Chevron icon.
      const partButton = page.locator('aside button')
                             .filter({ hasText: `Part ${partNum}` })
                             .first();
      
      await expect(partButton).toBeVisible();
      
      // 3. Ensure Expanded
      // Check if the SVG icon is rotated. The SVG is the last child of the button.
      const arrow = partButton.locator('svg').last();
      const isRotated = await arrow.getAttribute('class').then(c => c?.includes('rotate-180'));
      
      if (!isRotated) {
          await partButton.click();
          await page.waitForTimeout(300);
      }

      // 4. Find Sections
      for (let secNum = 1; secNum <= 20; secNum++) {
        const sectionPrefix = `${secNum}. `;
        // Section buttons are inside the UL list, not the top-level button
        const sectionButton = page.locator('aside ul button')
                                  .filter({ hasText: sectionPrefix })
                                  .filter({ has: page.locator('visible=true') })
                                  .first();
        
        if (await sectionButton.isVisible()) {
          console.log(`Checking Part ${partNum} - Section ${secNum}`);
          await sectionButton.click();
          
          // Verify Content Load (Use first H1 to avoid strict mode error if content has H1s)
          await expect(page.locator('main h1').first()).toBeVisible({ timeout: 10000 });
          
          // Check Terminal Output presence
          const sampleOutputs = page.locator('div').filter({ hasText: /Sample output|Salida de muestra/i });
          if (await sampleOutputs.count() > 0) {
             // Ensure at least one is visible
             await expect(sampleOutputs.first()).toBeVisible();
          }

          // Verify Multilingual Title
          for (const lang of languages) {
            await switchLanguage(page, lang);
            const title = await page.locator('main h1').first().innerText();
            expect(title.length).toBeGreaterThan(0);
          }
          
          // Reset to ENG
          await switchLanguage(page, 'ENG');
          
        } else {
          if (secNum === 1) {
             console.log(`⚠️ Warning: No visible section "1. " found for Part ${partNum}`);
          }
          break; 
        }
      }
    });
  }
});