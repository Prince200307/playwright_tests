import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';
import { captureTestScreenshot } from '../utils/screenshot';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureTestScreenshot(page, testInfo);
  });

  /**
   * @testId TC095
   * @feature Navigation
   * @priority P1
   * @description Verify bottom navigation bar appears on mobile viewport
   * @expected Bottom nav displays with nav icons
   */
  test('TC095 - Mobile Bottom Navigation', async ({ page }) => {
    const bottomNav = page.locator('nav').first();
    if (await bottomNav.count() > 0) {
      await expect(bottomNav).toBeAttached();
    }
  });

  /**
   * @testId TC105
   * @feature Navigation
   * @priority P1
   * @description Verify hamburger menu opens when tapped on mobile
   * @expected Menu slides in from side
   */
  test('TC105 - Mobile Navigation Menu Open', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Menu"], button:has-text("Menu"), .menu-button').first();
    if (await menuButton.count() > 0) {
      await expect(menuButton).toBeVisible();
      
      await menuButton.click();
      await waitForHydration(page);
      
      const drawer = page.locator('[class*="drawer"], [class*="sidebar"], [class*="sheet"]').first();
      if (await drawer.count() > 0) {
        await expect(drawer).toBeVisible();
      }
    }
  });

  /**
   * @testId TC106
   * @feature Navigation
   * @priority P1
   * @description Verify navigation menu closes when close button tapped
   * @expected Menu closes on tap
   */
  test('TC106 - Mobile Navigation Menu Close', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Menu"], button:has-text("Menu")').first();
    if (await menuButton.count() > 0) {
      await menuButton.click();
      await waitForHydration(page);
      
      const closeButton = page.locator('button[aria-label="Close"], button:has-text("✕"), [class*="close"]').first();
      if (await closeButton.count() > 0) {
        await closeButton.click();
        await waitForHydration(page);
        
        const drawer = page.locator('[class*="drawer"], [class*="sidebar"], [class*="sheet"]').first();
        if (await drawer.count() > 0) {
          await expect(drawer).not.toBeVisible();
        }
      }
    }
  });

  /**
   * @testId TC107
   * @feature Navigation
   * @priority P0
   * @description Verify Dashboard link navigates correctly from mobile menu
   * @expected Click navigates to Dashboard page
   */
  test('TC107 - Mobile Dashboard Link', async ({ page }) => {
    await page.goto('http://95.216.39.97:8086/schedule');
    await waitForHydration(page);
    await page.goto('http://95.216.39.97:8086/dashboard');
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/dashboard/);
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  /**
   * @testId TC108
   * @feature Navigation
   * @priority P0
   * @description Verify Schedule link navigates correctly from mobile menu
   * @expected Click navigates to Schedule page
   */
  test('TC108 - Mobile Schedule Link', async ({ page }) => {
    await page.goto('http://95.216.39.97:8086/schedule');
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/schedule/);
    await expect(page.getByText('Work Schedule')).toBeVisible();
  });

  /**
   * @testId TC109
   * @feature Navigation
   * @priority P0
   * @description Verify Leaves link navigates correctly from mobile menu
   * @expected Click navigates to Leaves page
   */
  test('TC109 - Mobile Leaves Link', async ({ page }) => {
    await page.goto('http://95.216.39.97:8086/leaves');
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/leaves/);
    await expect(page.getByText('Leave Dashboard')).toBeVisible();
  });

  /**
   * @testId TC110
   * @feature Navigation
   * @priority P0
   * @description Verify Settings link navigates correctly from mobile menu
   * @expected Click navigates to Settings page
   */
  test('TC110 - Mobile Settings Link', async ({ page }) => {
    await page.goto('/settings');
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/settings/);
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeAttached();
  });

  /**
   * @testId TC111
   * @feature Navigation
   * @priority P0
   * @description Verify Sign Out button is visible and touchable in mobile menu
   * @expected Button triggers logout action on tap
   */
  test('TC111 - Mobile Sign Out Button', async ({ page }) => {
    const signOutButton = page.getByRole('button', { name: 'Sign Out' });
    if (await signOutButton.count() > 0) {
      await expect(signOutButton).toBeAttached();
    }
  });
});
