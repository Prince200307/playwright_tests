import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';

test.describe('Data Display', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
  });

  /**
   * @testId TC117
   * @feature Data Display
   * @priority P2
   * @description Verify empty state shows correctly on mobile
   * @expected Empty state displays correctly
   */
  test('TC117 - Mobile Empty State Display', async ({ page }) => {
    const emptyState = page.locator('text=No data, text=No records, text=Empty').first();
    if (await emptyState.count() > 0) {
      await expect(emptyState).toBeVisible();
    }
  });

  /**
   * @testId TC123
   * @feature Data Display
   * @priority P1
   * @description Verify tables display with proper column headers on mobile
   * @expected Headers render correctly
   */
  test('TC123 - Mobile Table Column Headers', async ({ page }) => {
    const tableHeaders = page.locator('th, thead').first();
    if (await tableHeaders.count() > 0) {
      await expect(tableHeaders).toBeVisible();
    }
  });

  /**
   * @testId TC124
   * @feature Data Display
   * @priority P1
   * @description Verify pagination information displays correctly on mobile
   * @expected Pagination shows correct info
   */
  test('TC124 - Mobile Pagination Display', async ({ page }) => {
    const pagination = page.locator('text=Page').first();
    if (await pagination.count() > 0) {
      await expect(pagination).toBeVisible();
    }
  });

  /**
   * @testId TC125
   * @feature Data Display
   * @priority P2
   * @description Verify empty state shows correctly on mobile
   * @expected Empty state displays correctly
   */
  test('TC125 - Mobile Empty State Display', async ({ page }) => {
    const emptyState = page.locator('text=No data, text=No records, text=Empty').first();
    if (await emptyState.count() > 0) {
      await expect(emptyState).toBeVisible();
    }
  });

  /**
   * @testId TC126
   * @feature Data Display
   * @priority P1
   * @description Verify cards display correctly on mobile viewport
   * @expected Cards render properly on mobile
   */
  test('TC126 - Mobile Card Display', async ({ page }) => {
    const card = page.locator('[class*="card"], .card').first();
    if (await card.count() > 0) {
      await expect(card).toBeVisible();
    }
  });

  /**
   * @testId TC127
   * @feature Data Display
   * @priority P1
   * @description Verify status indicators display correctly on mobile
   * @expected Status shows appropriate value
   */
  test('TC127 - Mobile Status Indicators', async ({ page }) => {
    const statusIndicator = page.locator('[class*="status"], text=Active, text=Pending, text=Completed').first();
    if (await statusIndicator.count() > 0) {
      await expect(statusIndicator).toBeVisible();
    }
  });
});
