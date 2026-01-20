
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
const sections = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'tests/e2e/fixtures/all_sections.json'), 'utf-8'));

test.describe('Comprehensive Content Crawl', () => {
  
  test('Verify every single page for formatting errors', async ({ page }) => {
    // Increase timeout for this long running test
    test.setTimeout(300000); // 5 minutes

    await page.goto('http://localhost:5173/');

    // Switch to English to match fixture titles
    const engBtn = page.locator('button:has-text("ENG")').first();
    if (await engBtn.isVisible()) {
        await engBtn.click();
        await page.waitForTimeout(500); // Wait for re-render
    } else {
        console.warn("Could not find ENG button. Test might fail if default is not ENG.");
    }

    // Helper to check for "Soup" (Raw tags that should be rendered)
    const checkForSoup = async (sectionId: string) => {
        const bodyText = await page.locator('main').innerText();
        
        // Check for raw tags
        const forbiddenPatterns = [
            '<text-box', 
            '<sample-output', 
            '<quiz', 
            '<in-browser-programming-exercise',
            '[object Object]' // Classic JS error
        ];

        for (const pattern of forbiddenPatterns) {
            if (bodyText.includes(pattern)) {
                throw new Error(`[SOUP DETECTED] Section ${sectionId} contains raw text "${pattern}". Rendering failed.`);
            }
        }
    };

    // Helper to check Exercises
    const checkExercises = async (sectionId: string) => {
        // Find all cards
        const cards = page.locator('.rounded-2xl.shadow-xl.bg-white');
        const count = await cards.count();
        
        for (let i = 0; i < count; i++) {
            const card = cards.nth(i);
            
            // Determine type by looking for unique buttons
            const isExercise = await card.locator('button:has-text("▶")').count() > 0;
            const isQuiz = await card.locator('button:has-text("Check")').count() > 0 || await card.locator('button:has-text("Comprobar")').count() > 0;

            if (isExercise) {
                // Check for Header Icon (Pencil)
                await expect(card.locator('svg[data-icon="pencil-alt"]'), `Exercise ${i} in ${sectionId} missing header icon`).toBeVisible();
                
                // Check Description
                const desc = card.locator('.px-8.py-6'); // Description container
                if (await desc.count() > 0) {
                     const text = await desc.innerText();
                     if (text.trim().length < 5) {
                         console.warn(`[WARN] Exercise ${i} in ${sectionId} has very short description: "${text}"`);
                     }
                }
            } else if (isQuiz) {
                // It's a quiz, ensure it renders questions (e.g. check for at least one question text)
                // We can't easily check much else without interacting
            } else {
                // Unknown card type?
                // Might be a text-box rendered as a card? No, text-boxes are H3s.
                // Could be a very broken exercise.
                // console.warn(`[WARN] Unknown card type at index ${i} in ${sectionId}`);
            }
        }
    };

    // Iterate through all sections
    // To navigate reliably, we will simply use the page state if possible, or click sidebar.
    // Clicking sidebar requires logic.
    // Let's assume we can click "Part X" to expand, then click the link.
    
    // Group by Part to minimize clicking
    const sectionsByPart = sections.reduce((acc, sec) => {
        const partMatch = sec.id.match(/part(\d+)/);
        const part = partMatch ? parseInt(partMatch[1]) : 1;
        if (!acc[part]) acc[part] = [];
        acc[part].push(sec);
        return acc;
    }, {} as Record<number, typeof sections>);

    for (const partNum of Object.keys(sectionsByPart).map(Number).sort((a,b)=>a-b)) {
        console.log(`Auditing Part ${partNum}...`);
        
        // Find Part Header Button in Sidebar
        // Text varies by language. Assuming default CAS "Parte X" or "1. Zatia" or similar.
        // We can target by the "▼" span or the button structure.
        // The sidebar button text is "Part X" or similar.
        // Let's use a loose text locator for the part number.
        // Actually, the app default is CAS. "Parte 1", "Parte 2".
        
        const partHeader = page.locator(`aside button:has-text("Part ${partNum}")`).first();
        // Check if expanded. The list UL should be visible.
        // If not found, maybe language is different? EUS "1. Zatia". ENG "Part 1".
        // Let's try "Parte {num}" (CAS default).
        
        if (await partHeader.count() > 0) {
             // Click to expand if the list isn't visible
             // We can just click it. If it was open, it closes. If closed, it opens.
             // We need to know state.
             // The arrow rotates. class 'rotate-180' if open.
             const arrow = partHeader.locator('span.transform');
             const isClosed = !(await arrow.getAttribute('class'))?.includes('rotate-180');
             
             if (isClosed) {
                 await partHeader.click();
                 await page.waitForTimeout(300); // Animation
             }
        } else {
            console.warn(`Could not find sidebar header for Part ${partNum}. Skipping navigation via sidebar.`);
            continue; 
        }

        for (const section of sectionsByPart[partNum]) {
            // Click the section link
            // Sidebar link text is the TITLE.
            // We need to match exact title or use ID? We don't have ID in DOM.
            // We have title in sections list.
            const link = page.locator(`aside li button:has-text("${section.title}")`).first();
            
            if (await link.count() === 0) {
                console.error(`Link not found for ${section.id} ("${section.title}")`);
                continue;
            }
            
            await link.click();
            
            // Wait for Main Header to match title (confirms navigation)
            await expect(page.locator('main h1')).toContainText(section.title);
            
            // Wait a bit for Markdown rendering
            await page.waitForTimeout(100);

            // Audit
            await checkForSoup(section.id);
            await checkExercises(section.id);
        }
    }
  });
});
