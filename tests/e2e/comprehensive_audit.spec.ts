import { test, expect } from '@playwright/test';

test.describe('Comprehensive Clinical Audit of Frontend', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('aside')).toBeVisible();
  });

  const languages = ['ENG', 'CAS', 'EUS'];

  async function switchLanguage(page, lang) {
    const langButton = page.locator('button').filter({ hasText: new RegExp(`^${lang}$`) });
    await langButton.click();
    if (lang === 'ENG') {
      await expect(page.locator('aside')).toContainText('Introduction');
    } else if (lang === 'CAS') {
        await expect(page.locator('aside')).toContainText('Introducción');
    }
  }

  // Iterate over all parts (1-14)
  for (let partNum = 1; partNum <= 14; partNum++) {
    test(`Part ${partNum}: Full Section Scan`, async ({ page }) => {
      // 1. Ensure ENG for consistency
      await switchLanguage(page, 'ENG');

      // 2. Find Part Button
      const partButton = page.locator('aside button')
                             .filter({ hasText: '▼' })
                             .filter({ hasText: String(partNum) })
                             .first();
      
      await expect(partButton).toBeVisible();
      
      // 3. Ensure Expanded
      const arrow = partButton.locator('span').last();
      const isRotated = await arrow.getAttribute('class').then(c => c?.includes('rotate-180'));
      
      if (!isRotated) {
          await partButton.click();
          await page.waitForTimeout(300);
      }

      // 4. Find Sections
      for (let secNum = 1; secNum <= 20; secNum++) {
        const sectionPrefix = `${secNum}. `;
        const sectionButton = page.locator('aside button')
                                  .filter({ hasText: sectionPrefix })
                                  .filter({ hasNotText: '▼' })
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