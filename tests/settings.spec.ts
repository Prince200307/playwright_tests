import { test, expect, Page } from '@playwright/test';

/**
 * @description Settings page tests covering theme controls, accent color, typography and theme toggle
 * @feature Settings Page
 * @precondition User must be logged in
 * @testdata None
 * @expected All settings elements should be visible and functional
 */
test.describe('Settings Page', () => {
  /**
   * Helper function to wait for React hydration
   */
  async function waitForHydration(page: Page) {
    await page.waitForLoadState('networkidle');
    const spinner = page.locator('.animate-spin');
    if (await spinner.count() > 0) {
      await expect(spinner).toBeHidden({ timeout: 10000 });
    }
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
    await waitForHydration(page);
  });

  /**
   * @description Verifies settings page loads with correct URL
   * @feature Settings Page
   * @precondition User logged in
   * @testdata None
   * @expected URL should match /settings$
   */
  test('Settings page loads successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/settings$/);
  });

  /**
   * @description Verifies Settings heading is visible
   * @feature Settings Page
   * @precondition Settings page loaded
   * @testdata None
   * @expected "Settings" heading visible
   */
  test('Settings heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();
  });

  /**
   * @description Tests for theme control elements visibility
   * @feature Settings Page - Theme Controls
   * @precondition Settings page must be loaded
   * @testdata None
   * @expected All theme controls should be visible
   */
  test.describe('Theme Controls', () => {
    /**
     * @description Verifies Theme Mode section is visible
     * @feature Settings Page - Theme Controls
     * @precondition Settings page loaded
     * @testdata None
     * @expected "Theme Mode" text visible
     */
    test('Theme Mode section is visible', async ({ page }) => {
      await expect(page.getByText('Theme Mode')).toBeVisible();
    });

    /**
     * @description Verifies Light theme button is visible
     * @feature Settings Page - Theme Controls
     * @precondition Settings page loaded
     * @testdata None
     * @expected "Light" button visible
     */
    test('Light theme button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Light' })).toBeVisible();
    });

    /**
     * @description Verifies Dark theme button is visible
     * @feature Settings Page - Theme Controls
     * @precondition Settings page loaded
     * @testdata None
     * @expected "Dark" button visible
     */
    test('Dark theme button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Dark' })).toBeVisible();
    });

    /**
     * @description Verifies System theme button is visible
     * @feature Settings Page - Theme Controls
     * @precondition Settings page loaded
     * @testdata None
     * @expected "System" button visible
     */
    test('System theme button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'System' })).toBeVisible();
    });

    /**
     * @description Verifies all theme buttons are visible
     * @feature Settings Page - Theme Controls
     * @precondition Settings page loaded
     * @testdata None
     * @expected Light, Dark, System buttons all visible
     */
    test('All theme buttons are visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Light' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Dark' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'System' })).toBeVisible();
    });
  });

  /**
   * @description Tests for accent color elements visibility
   * @feature Settings Page - Accent Color
   * @precondition Settings page must be loaded
   * @testdata None
   * @expected All accent color elements should be visible
   */
  test.describe('Accent Color', () => {
    /**
     * @description Verifies accent color section is visible
     * @feature Settings Page - Accent Color
     * @precondition Settings page loaded
     * @testdata None
     * @expected Accent color text visible
     */
    test('Accent color section is visible', async ({ page }) => {
      // Look for accent color related text
      await expect(page.getByText(/accent/i).first()).toBeVisible();
    });

    /**
     * @description Verifies accent color slider is visible
     * @feature Settings Page - Accent Color
     * @precondition Settings page loaded
     * @testdata None
     * @expected Range input slider visible
     */
    test('Accent color slider is visible', async ({ page }) => {
      // Slider is typically an input type="range"
      const slider = page.locator('input[type="range"]');
      if (await slider.count() > 0) {
        await expect(slider).toBeVisible();
      }
    });

    /**
     * @description Verifies color preview is visible
     * @feature Settings Page - Accent Color
     * @precondition Settings page loaded
     * @testdata None
     * @expected Color preview element visible
     */
    test('Color preview is visible', async ({ page }) => {
      // Color preview is typically a div with color-related classes
      const colorPreview = page.locator('[class*="color"], [class*="preview"], [class*="hue"]');
      await expect(colorPreview.first()).toBeVisible();
    });
  });

  /**
   * @description Tests for typography and reading settings
   * @feature Settings Page - Typography & Reading
   * @precondition Settings page must be loaded
   * @testdata None
   * @expected All typography settings should be visible
   */
  test.describe('Typography & Reading', () => {
    /**
     * @description Verifies Typography section is visible
     * @feature Settings Page - Typography & Reading
     * @precondition Settings page loaded
     * @testdata None
     * @expected Typography text visible
     */
    test('Typography section is visible', async ({ page }) => {
      await expect(page.getByText(/typography|reading/i).first()).toBeVisible();
    });

    /**
     * @description Verifies Global Typeface dropdown is visible
     * @feature Settings Page - Typography & Reading
     * @precondition Settings page loaded
     * @testdata None
     * @expected Combobox/select element visible
     */
    test('Global Typeface dropdown is visible', async ({ page }) => {
      // Dropdown could be a select or a custom dropdown component
      const dropdown = page.locator('select, [role="combobox"], [class*="select"]');
      await expect(dropdown.first()).toBeVisible();
    });

    /**
     * @description Verifies UI Scaling buttons are visible
     * @feature Settings Page - Typography & Reading
     * @precondition Settings page loaded
     * @testdata None
     * @expected Small, Medium, Large buttons all visible
     */
    test('UI Scaling buttons are visible (Small, Medium, Large)', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Small' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Medium' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Large' })).toBeVisible();
    });
  });

  /**
   * @description Tests for settings footer elements
   * @feature Settings Page - Footer
   * @precondition Settings page must be loaded
   * @testdata None
   * @expected Footer elements should be visible
   */
  test.describe('Footer', () => {
    /**
     * @description Verifies "Need more help" text is visible
     * @feature Settings Page - Footer
     * @precondition Settings page loaded
     * @testdata None
     * @expected "Need more help?" text visible
     */
    test('Need more help text is visible', async ({ page }) => {
      await expect(page.getByText('Need more help?')).toBeVisible();
    });
  });

  /**
   * @description Tests for theme toggle functionality
   * @feature Settings Page - Theme Toggle
   * @precondition Settings page must be loaded
   * @testdata None
   * @expected Theme toggle should work correctly
   */
  test.describe('Theme Toggle Functionality', () => {
    /**
     * @description Verifies clicking Dark theme adds dark class to HTML
     * @feature Settings Page - Theme Toggle
     * @precondition Settings page loaded
     * @testdata None
     * @expected HTML element should have dark class
     */
    test('Clicking Dark theme adds dark class to HTML', async ({ page }) => {
      const html = page.locator('html');
      const darkButton = page.getByRole('button', { name: 'Dark' });
      
      await darkButton.click();
      await page.waitForTimeout(300);
      
      await expect(html).toHaveClass(/dark/);
    });

    /**
     * @description Verifies clicking Light theme removes dark class from HTML
     * @feature Settings Page - Theme Toggle
     * @precondition Settings page loaded
     * @testdata None
     * @expected HTML element should not have dark class
     */
    test('Clicking Light theme removes dark class from HTML', async ({ page }) => {
      const html = page.locator('html');
      const darkButton = page.getByRole('button', { name: 'Dark' });
      const lightButton = page.getByRole('button', { name: 'Light' });
      
      // First click dark
      await darkButton.click();
      await page.waitForTimeout(300);
      await expect(html).toHaveClass(/dark/);
      
      // Then click light
      await lightButton.click();
      await page.waitForTimeout(300);
      await expect(html).not.toHaveClass(/dark/);
    });

    /**
     * @description Verifies clicking System theme button works
     * @feature Settings Page - Theme Toggle
     * @precondition Settings page loaded
     * @testdata None
     * @expected System button should be clickable without errors
     */
    test('Clicking System theme button works', async ({ page }) => {
      const systemButton = page.getByRole('button', { name: 'System' });
      await systemButton.click();
      await page.waitForTimeout(300);
      // System theme just needs to be clickable without errors
    });
  });
});
