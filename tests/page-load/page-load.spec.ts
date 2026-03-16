import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';
import { captureTestScreenshot } from '../utils/screenshot';

test.describe('Page Load Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Console Error: ${msg.text()}`);
      }
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureTestScreenshot(page, testInfo);
  });

  /**
   * @testId TC115
   * @feature Page Load Behavior
   * @priority P1
   * @description Verify page transitions between routes work correctly on mobile
   * @expected Navigation occurs without errors
   */
  test('TC115 - Page Transitions Mobile', async ({ page }) => {
    await loginWithDevMode(page);
    await expect(page).toHaveURL(/.*\/dashboard/);
  });

  /**
   * @testId TC116
   * @feature Page Load Behavior
   * @priority P0
   * @description Verify no console errors on mobile page load
   * @expected No JavaScript errors in console
   */
  test('TC116 - Console Error Check Mobile', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://95.216.39.97:8086/login');
    await waitForHydration(page);
    
    expect(consoleErrors.length).toBe(0);
  });

  /**
   * @testId TC122
   * @feature Page Load Behavior
   * @priority P1
   * @description Verify application title appears in mobile browser tab
   * @expected Title displays in browser tab
   */
  test('TC122 - Mobile Browser Title', async ({ page }) => {
    await page.goto('http://95.216.39.97:8086/login');
    await waitForHydration(page);
    await expect(page).toHaveTitle(/KeenAble/);
  });
});
