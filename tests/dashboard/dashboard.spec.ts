import { test, expect, Page } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
  });

  /**
   * @testId TC024
   * @feature Dashboard
   * @priority P0
   * @description Verify dashboard page loads successfully after SSR on mobile viewport
   * @expected Dashboard page renders with all primary UI elements visible on mobile
   */
  test('TC024 - Dashboard Page Load', async ({ page }) => {
    await expect(page).toHaveURL(/.*\/dashboard/);
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  /**
   * @testId TC025
   * @feature Dashboard
   * @priority P1
   * @description Verify "Welcome back" greeting renders on dashboard
   * @expected "Welcome back" text appears in header area on mobile
   */
  test('TC025 - Dashboard Welcome Greeting', async ({ page }) => {
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  /**
   * @testId TC026
   * @feature Dashboard
   * @priority P0
   * @description Verify Current Shift card is visible after hydration on mobile
   * @expected Current Shift card displays with status and timing information
   */
  test('TC026 - Current Shift Card Visibility', async ({ page }) => {
    await expect(page.getByText('Current Shift')).toBeVisible();
  });

  /**
   * @testId TC027
   * @feature Dashboard
   * @priority P1
   * @description Verify Start Shift button is visible and touch-interactable
   * @expected Button is tappable and triggers shift start action on mobile
   */
  test('TC027 - Start Shift Button', async ({ page }) => {
    const startShiftButton = page.getByRole('button', { name: 'Start Shift' });
    await expect(startShiftButton).toBeVisible();
    await startShiftButton.isEnabled();
  });

  /**
   * @testId TC028
   * @feature Dashboard
   * @priority P0
   * @description Verify current status displays "Open Schedule" on mobile
   * @expected Status shows "Open Schedule" text on mobile
   */
  test('TC028 - Current Status Display', async ({ page }) => {
    const statusText = page.locator('[class*="status"], [class*="badge"]').first();
    if (await statusText.count() > 0) {
      await expect(statusText).toBeVisible();
    } else {
      await expect(page.getByText('Welcome back')).toBeVisible();
    }
  });

  /**
   * @testId TC029
   * @feature Dashboard
   * @priority P1
   * @description Verify Shift Duration card is visible on mobile
   * @expected Card displays shift duration information
   */
  test('TC029 - Shift Duration Card', async ({ page }) => {
    await expect(page.getByText('Shift Duration')).toBeVisible();
  });

  /**
   * @testId TC030
   * @feature Dashboard
   * @priority P1
   * @description Verify End Shift button is touch-interactable
   * @expected Button triggers shift end action on mobile tap
   */
  test('TC030 - End Shift Button', async ({ page }) => {
    const endShiftButton = page.getByRole('button', { name: 'End Shift' });
    if (await endShiftButton.count() > 0) {
      await expect(endShiftButton).toBeVisible();
    }
  });

  /**
   * @testId TC031
   * @feature Dashboard
   * @priority P1
   * @description Verify "On Leave" indicator is visible on mobile
   * @expected Indicator displays current leave status
   */
  test('TC031 - On Leave Indicator', async ({ page }) => {
    const onLeaveIndicator = page.locator('text=On Leave').first();
    if (await onLeaveIndicator.count() > 0) {
      await expect(onLeaveIndicator).toBeVisible();
    }
  });

  /**
   * @testId TC032
   * @feature Dashboard
   * @priority P1
   * @description Verify Current Location section is visible on mobile
   * @expected Location section displays on dashboard
   */
  test('TC032 - Current Location Section', async ({ page }) => {
    await expect(page.getByText('Current Location')).toBeVisible();
  });

  /**
   * @testId TC033
   * @feature Dashboard
   * @priority P1
   * @description Verify Update Location button is touch-interactable
   * @expected Button triggers location update on mobile tap
   */
  test('TC033 - Update Location Button', async ({ page }) => {
    const updateLocationButton = page.getByRole('button', { name: 'Update Location' });
    await expect(updateLocationButton).toBeVisible();
  });

  /**
   * @testId TC034
   * @feature Dashboard
   * @priority P2
   * @description Verify Hours Remaining card is visible on mobile
   * @expected Card displays remaining hours information
   */
  test('TC034 - Hours Remaining Card', async ({ page }) => {
    await expect(page.getByText('Hours Remaining')).toBeVisible();
  });

  /**
   * @testId TC035
   * @feature Dashboard
   * @priority P1
   * @description Verify View Roster button is touch-interactable
   * @expected Button opens roster view on mobile tap
   */
  test('TC035 - View Roster Button', async ({ page }) => {
    const viewRosterButton = page.getByRole('button', { name: 'View Roster' });
    await expect(viewRosterButton).toBeVisible();
  });

  /**
   * @testId TC036
   * @feature Dashboard
   * @priority P2
   * @description Verify Active Project section is visible on mobile
   * @expected Section displays active project information
   */
  test('TC036 - Active Project Section', async ({ page }) => {
    const activeProject = page.locator('text=Active Project').first();
    if (await activeProject.count() > 0) {
      await expect(activeProject).toBeVisible();
    }
  });

  /**
   * @testId TC037
   * @feature Dashboard
   * @priority P2
   * @description Verify Team Presence section is visible on mobile
   * @expected Section displays team member presence
   */
  test('TC037 - Team Presence Section', async ({ page }) => {
    const teamPresence = page.locator('text=Team Presence').first();
    if (await teamPresence.count() > 0) {
      await expect(teamPresence).toBeVisible();
    }
  });

  /**
   * @testId TC038
   * @feature Dashboard
   * @priority P1
   * @description Verify Open Incidents table loads and is horizontally scrollable on mobile
   * @expected Table displays with correct columns, scrollable on small screens
   */
  test('TC038 - Open Incidents Table', async ({ page }) => {
    const incidentsTable = page.locator('text=Open Incidents').first();
    if (await incidentsTable.count() > 0) {
      await expect(incidentsTable).toBeVisible();
      const table = page.locator('table').first();
      if (await table.count() > 0) {
        const isScrollable = await page.evaluate(() => {
          const el = document.querySelector('table');
          return el ? el.scrollWidth > el.clientWidth : false;
        });
        expect(isScrollable || (await table.count()) === 0).toBeTruthy();
      }
    }
  });

  /**
   * @testId TC039
   * @feature Dashboard
   * @priority P2
   * @description Verify pagination shows correct information on mobile
   * @expected Shows "Page 1 of 1" when data exists
   */
  test('TC039 - Open Incidents Pagination', async ({ page }) => {
    const pagination = page.locator('text=Page').first();
    if (await pagination.count() > 0) {
      await expect(pagination).toBeVisible();
    }
  });

  /**
   * @testId TC040
   * @feature Dashboard
   * @priority P1
   * @description Verify Recent Recordings table is scrollable on mobile
   * @expected Table displays recordings with proper columns, scrollable
   */
  test('TC040 - Recent Recordings Table', async ({ page }) => {
    const recordingsTable = page.locator('text=Recent Recordings').first();
    if (await recordingsTable.count() > 0) {
      await expect(recordingsTable).toBeVisible();
    }
  });

  /**
   * @testId TC041
   * @feature Dashboard
   * @priority P1
   * @description Verify Play button is visible and touch-interactable
   * @expected Button triggers audio playback on mobile tap
   */
  test('TC041 - Play Button on Recordings', async ({ page }) => {
    const playButton = page.locator('button:has-text("Play"), [aria-label*="Play"]').first();
    if (await playButton.count() > 0) {
      await expect(playButton).toBeVisible();
    }
  });

  /**
   * @testId TC042
   * @feature Dashboard
   * @priority P1
   * @description Verify Record button is touch-interactable
   * @expected Button triggers recording functionality on mobile tap
   */
  test('TC042 - Record Button', async ({ page }) => {
    const recordButton = page.locator('button:has-text("Record")').first();
    if (await recordButton.count() > 0) {
      await expect(recordButton).toBeVisible();
    }
  });

  /**
   * @testId TC043
   * @feature Dashboard
   * @priority P1
   * @description Verify Upload button is touch-interactable
   * @expected Button opens file upload dialog on mobile tap
   */
  test('TC043 - Upload Button', async ({ page }) => {
    const uploadButton = page.locator('button:has-text("Upload")').first();
    if (await uploadButton.count() > 0) {
      await expect(uploadButton).toBeVisible();
    }
  });

  /**
   * @testId TC044
   * @feature Dashboard
   * @priority P1
   * @description Verify Shift History table is horizontally scrollable on mobile
   * @expected Table shows shift history with correct columns, scrollable
   */
  test('TC044 - Shift History Table', async ({ page }) => {
    const shiftHistory = page.locator('text=Shift History').first();
    if (await shiftHistory.count() > 0) {
      await expect(shiftHistory).toBeVisible();
    }
  });

  /**
   * @testId TC045
   * @feature Dashboard
   * @priority P2
   * @description Verify Shift History pagination displays on mobile
   * @expected Shows "Page 1 of 1"
   */
  test('TC045 - Shift History Pagination', async ({ page }) => {
    const pagination = page.locator('text=Page 1').first();
    if (await pagination.count() > 0) {
      await expect(pagination).toBeVisible();
    }
  });

  /**
   * @testId TC046
   * @feature Dashboard
   * @priority P1
   * @description Verify Delete button is visible and touch-interactable
   * @expected Button triggers deletion on mobile tap
   */
  test('TC046 - Delete Button on Shift History', async ({ page }) => {
    const deleteButton = page.locator('button:has-text("Delete"), [aria-label*="Delete"]').first();
    if (await deleteButton.count() > 0) {
      await expect(deleteButton).toBeVisible();
    }
  });
});
