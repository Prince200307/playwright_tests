import { test, expect, Page } from '@playwright/test';

/**
 * @description Dashboard page tests covering UI elements, cards, tables and action buttons
 * @feature Dashboard Page
 * @precondition User must be logged in and dashboard must be accessible
 * @testdata None - uses existing authenticated session
 * @expected All dashboard elements should be visible and navigation should work
 */
test.describe('Dashboard Page', () => {
  /**
   * Helper function to wait for React hydration
   * The Next.js app shows a spinner initially, then hydrates to real content
   */
  async function waitForHydration(page: Page) {
    await page.waitForLoadState('networkidle');
    // Wait for loading spinner to be hidden if present
    const spinner = page.locator('.animate-spin');
    if (await spinner.count() > 0) {
      await expect(spinner).toBeHidden({ timeout: 10000 });
    }
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
    await waitForHydration(page);
  });

  test('Dashboard page loads successfully', async ({ page }) => {
    /**
     * @description Verifies dashboard page loads with correct URL
     * @feature Dashboard Page
     * @precondition User must be logged in
     * @testdata None
     * @expected URL should match /dashboard$ pattern
     */
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  /**
   * @description Tests for dashboard card elements visibility
   * @feature Dashboard Page - Cards
   * @precondition Dashboard page must be loaded
   * @testdata None
   * @expected All card elements should be visible with their buttons
   */
  test.describe('Dashboard Cards', () => {
    /**
     * @description Verifies Current Shift card and Start Shift button are visible
     * @feature Dashboard Page - Cards
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Current Shift" heading, "Yet To Start" text, and "Start Shift" button visible
     */
    test('Current Shift card is visible with Start Shift button', async ({ page }) => {
      // Current Shift card contains "Yet To Start" text and "Start Shift" button
      await expect(page.getByText('Current Shift')).toBeVisible();
      await expect(page.getByText('Yet To Start')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Start Shift' })).toBeVisible();
    });

    /**
     * @description Verifies Shift Duration card and End Shift button are visible
     * @feature Dashboard Page - Cards
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Shift Duration" heading, "00:00:00" text, and "End Shift" button visible
     */
    test('Shift Duration card is visible with End Shift button', async ({ page }) => {
      // Shift Duration card contains "00:00:00" text and "End Shift" button
      await expect(page.getByText('Shift Duration')).toBeVisible();
      await expect(page.getByText('00:00:00')).toBeVisible();
      await expect(page.getByRole('button', { name: 'End Shift' })).toBeVisible();
    });

    /**
     * @description Verifies Current Location card and Update Location button are visible
     * @feature Dashboard Page - Cards
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Current Location" text and "Update Location" button visible
     */
    test('Current Location card is visible with Update Location button', async ({ page }) => {
      await expect(page.getByText('Current Location')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Update Location' })).toBeVisible();
    });

    /**
     * @description Verifies Hours Remaining card and View Roster button are visible
     * @feature Dashboard Page - Cards
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Hours Remaining" text and "View Roster" button visible
     */
    test('Hours Remaining card is visible with View Roster button', async ({ page }) => {
      await expect(page.getByText('Hours Remaining')).toBeVisible();
      await expect(page.getByRole('button', { name: 'View Roster' })).toBeVisible();
    });
  });

  /**
   * @description Tests for dashboard table elements visibility
   * @feature Dashboard Page - Tables
   * @precondition Dashboard page must be loaded
   * @testdata None
   * @expected All table elements should be visible with correct columns
   */
  test.describe('Dashboard Tables', () => {
    /**
     * @description Verifies Open Incidents table displays with correct headers
     * @feature Dashboard Page - Tables
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Open Incidents" table visible with Time, Description, Priority columns
     */
    test('Open Incidents table is visible with correct columns', async ({ page }) => {
      await expect(page.getByText('Open Incidents')).toBeVisible();
      // Use more flexible text matching for table headers
      await expect(page.getByText('Time').first()).toBeVisible();
      await expect(page.getByText('Description').first()).toBeVisible();
      await expect(page.getByText('Priority').first()).toBeVisible();
    });

    /**
     * @description Verifies Recent Recordings table displays with correct headers
     * @feature Dashboard Page - Tables
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected "Recent Recordings" table visible with Time, File Name, Play columns
     */
    test('Recent Recordings table is visible with correct columns', async ({ page }) => {
      await expect(page.getByText('Recent Recordings')).toBeVisible();
      // Use more flexible text matching for table headers
      await expect(page.getByText('Time').first()).toBeVisible();
      await expect(page.getByText('File Name').first()).toBeVisible();
      await expect(page.getByText('Play').first()).toBeVisible();
    });
  });

  /**
   * @description Tests for dashboard action button visibility
   * @feature Dashboard Page - Action Buttons
   * @precondition Dashboard page must be loaded
   * @testdata None
   * @expected All action buttons should be visible
   */
  test.describe('Dashboard Action Buttons', () => {
    /**
     * @description Verifies record button is visible on dashboard
     * @feature Dashboard Page - Action Buttons
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Record button visible
     */
    test('Record button is visible', async ({ page }) => {
      // Record button is a red circular button
      const recordButton = page.locator('button').filter({ has: page.locator('.lucide-microphone, [class*="rounded-full"][class*="bg-red"]') })
        .or(page.getByRole('button', { name: /record/i }));
      await expect(recordButton.first()).toBeVisible();
    });

    /**
     * @description Verifies upload button is visible on dashboard
     * @feature Dashboard Page - Action Buttons
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Upload button visible
     */
    test('Upload button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: /upload/i }).first()).toBeVisible();
    });

    /**
     * @description Verifies delete button is visible on dashboard
     * @feature Dashboard Page - Action Buttons
     * @precondition Dashboard page loaded
     * @testdata None
     * @expected Delete button visible
     */
    test('Delete button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: /delete/i }).first()).toBeVisible();
    });
  });
});
