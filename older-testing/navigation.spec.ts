import { test, expect, Page } from '@playwright/test';

/**
 * @description Navigation tests for sidebar, mobile navigation and URL redirects
 * @feature Navigation
 * @precondition User must be logged in
 * @testdata None
 * @expected All navigation links should work correctly
 */
test.describe('Navigation', () => {
  /**
   * Helper function to wait for React hydration
   */
  async function waitForHydration(page: Page) {
    await page.waitForLoadState('networkidle');
    const spinner = page.locator('.animate-spin');
    if (await spinner.count() > 0) {
      await expect(spinner).toBeHidden({ timeout: 10000 });
    }
  }

  /**
   * @description Tests for desktop sidebar navigation links
   * @feature Navigation - Desktop Sidebar
   * @precondition User logged in, viewport set to desktop (1280x800)
   * @testdata None
   * @expected All sidebar navigation links should work
   */
  test.describe('Desktop Sidebar Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
    });

    /**
     * @description Verifies clicking Dashboard sidebar link navigates to dashboard
     * @feature Navigation - Desktop Sidebar
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected URL should change to /dashboard
     */
    test('Dashboard link navigates to dashboard page', async ({ page }) => {
      await page.locator('aside a[href="/dashboard"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/dashboard$/);
    });

    /**
     * @description Verifies clicking Leaves sidebar link navigates to leaves page
     * @feature Navigation - Desktop Sidebar
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected URL should change to /leaves
     */
    test('Leaves link navigates to leaves page', async ({ page }) => {
      await page.locator('aside a[href="/leaves"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/leaves$/);
    });

    /**
     * @description Verifies clicking Settings sidebar link navigates to settings page
     * @feature Navigation - Desktop Sidebar
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected URL should change to /settings
     */
    test('Settings link navigates to settings page', async ({ page }) => {
      await page.locator('aside a[href="/settings"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/settings$/);
    });

    /**
     * @description Verifies Sign Out button is visible in sidebar
     * @feature Navigation - Desktop Sidebar
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Sign Out button should be visible
     */
    test('Sign Out button is visible in sidebar', async ({ page }) => {
      await expect(page.locator('aside button:has-text("Sign Out")')).toBeVisible();
    });
  });

  /**
   * @description Tests for mobile bottom navigation
   * @feature Navigation - Mobile Bottom Nav
   * @precondition User logged in, viewport set to mobile (375x667)
   * @testdata None
   * @expected All mobile navigation tabs should work
   */
  test.describe('Mobile Bottom Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/dashboard');
      await waitForHydration(page);
    });

    /**
     * @description Verifies mobile Dashboard tab navigates to dashboard
     * @feature Navigation - Mobile Bottom Nav
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected URL should change to /dashboard
     */
    test('Mobile Dashboard tab navigates to dashboard', async ({ page }) => {
      await page.locator('nav.fixed.bottom-0 a[href="/dashboard"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/dashboard$/);
    });

    /**
     * @description Verifies mobile Leaves tab navigates to leaves page
     * @feature Navigation - Mobile Bottom Nav
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected URL should change to /leaves
     */
    test('Mobile Leaves tab navigates to leaves page', async ({ page }) => {
      await page.locator('nav.fixed.bottom-0 a[href="/leaves"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/leaves$/);
    });

    /**
     * @description Verifies mobile Settings tab navigates to settings page
     * @feature Navigation - Mobile Bottom Nav
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected URL should change to /settings
     */
    test('Mobile Settings tab navigates to settings page', async ({ page }) => {
      await page.locator('nav.fixed.bottom-0 a[href="/settings"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/settings$/);
    });
  });

  /**
   * @description Tests for multi-page navigation flow
   * @feature Navigation - Page Flow
   * @precondition User logged in, desktop viewport
   * @testdata None
   * @expected All navigation should work in sequence
   */
  test.describe('Page Navigation Flow', () => {
    /**
     * @description Verifies full navigation flow from Dashboard to Leaves to Settings and back
     * @feature Navigation - Page Flow
     * @precondition User logged in, desktop viewport
     * @testdata None
     * @expected All pages should load with correct headings
     */
    test('Can navigate from Dashboard to Leaves to Settings', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      // Navigate to Leaves
      await page.locator('aside a[href="/leaves"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/leaves$/);
      await expect(page.getByRole('heading', { name: 'Leave Dashboard' })).toBeVisible();
      
      // Navigate to Settings
      await page.locator('aside a[href="/settings"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/settings$/);
      await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();
      
      // Navigate back to Dashboard
      await page.locator('aside a[href="/dashboard"]').click();
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/dashboard$/);
    });
  });

  /**
   * @description Tests for root URL redirect behavior
   * @feature Navigation - Root URL
   * @precondition User logged in
   * @testdata None
   * @expected Root URL should redirect to dashboard
   */
  test.describe('Root URL Redirect', () => {
    /**
     * @description Verifies accessing root URL redirects to dashboard
     * @feature Navigation - Root URL
     * @precondition None
     * @testdata None
     * @expected URL should redirect to /dashboard
     */
    test('Root URL redirects to dashboard', async ({ page }) => {
      await page.goto('/');
      await waitForHydration(page);
      await expect(page).toHaveURL(/\/dashboard$/);
    });
  });
});
