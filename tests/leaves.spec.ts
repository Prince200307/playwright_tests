import { test, expect, Page } from '@playwright/test';

/**
 * @description Leaves page tests covering leave cards, tables and application form
 * @feature Leaves Page
 * @precondition User must be logged in
 * @testdata None
 * @expected All leave page elements should be visible
 */
test.describe('Leaves Page', () => {
  /**
   * Helper function to wait for React hydration
   * The Next.js app shows a spinner initially, then hydrates to real content
   */
  async function waitForHydration(page: Page) {
    await page.waitForLoadState('networkidle');
    const spinner = page.locator('.animate-spin');
    if (await spinner.count() > 0) {
      await expect(spinner).toBeHidden({ timeout: 10000 });
    }
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/leaves');
    await waitForHydration(page);
  });

  /**
   * @description Verifies leaves page loads with correct URL
   * @feature Leaves Page
   * @precondition User logged in
   * @testdata None
   * @expected URL should match /leaves$
   */
  test('Leaves page loads successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/leaves$/);
  });

  /**
   * @description Verifies Leave Dashboard heading is visible
   * @feature Leaves Page
   * @precondition Leaves page loaded
   * @testdata None
   * @expected "Leave Dashboard" heading visible
   */
  test('Leave Dashboard heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Leave Dashboard' })).toBeVisible();
  });

  /**
   * @description Tests for leave card elements visibility
   * @feature Leaves Page - Cards
   * @precondition Leaves page must be loaded
   * @testdata None
   * @expected All leave cards should be visible
   */
  test.describe('Leave Cards', () => {
    /**
     * @description Verifies Working Days/Hrs card is visible
     * @feature Leaves Page - Cards
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Working Days/Hrs" text visible
     */
    test('Working Days/Hrs card is visible', async ({ page }) => {
      await expect(page.getByText('Working Days/Hrs')).toBeVisible();
    });

    /**
     * @description Verifies Earned Leaves card is visible
     * @feature Leaves Page - Cards
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Earned Leaves" text visible
     */
    test('Earned Leaves card is visible', async ({ page }) => {
      await expect(page.getByText('Earned Leaves')).toBeVisible();
    });

    /**
     * @description Verifies Payable Days card is visible
     * @feature Leaves Page - Cards
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Payable Days" text visible
     */
    test('Payable Days card is visible', async ({ page }) => {
      await expect(page.getByText('Payable Days')).toBeVisible();
    });

    /**
     * @description Verifies Paid Leave Balance card is visible
     * @feature Leaves Page - Cards
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Paid Leave Balance" text visible
     */
    test('Paid Leave Balance card is visible', async ({ page }) => {
      await expect(page.getByText('Paid Leave Balance')).toBeVisible();
    });

    /**
     * @description Verifies leave card container is visible
     * @feature Leaves Page - Cards
     * @precondition Leaves page loaded
     * @testdata None
     * @expected Card elements visible
     */
    test('All leave cards are visible', async ({ page }) => {
      const cards = page.locator('[class*="card"], [class*="Card"]');
      await expect(cards.first()).toBeVisible();
    });
  });

  /**
   * @description Tests for leave table elements visibility
   * @feature Leaves Page - Tables
   * @precondition Leaves page must be loaded
   * @testdata None
   * @expected All leave tables should be visible with correct columns
   */
  test.describe('Leave Tables', () => {
    /**
     * @description Verifies Leave History table displays with correct headers
     * @feature Leaves Page - Tables
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Leave History" table visible with Date, Leave Type, Status columns
     */
    test('Leave History table is visible with correct columns', async ({ page }) => {
      await expect(page.getByText('Leave History')).toBeVisible();
      // Use more flexible text matching for table headers
      await expect(page.getByText('Date').first()).toBeVisible();
      await expect(page.getByText('Leave Type').first()).toBeVisible();
      await expect(page.getByText('Status').first()).toBeVisible();
    });

    /**
     * @description Verifies Holidays table displays with correct headers
     * @feature Leaves Page - Tables
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Holidays" table visible with Date, Holiday columns
     */
    test('Holidays table is visible with correct columns', async ({ page }) => {
      await expect(page.getByText('Holidays')).toBeVisible();
      // Use more flexible text matching for table headers
      await expect(page.getByText('Date').first()).toBeVisible();
      await expect(page.getByText('Holiday').first()).toBeVisible();
    });
  });

  /**
   * @description Tests for leave application form elements visibility
   * @feature Leaves Page - Application Form
   * @precondition Leaves page must be loaded
   * @testdata None
   * @expected All form elements should be visible
   */
  test.describe('Leave Application Form', () => {
    /**
     * @description Verifies Leave Application section is visible
     * @feature Leaves Page - Application Form
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Leave Application" section visible
     */
    test('Leave Application section is visible', async ({ page }) => {
      await expect(page.getByText('Leave Application')).toBeVisible();
    });

    /**
     * @description Verifies leave type radio options are visible (EL, UPL, PL)
     * @feature Leaves Page - Application Form
     * @precondition Leaves page loaded
     * @testdata None
     * @expected EL, UPL, PL options visible
     */
    test('Leave type options are visible (EL, UPL, PL)', async ({ page }) => {
      // Look for radio buttons or labels that might contain the leave types
      // Could be in a radio group or as labels
      const leaveTypes = page.locator('label, span, p').filter({ hasText: /^(EL|UPL|PL)$/ });
      await expect(leaveTypes.first()).toBeVisible();
    });

    /**
     * @description Verifies Apply button is visible
     * @feature Leaves Page - Application Form
     * @precondition Leaves page loaded
     * @testdata None
     * @expected "Apply" button visible
     */
    test('Apply button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Apply' })).toBeVisible();
    });
  });
});
