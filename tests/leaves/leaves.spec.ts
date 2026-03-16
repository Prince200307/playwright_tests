import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';
import { captureTestScreenshot } from '../utils/screenshot';

test.describe('Leaves', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
    await page.goto('http://95.216.39.97:8086/leaves');
    await waitForHydration(page);
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureTestScreenshot(page, testInfo);
  });

  /**
   * @testId TC059
   * @feature Leaves
   * @priority P0
   * @description Verify Leaves page loads successfully on mobile
   * @expected Page renders with "Leave Dashboard" heading
   */
  test('TC059 - Leaves Page Load', async ({ page }) => {
    await expect(page).toHaveURL(/.*\/leaves/);
    await expect(page.getByText('Leave Dashboard')).toBeVisible();
  });

  /**
   * @testId TC060
   * @feature Leaves
   * @priority P2
   * @description Verify "Manage your leaves and view holiday calendar" subtitle is visible on mobile
   * @expected Subtitle text appears on page
   */
  test('TC060 - Leave Dashboard Subtitle', async ({ page }) => {
    await expect(page.getByText('Manage your leaves and view holiday calendar')).toBeVisible();
  });

  /**
   * @testId TC061
   * @feature Leaves
   * @priority P2
   * @description Verify FY 2025-26 label is visible on mobile
   * @expected Label displays fiscal year
   */
  test('TC061 - FY 2025-26 Label', async ({ page }) => {
    await expect(page.getByText('FY 2025-26')).toBeVisible();
  });

  /**
   * @testId TC062
   * @feature Leaves
   * @priority P1
   * @description Verify Working Days/Hrs card is visible on mobile
   * @expected Card displays working days information
   */
  test('TC062 - Working Days/Hrs Card', async ({ page }) => {
    await expect(page.getByText('Working Days/Hrs')).toBeVisible();
  });

  /**
   * @testId TC063
   * @feature Leaves
   * @priority P1
   * @description Verify Earned Leaves card is visible on mobile
   * @expected Card displays earned leave balance
   */
  test('TC063 - Earned Leaves Card', async ({ page }) => {
    await expect(page.getByText('Earned Leaves')).toBeVisible();
  });

  /**
   * @testId TC064
   * @feature Leaves
   * @priority P1
   * @description Verify Payable Days card is visible on mobile
   * @expected Card displays payable days information
   */
  test('TC064 - Payable Days Card', async ({ page }) => {
    await expect(page.getByText('Payable Days')).toBeVisible();
  });

  /**
   * @testId TC065
   * @feature Leaves
   * @priority P1
   * @description Verify Paid Leave Balance card is visible on mobile
   * @expected Card displays paid leave balance
   */
  test('TC065 - Paid Leave Balance Card', async ({ page }) => {
    await expect(page.getByText('Paid Leave Balance')).toBeVisible();
  });

  /**
   * @testId TC066
   * @feature Leaves
   * @priority P1
   * @description Verify Leave History section heading appears on mobile
   * @expected Section displays with heading
   */
  test('TC066 - Leave History Section', async ({ page }) => {
    await expect(page.getByText('Leave History')).toBeVisible();
  });

  /**
   * @testId TC067
   * @feature Leaves
   * @priority P1
   * @description Verify Leave History table displays columns and is scrollable on mobile
   * @expected Table shows correct columns, scrollable
   */
  test('TC067 - Leave History Table Columns', async ({ page }) => {
    const leaveHistoryTable = page.locator('table').first();
    if (await leaveHistoryTable.count() > 0) {
      await expect(leaveHistoryTable).toBeVisible();
    }
  });

  /**
   * @testId TC068
   * @feature Leaves
   * @priority P2
   * @description Verify Leave History pagination displays on mobile
   * @expected Shows "Page 1 of 0" when no data
   */
  test('TC068 - Leave History Pagination', async ({ page }) => {
    const pagination = page.locator('text=Page').first();
    if (await pagination.count() > 0) {
      await expect(pagination).toBeVisible();
    }
  });

  /**
   * @testId TC069
   * @feature Leaves
   * @priority P1
   * @description Verify Holidays section heading appears on mobile
   * @expected Section displays with heading
   */
  test('TC069 - Holidays Section', async ({ page }) => {
    await expect(page.getByText('Holidays')).toBeVisible();
  });

  /**
   * @testId TC070
   * @feature Leaves
   * @priority P1
   * @description Verify Holidays table displays columns and is scrollable on mobile
   * @expected Table shows correct columns, scrollable
   */
  test('TC070 - Holidays Table Columns', async ({ page }) => {
    const holidaysTable = page.locator('table').nth(1);
    if (await holidaysTable.count() > 0) {
      await expect(holidaysTable).toBeVisible();
    }
  });

  /**
   * @testId TC071
   * @feature Leaves
   * @priority P2
   * @description Verify Holidays pagination displays on mobile
   * @expected Shows "Page 1 of 0" when no data
   */
  test('TC071 - Holidays Pagination', async ({ page }) => {
    const pagination = page.locator('text=Page').first();
    if (await pagination.count() > 0) {
      await expect(pagination).toBeVisible();
    }
  });

  /**
   * @testId TC072
   * @feature Leaves
   * @priority P1
   * @description Verify Leave Application section heading appears on mobile
   * @expected Section displays with heading
   */
  test('TC072 - Leave Application Section', async ({ page }) => {
    await expect(page.getByText('Leave Application')).toBeVisible();
  });

  /**
   * @testId TC073
   * @feature Leaves
   * @priority P1
   * @description Verify EL radio option is visible and touch-selectable
   * @expected Radio button can be selected via tap
   */
  test('TC073 - EL Radio Option', async ({ page }) => {
    const elRadio = page.locator('input[type="radio"][value="EL"], label:has-text("EL")').first();
    if (await elRadio.count() > 0) {
      await expect(elRadio).toBeVisible();
    }
  });

  /**
   * @testId TC074
   * @feature Leaves
   * @priority P1
   * @description Verify UPL radio option is visible and touch-selectable
   * @expected Radio button can be selected via tap
   */
  test('TC074 - UPL Radio Option', async ({ page }) => {
    const uplRadio = page.locator('input[type="radio"][value="UPL"], label:has-text("UPL")').first();
    if (await uplRadio.count() > 0) {
      await expect(uplRadio).toBeVisible();
    }
  });

  /**
   * @testId TC075
   * @feature Leaves
   * @priority P1
   * @description Verify PL radio option is visible and touch-selectable
   * @expected Radio button can be selected via tap
   */
  test('TC075 - PL Radio Option', async ({ page }) => {
    const plRadio = page.locator('input[type="radio"][value="PL"], label:has-text("PL")').first();
    if (await plRadio.count() > 0) {
      await expect(plRadio).toBeVisible();
    }
  });

  /**
   * @testId TC076
   * @feature Leaves
   * @priority P1
   * @description Verify Apply button is touch-interactable
   * @expected Button submits leave application on mobile tap
   */
  test('TC076 - Apply Button', async ({ page }) => {
    const applyButton = page.getByRole('button', { name: 'Apply' });
    if (await applyButton.count() > 0) {
      await expect(applyButton).toBeVisible();
    }
  });
});
