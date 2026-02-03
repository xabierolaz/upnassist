import { Page } from '@playwright/test';

export async function setupAuth(page: Page) {
  // Navigate to root to set localStorage context
  await page.goto('/');
  
  // Set bypass keys
  await page.evaluate(() => {
    localStorage.setItem('upnassist-auth-bypass', 'true');
    localStorage.setItem('pyxom-language-storage', JSON.stringify({ state: { currentLang: 'ENG' }, version: 0 }));
  });
  
  // Reload to apply changes (triggers AuthStore initialization with bypass)
  await page.reload();
}
