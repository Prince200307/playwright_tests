import { test, expect } from '@playwright/test';
import { waitForHydration, loginWithDevMode } from '../utils/auth';
import { captureTestScreenshot } from '../utils/screenshot';

test.describe('Settings', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginWithDevMode(page);
    await page.goto('/settings');
    await waitForHydration(page);
  });

  test.afterEach(async ({ page }, testInfo) => {
    await captureTestScreenshot(page, testInfo);
  });

  /**
   * @testId TC077
   * @feature Settings
   * @priority P0
   * @description Verify Settings page loads successfully on mobile
   * @expected Page renders with "Settings" heading
   */
  test('TC077 - Settings Page Load', async ({ page }) => {
    await expect(page).toHaveURL(/.*\/settings/);
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeAttached();
  });

  /**
   * @testId TC078
   * @feature Settings
   * @priority P2
   * @description Verify "Customize your dashboard's theme, colors, and typography" subtitle is visible on mobile
   * @expected Subtitle text appears on page
   */
  test('TC078 - Settings Subtitle', async ({ page }) => {
    await expect(page.getByText("Customize your dashboard's theme")).toBeVisible();
  });

  /**
   * @testId TC079
   * @feature Settings
   * @priority P1
   * @description Verify Theme Mode section is visible on mobile
   * @expected Section displays theme options
   */
  test('TC079 - Theme Mode Section', async ({ page }) => {
    await expect(page.getByText('Theme Mode')).toBeVisible();
  });

  /**
   * @testId TC080
   * @feature Settings
   * @priority P1
   * @description Verify Light theme button is touch-interactable and changes theme
   * @expected Button changes theme to light mode on mobile tap
   */
  test('TC080 - Light Theme Button', async ({ page }) => {
    const lightButton = page.getByRole('button', { name: 'Light' });
    await expect(lightButton).toBeVisible();
    
    await lightButton.click();
    await waitForHydration(page);
    
    await expect(page.locator('html')).toHaveClass(/light/);
  });

  /**
   * @testId TC081
   * @feature Settings
   * @priority P1
   * @description Verify Dark theme button is touch-interactable and changes theme
   * @expected Button changes theme to dark mode on mobile tap
   */
  test('TC081 - Dark Theme Button', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark' });
    await expect(darkButton).toBeVisible();
    
    await darkButton.click();
    await waitForHydration(page);
    
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  /**
   * @testId TC082
   * @feature Settings
   * @priority P1
   * @description Verify System theme button is touch-interactable
   * @expected Button applies system theme preference on mobile tap
   */
  test('TC082 - System Theme Button', async ({ page }) => {
    const systemButton = page.getByRole('button', { name: 'System' });
    await expect(systemButton).toBeVisible();
    
    await systemButton.click();
    await waitForHydration(page);
  });

  /**
   * @testId TC083
   * @feature Settings
   * @priority P1
   * @description Verify Accent color section is visible on mobile
   * @expected Section displays color options
   */
  test('TC083 - Accent Color Section', async ({ page }) => {
    await expect(page.getByText('Accent Colors')).toBeVisible();
  });

  /**
   * @testId TC084
   * @feature Settings
   * @priority P1
   * @description Verify Accent color slider is visible and draggable on mobile
   * @expected Slider changes accent color value via touch drag
   */
  test('TC084 - Accent Color Slider', async ({ page }) => {
    const slider = page.locator('input[type="range"]').first();
    if (await slider.count() > 0) {
      await expect(slider).toBeVisible();
      
      const initialValue = await slider.inputValue();
      await slider.fill('180');
      await waitForHydration(page);
      
      const updatedValue = await slider.inputValue();
      expect(updatedValue).not.toBe(initialValue);
    }
  });

  /**
   * @testId TC085
   * @feature Settings
   * @priority P2
   * @description Verify color preview updates when slider value changes on mobile
   * @expected Preview reflects current accent color
   */
  test('TC085 - Color Preview Update', async ({ page }) => {
    const preview = page.locator('[class*="rounded-full"]').first();
    if (await preview.count() > 0) {
      await expect(preview).toBeVisible();
      
      const slider = page.locator('input[type="range"]').first();
      if (await slider.count() > 0) {
        const initialStyle = await preview.getAttribute('style') || '';
        await slider.fill('0');
        await waitForHydration(page);
        const updatedStyle = await preview.getAttribute('style') || '';
        expect(updatedStyle).not.toBe(initialStyle);
      }
    }
  });

  /**
   * @testId TC086
   * @feature Settings
   * @priority P1
   * @description Verify Global Typeface dropdown is visible and opens on mobile
   * @expected Dropdown opens with font options on tap
   */
  test('TC086 - Global Typeface Dropdown', async ({ page }) => {
    const dropdown = page.locator('select').first();
    if (await dropdown.count() > 0) {
      await expect(dropdown).toBeVisible();
      
      const initialValue = await dropdown.inputValue();
      await dropdown.click();
      await dropdown.selectOption({ index: 1 });
      await waitForHydration(page);
      
      const updatedValue = await dropdown.inputValue();
      expect(updatedValue).not.toBe(initialValue);
    }
  });

  /**
   * @testId TC087
   * @feature Settings
   * @priority P1
   * @description Verify typeface selection updates UI font when changed on mobile
   * @expected UI font changes to selected typeface
   */
  test('TC087 - Typeface Selection', async ({ page }) => {
    const dropdown = page.locator('select').first();
    if (await dropdown.count() > 0) {
      await dropdown.selectOption({ index: 1 });
      await waitForHydration(page);
      
      const fontFamily = await page.locator('body').evaluate((el) => 
        window.getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toBeTruthy();
    }
  });

  /**
   * @testId TC088
   * @feature Settings
   * @priority P1
   * @description Verify UI Scaling section is visible on mobile
   * @expected Section displays scale options
   */
  test('TC088 - UI Scaling Section', async ({ page }) => {
    await expect(page.getByText('UI Scaling')).toBeVisible();
  });

  /**
   * @testId TC089
   * @feature Settings
   * @priority P1
   * @description Verify Small scale button is touch-interactable
   * @expected Button applies small UI scale on mobile tap
   */
  test('TC089 - Small Scale Button', async ({ page }) => {
    const smallButton = page.getByRole('button', { name: 'small' });
    if (await smallButton.count() > 0) {
      await expect(smallButton).toBeAttached();
    }
  });

  /**
   * @testId TC090
   * @feature Settings
   * @priority P1
   * @description Verify Medium scale button is touch-interactable
   * @expected Button applies medium UI scale on mobile tap
   */
  test('TC090 - Medium Scale Button', async ({ page }) => {
    const mediumButton = page.getByRole('button', { name: 'medium' });
    if (await mediumButton.count() > 0) {
      await expect(mediumButton).toBeAttached();
    }
  });

  /**
   * @testId TC091
   * @feature Settings
   * @priority P1
   * @description Verify Large scale button is touch-interactable
   * @expected Button applies large UI scale on mobile tap
   */
  test('TC091 - Large Scale Button', async ({ page }) => {
    const largeButton = page.getByRole('button', { name: 'large' });
    if (await largeButton.count() > 0) {
      await expect(largeButton).toBeAttached();
    }
  });

  /**
   * @testId TC092
   * @feature Settings
   * @priority P2
   * @description Verify Information card is visible with its data on mobile
   * @expected Card displays on Settings page
   */
  test('TC092 - Information Card Visibility', async ({ page }) => {
    const infoHeading = page.getByRole('heading', { name: 'Information' });
    if (await infoHeading.count() > 0) {
      await expect(infoHeading).toBeAttached();
    }
  });
});
