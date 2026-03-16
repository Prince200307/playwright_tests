import { Page, expect } from '@playwright/test';

export async function waitForHydration(page: Page): Promise<void> {
  try {
    await page.waitForLoadState('networkidle');
    const spinner = page.locator('.animate-spin');
    if (await spinner.count() > 0) {
      await expect(spinner).toBeHidden({ timeout: 10000 }).catch(() => {});
    }
    await page.waitForFunction(() => document.readyState === 'complete', { timeout: 5000 }).catch(() => {});
  } catch (e) {
    console.log('Hydration wait warning:', e);
  }
}

export async function loginWithDevMode(page: Page): Promise<void> {
  await page.goto('http://95.216.39.97:8086/login');
  await waitForHydration(page);
  const skipButton = page.locator('button:has-text("Skip Login")');
  if (await skipButton.count() > 0) {
    await skipButton.click();
    await waitForHydration(page);
  }
}

export async function logout(page: Page): Promise<void> {
  await waitForHydration(page);
  const menuButton = page.locator('button[aria-label="Menu"], button:has-text("Menu"), .menu-button, [class*="menu"]').first();
  if (await menuButton.count() > 0) {
    await menuButton.click();
    await waitForHydration(page);
  }
  const signOutButton = page.locator('button:has-text("Sign Out"), a:has-text("Sign Out")');
  if (await signOutButton.count() > 0) {
    await signOutButton.click();
    await waitForHydration(page);
  }
}
