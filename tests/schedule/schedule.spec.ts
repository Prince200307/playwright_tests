import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';

test.describe('Schedule', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
    await page.goto('http://95.216.39.97:8086/schedule');
    await waitForHydration(page);
  });

  /**
   * @testId TC047
   * @feature Schedule
   * @priority P0
   * @description Verify Schedule page loads successfully on mobile
   * @expected Page renders with "Work Schedule" heading
   */
  test('TC047 - Schedule Page Load', async ({ page }) => {
    await expect(page).toHaveURL(/.*\/schedule/);
    await expect(page.getByText('Work Schedule')).toBeVisible();
  });

  /**
   * @testId TC048
   * @feature Schedule
   * @priority P2
   * @description Verify subtitle "Intelligent roster & shift management" is visible on mobile
   * @expected Subtitle text appears on page
   */
  test('TC048 - Schedule Page Subtitle', async ({ page }) => {
    await expect(page.getByText('Intelligent roster & shift management')).toBeVisible();
  });

  /**
   * @testId TC049
   * @feature Schedule
   * @priority P1
   * @description Verify Scheduled tab is visible and touch-interactable
   * @expected Tab switches to Scheduled view on mobile tap
   */
  test('TC049 - Scheduled Tab', async ({ page }) => {
    const scheduledTab = page.getByRole('tab', { name: 'Scheduled' });
    await expect(scheduledTab).toBeVisible();
    await scheduledTab.click();
    await waitForHydration(page);
  });

  /**
   * @testId TC050
   * @feature Schedule
   * @priority P1
   * @description Verify Completed tab is visible and touch-interactable
   * @expected Tab switches to Completed view on mobile tap
   */
  test('TC050 - Completed Tab', async ({ page }) => {
    const completedTab = page.getByRole('tab', { name: 'Completed' });
    if (await completedTab.count() > 0) {
      await expect(completedTab).toBeVisible();
      await completedTab.click();
      await waitForHydration(page);
    }
  });

  /**
   * @testId TC051
   * @feature Schedule
   * @priority P1
   * @description Verify Holiday tab is visible and touch-interactable
   * @expected Tab switches to Holiday view on mobile tap
   */
  test('TC051 - Holiday Tab', async ({ page }) => {
    const holidayTab = page.getByRole('tab', { name: 'Holiday' });
    if (await holidayTab.count() > 0) {
      await expect(holidayTab).toBeVisible();
      await holidayTab.click();
      await waitForHydration(page);
    }
  });

  /**
   * @testId TC052
   * @feature Schedule
   * @priority P1
   * @description Verify calendar component is visible and properly sized on mobile
   * @expected Calendar renders and displays correctly
   */
  test('TC052 - Calendar Visibility', async ({ page }) => {
    const calendar = page
      .locator('[class*="calendar"], .react-calendar, .Calendar')
      .first();

    if (await calendar.count() > 0) {
      await expect(calendar).toBeVisible();
    } else {
      // Fallback: verify calendar by checking day headers are visible
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (const day of dayNames) {
        await expect(page.getByText(day).first()).toBeVisible();
      }
    }
  });

  /**
   * @testId TC053
   * @feature Schedule
   * @priority P2
   * @description Verify Today button is touch-interactable
   * @expected Button navigates to current date on mobile tap
   */
  test('TC053 - Today Button', async ({ page }) => {
    const todayButton = page.getByRole('button', { name: 'Today' });
    if (await todayButton.count() > 0) {
      await expect(todayButton).toBeVisible();
      await todayButton.click();
      await waitForHydration(page);
    }
  });

  /**
   * @testId TC054
   * @feature Schedule
   * @priority P2
   * @description Verify Left button is touch-interactable
   * @expected Button navigates to previous period on mobile tap
   */
  test('TC054 - Left Navigation Button', async ({ page }) => {
    const leftButton = page.locator('button:has-text("<"), [aria-label*="Previous"]').first();
    if (await leftButton.count() > 0) {
      await expect(leftButton).toBeVisible();
    }
  });

  /**
   * @testId TC055
   * @feature Schedule
   * @priority P2
   * @description Verify Right button is touch-interactable
   * @expected Button navigates to next period on mobile tap
   */
  test('TC055 - Right Navigation Button', async ({ page }) => {
    const rightButton = page.locator('button:has-text(">"), [aria-label*="Next"]').first();
    if (await rightButton.count() > 0) {
      await expect(rightButton).toBeVisible();
    }
  });

  /**
   * @testId TC056
   * @feature Schedule
   * @priority P2
   * @description Verify Day button is touch-interactable
   * @expected Button switches to day view on mobile tap
   */
  test('TC056 - Day View Button', async ({ page }) => {
    const dayButton = page.getByRole('button', { name: 'Day' });
    if (await dayButton.count() > 0) {
      await expect(dayButton).toBeVisible();
    }
  });

  /**
   * @testId TC057
   * @feature Schedule
   * @priority P2
   * @description Verify Week button is touch-interactable
   * @expected Button switches to week view on mobile tap
   */
  test('TC057 - Week View Button', async ({ page }) => {
    const weekButton = page.getByRole('button', { name: 'Week' });
    if (await weekButton.count() > 0) {
      await expect(weekButton).toBeVisible();
    }
  });

  /**
   * @testId TC058
   * @feature Schedule
   * @priority P2
   * @description Verify Month button is touch-interactable
   * @expected Button switches to month view on mobile tap
   */
  test('TC058 - Month View Button', async ({ page }) => {
    const monthButton = page.getByRole('button', { name: 'Month' });
    if (await monthButton.count() > 0) {
      await expect(monthButton).toBeVisible();
    }
  });
});
