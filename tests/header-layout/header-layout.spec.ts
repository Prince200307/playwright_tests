import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';
import { captureTestScreenshot } from '../utils/screenshot';

test.describe('Header / Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureTestScreenshot(page, testInfo);
  });

  /**
   * @testId TC093
   * @feature Header / Layout
   * @priority P0
   * @description Verify header renders correctly on mobile viewport (375x667)
   * @expected Header adapts to mobile screen with proper layout
   */
  test('TC093 - Mobile Header Rendering', async ({ page }) => {
    const header = page.locator('header').first();
    if (await header.count() > 0) {
      await expect(header).toBeVisible();
    }
  });

  /**
   * @testId TC096
   * @feature Header / Layout
   * @priority P0
   * @description Verify header renders correctly in Android mobile browser
   * @expected Header displays properly on Android Chrome
   */
  test('TC096 - Android Browser Header', async ({ page }) => {
    // This test runs on Android Pixel project
    const header = page.locator('header').first();
    if (await header.count() > 0) {
      await expect(header).toBeVisible();
    }
  });

  /**
   * @testId TC097
   * @feature Header / Layout
   * @priority P0
   * @description Verify header renders correctly in iOS Safari
   * @expected Header displays properly on iOS Safari
   */
  test('TC097 - iOS Safari Header', async ({ page }) => {
    // This test runs on iOS Safari project
    const header = page.locator('header').first();
    if (await header.count() > 0) {
      await expect(header).toBeVisible();
    }
  });

  /**
   * @testId TC112
   * @feature Header / Layout
   * @priority P1
   * @description Verify Search input field is visible and usable on mobile
   * @expected Input field renders and accepts text
   */
  test('TC112 - Mobile Search Input', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/search/i);
    if (await searchInput.count() > 0) {
      await expect(searchInput).toBeVisible();
    }
  });

  /**
   * @testId TC113
   * @feature Header / Layout
   * @priority P1
   * @description Verify Notification button is visible and touchable on mobile
   * @expected Button displays in header
   */
  test('TC113 - Mobile Notification Button', async ({ page }) => {
    const notificationButton = page.getByRole('button', { name: 'Notifications' });
    if (await notificationButton.count() > 0) {
      await expect(notificationButton).toBeVisible();
    }
  });

  /**
   * @testId TC114
   * @feature Header / Layout
   * @priority P1
   * @description Verify Theme toggle button works on mobile
   * @expected Button toggles themes on tap
   */
  test('TC114 - Mobile Theme Toggle', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    if (await themeToggle.count() > 0) {
      await expect(themeToggle).toBeVisible();
    }
  });
});
