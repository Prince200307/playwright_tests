import { test, expect, Page } from '@playwright/test';

/**
 * @description Layout and header tests for desktop/mobile, theme toggle and notifications
 * @feature Layout & Header
 * @precondition User must be logged in
 * @testdata None
 * @expected All layout elements should work correctly
 */
test.describe('Layout & Header', () => {
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
   * @description Tests for desktop layout elements visibility
   * @feature Layout & Header - Desktop
   * @precondition User logged in, viewport set to desktop (1280x800)
   * @testdata None
   * @expected All desktop layout elements should be visible
   */
  test.describe('Desktop Layout', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
    });

    /**
     * @description Verifies header element is visible on desktop
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected Header element visible
     */
    test('Header is visible on desktop', async ({ page }) => {
      await expect(page.locator('header')).toBeVisible();
    });

    /**
     * @description Verifies user greeting "Hi User" is visible in header
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Hi User" text visible
     */
    test('User greeting "Hi User" is visible in header', async ({ page }) => {
      await expect(page.getByText('Hi User')).toBeVisible();
    });

    /**
     * @description Verifies welcome back text is visible
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Welcome back" text visible
     */
    test('Welcome back text is visible', async ({ page }) => {
      await expect(page.getByText('Welcome back')).toBeVisible();
    });

    /**
     * @description Verifies search input is visible in header on desktop
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected Search input visible
     */
    test('Search input is visible in header on desktop', async ({ page }) => {
      await expect(page.getByPlaceholder('Search...')).toBeVisible();
    });

    /**
     * @description Verifies theme toggle button is visible
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Toggle theme" button visible
     */
    test('Theme toggle button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Toggle theme' })).toBeVisible();
    });

    /**
     * @description Verifies notifications button is visible
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Notifications" button visible
     */
    test('Notifications button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Notifications' })).toBeVisible();
    });

    /**
     * @description Verifies desktop sidebar is visible
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected Sidebar element visible
     */
    test('Desktop sidebar is visible', async ({ page }) => {
      const sidebar = page.locator('aside');
      await expect(sidebar).toBeVisible();
    });

    /**
     * @description Verifies logo text "KeenAble" is visible in sidebar
     * @feature Layout & Header - Desktop
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "KeenAble" logo text visible in sidebar
     */
    test('Logo text "KeenAble" is visible in sidebar', async ({ page }) => {
      await expect(page.getByText('KeenAble')).toBeVisible();
    });
  });

  /**
   * @description Tests for mobile layout elements visibility
   * @feature Layout & Header - Mobile
   * @precondition User logged in, viewport set to mobile (375x667)
   * @testdata None
   * @expected Mobile layout elements should behave correctly
   */
  test.describe('Mobile Layout', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/dashboard');
      await waitForHydration(page);
    });

    /**
     * @description Verifies header is visible on mobile
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected Header element visible
     */
    test('Header is visible on mobile', async ({ page }) => {
      await expect(page.locator('header')).toBeVisible();
    });

    /**
     * @description Verifies user greeting is visible on mobile
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected "Hi User" text visible
     */
    test('User greeting is visible on mobile', async ({ page }) => {
      await expect(page.getByText('Hi User')).toBeVisible();
    });

    /**
     * @description Verifies search input is hidden on mobile viewport
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected Search input not visible
     */
    test('Search input is hidden on mobile viewport', async ({ page }) => {
      await expect(page.getByPlaceholder('Search...')).not.toBeVisible();
    });

    /**
     * @description Verifies mobile menu button is visible on mobile
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected "Open menu" button visible
     */
    test('Mobile menu button is visible on mobile', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    });

    /**
     * @description Verifies mobile bottom navigation is visible
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected Bottom navigation element visible
     */
    test('Mobile bottom navigation is visible', async ({ page }) => {
      await expect(page.locator('nav.fixed.bottom-0')).toBeVisible();
    });

    /**
     * @description Verifies desktop sidebar is hidden on mobile viewport
     * @feature Layout & Header - Mobile
     * @precondition Dashboard page loaded, mobile viewport
     * @testdata None
     * @expected Sidebar should have hidden class
     */
    test('Desktop sidebar is hidden on mobile', async ({ page }) => {
      const sidebar = page.locator('aside');
      await expect(sidebar).toHaveClass(/hidden/);
    });
  });

  /**
   * @description Tests for search input functionality
   * @feature Layout & Header - Search
   * @precondition Dashboard page loaded, desktop viewport
   * @testdata None
   * @expected Search input should work correctly
   */
  test.describe('Search Input', () => {
    /**
     * @description Verifies search input is visible in the header
     * @feature Layout & Header - Search
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata None
     * @expected Search input visible
     */
    test('Search input is visible in the header', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      const searchInput = page.getByPlaceholder('Search...');
      await expect(searchInput).toBeVisible();
    });

    /**
     * @description Verifies search input accepts text
     * @feature Layout & Header - Search
     * @precondition Dashboard page loaded, desktop viewport
     * @testdata "test query"
     * @expected Input should accept and retain text
     */
    test('Search input accepts text', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      const searchInput = page.getByPlaceholder('Search...');
      await searchInput.fill('test query');
      await expect(searchInput).toHaveValue('test query');
    });
  });

  /**
   * @description Tests for theme toggle functionality
   * @feature Layout & Header - Theme Toggle
   * @precondition User logged in
   * @testdata None
   * @expected Theme toggle should work correctly
   */
  test.describe('Theme Toggle', () => {
    /**
     * @description Verifies theme toggle changes theme from light to dark
     * @feature Layout & Header - Theme Toggle
     * @precondition Settings page loaded
     * @testdata None
     * @expected HTML should have dark class
     */
    test('Theme toggle button changes theme from light to dark', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/settings');
      await waitForHydration(page);
      
      const html = page.locator('html');
      const darkButton = page.getByRole('button', { name: 'Dark' });
      
      // Click dark theme
      await darkButton.click();
      await page.waitForTimeout(300);
      
      // Verify dark class is added
      await expect(html).toHaveClass(/dark/);
    });

    /**
     * @description Verifies theme toggle changes theme from dark to light
     * @feature Layout & Header - Theme Toggle
     * @precondition Settings page loaded
     * @testdata None
     * @expected HTML should not have dark class
     */
    test('Theme toggle button changes theme from dark to light', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/settings');
      await waitForHydration(page);
      
      const html = page.locator('html');
      const darkButton = page.getByRole('button', { name: 'Dark' });
      const lightButton = page.getByRole('button', { name: 'Light' });
      
      // First set dark
      await darkButton.click();
      await page.waitForTimeout(300);
      await expect(html).toHaveClass(/dark/);
      
      // Then set light
      await lightButton.click();
      await page.waitForTimeout(300);
      await expect(html).not.toHaveClass(/dark/);
    });

    /**
     * @description Verifies theme toggle in header works
     * @feature Layout & Header - Theme Toggle
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Toggle button should be clickable without errors
     */
    test('Theme toggle in header works', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
      await expect(themeToggle).toBeVisible();
      
      // Click the theme toggle
      await themeToggle.click();
      await page.waitForTimeout(300);
    });
  });

  /**
   * @description Tests for notification features
   * @feature Layout & Header - Notifications
   * @precondition Dashboard page loaded
   * @testdata None
   * @expected Notification elements should be visible
   */
  test.describe('Notifications', () => {
    /**
     * @description Verifies notifications button is visible
     * @feature Layout & Header - Notifications
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Notifications" button visible
     */
    test('Notifications button is visible', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      await expect(page.getByRole('button', { name: 'Notifications' })).toBeVisible();
    });

    /**
     * @description Verifies notification badge indicator is visible
     * @feature Layout & Header - Notifications
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Notification badge visible
     */
    test('Notification badge indicator is visible', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/dashboard');
      await waitForHydration(page);
      
      const notificationButton = page.getByRole('button', { name: 'Notifications' });
      const badge = notificationButton.locator('span[class*="bg-destructive"]');
      await expect(badge).toBeVisible();
    });
  });
});
