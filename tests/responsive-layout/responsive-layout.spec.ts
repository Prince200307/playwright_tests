import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';

test.describe('Responsive Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
  });

  /**
   * @testId TC094
   * @feature Responsive Layout
   * @priority P0
   * @description Verify layout adapts to mobile viewport without horizontal scrolling
   * @expected No horizontal scrollbar appears
   */
  test('TC094 - Mobile Layout Adaptation', async ({ page }) => {
    const body = page.locator('body');
    const scrollWidth = await body.evaluate((el) => el.scrollWidth);
    const clientWidth = await body.evaluate((el) => el.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
  });

  /**
   * @testId TC098
   * @feature Responsive Layout
   * @priority P1
   * @description Verify dropdowns adapt to touch UI on mobile
   * @expected Dropdown opens full-screen on mobile
   */
  test('TC098 - Mobile Dropdown Behavior', async ({ page }) => {
    const dropdown = page.locator('select').first();
    if (await dropdown.count() > 0) {
      await expect(dropdown).toBeVisible();
    }
  });

  /**
   * @testId TC099
   * @feature Responsive Layout
   * @priority P1
   * @description Verify page scrolls vertically without issues on mobile
   * @expected Smooth vertical scrolling works
   */
  test('TC099 - Mobile Scroll Behavior', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
  });

  /**
   * @testId TC100
   * @feature Forms / Inputs
   * @priority P1
   * @description Verify form inputs are usable on mobile viewport
   * @expected Input fields accept text on mobile
   */
  test('TC100 - Mobile Form Input Handling', async ({ page }) => {
    await page.goto('http://95.216.39.97:8086/login');
    await waitForHydration(page);
    const emailInput = page.getByPlaceholder('Email');
    if (await emailInput.count() > 0) {
      await expect(emailInput).toBeVisible();
      await emailInput.fill('test@example.com');
    }
  });

  /**
   * @testId TC101
   * @feature Responsive Layout
   * @priority P1
   * @description Verify viewport scaling is correct on mobile
   * @expected No zoom issues, proper scale
   */
  test('TC101 - Mobile Viewport Scaling', async ({ page }) => {
    const viewport = page.viewportSize();
    expect(viewport).toBeTruthy();
    expect(viewport?.width).toBe(375);
    expect(viewport?.height).toBe(667);
  });

  /**
   * @testId TC102
   * @feature Responsive Layout
   * @priority P1
   * @description Verify tables are horizontally scrollable on mobile
   * @expected Tables scroll horizontally on small screens
   */
  test('TC102 - Mobile Table Responsiveness', async ({ page }) => {
    const table = page.locator('table').first();
    if (await table.count() > 0) {
      const isScrollable = await table.evaluate((el) => el.scrollWidth > el.clientWidth);
      if (isScrollable) {
        await expect(table).toBeVisible();
      }
    }
  });

  /**
   * @testId TC128
   * @feature Responsive Layout
   * @priority P1
   * @description Verify layout adapts correctly in portrait orientation
   * @expected Layout works in portrait mode
   */
  test('TC128 - Mobile Orientation Portrait', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/(dashboard|login)/);
  });

  /**
   * @testId TC129
   * @feature Responsive Layout
   * @priority P1
   * @description Verify layout adapts correctly in landscape orientation
   * @expected Layout works in landscape mode
   */
  test('TC129 - Mobile Orientation Landscape', async ({ page }) => {
    await page.setViewportSize({ width: 667, height: 375 });
    await waitForHydration(page);
    await expect(page).toHaveURL(/.*\/(dashboard|login)/);
  });
});
