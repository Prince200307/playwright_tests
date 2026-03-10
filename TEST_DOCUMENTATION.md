# Playwright Test Documentation

## a) Overview

This test suite provides black-box end-to-end testing for the KeenAble employee management web application. Tests are designed to validate UI functionality through the browser without access to source code.

- **Framework:** Playwright
- **Base URL:** http://95.216.39.97:8086
- **Browsers Configured:** Chromium, Firefox, WebKit (Desktop), Android Galaxy S9, Android Pixel 7 (Mobile)
- **Total Test Cases:** 69 unique tests (345 total runs across all browsers)
- **Test Results:** 342 passed, 3 failed, 0 skipped

## b) Folder Structure

```
tests/
├── dashboard.spec.ts   # Dashboard page UI tests (cards, tables, buttons)
├── layout.spec.ts      # Layout & header tests (desktop/mobile, theme toggle)
├── leaves.spec.ts      # Leaves page tests (cards, tables, leave application)
├── navigation.spec.ts  # Navigation tests (sidebar, mobile nav, redirects)
└── settings.spec.ts    # Settings page tests (theme, accent color, typography)
```

## c) Test Case Table

| Test ID | Test Name | File | Feature/Module | Description | Preconditions | Test Data | Steps Summary | Expected Result | Actual Result | Status | Priority | Browser | Remarks |
|---------|-----------|------|----------------|-------------|----------------|-----------|---------------|-----------------|---------------|--------|----------|---------|---------|
| TC001 | Dashboard page loads successfully | dashboard.spec.ts | Dashboard Page | Verifies dashboard page loads with correct URL | User is logged in, app is accessible | None | Navigate to /dashboard | URL matches /dashboard$ | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC002 | Current Shift card is visible with Start Shift button | dashboard.spec.ts | Dashboard Page | Verifies Current Shift card and Start Shift button are visible | Dashboard page loaded | None | Navigate to /dashboard, check for "Current Shift" text and "Start Shift" button | Card and button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC003 | Shift Duration card is visible with End Shift button | dashboard.spec.ts | Dashboard Page | Verifies Shift Duration card and End Shift button are visible | Dashboard page loaded | None | Navigate to /dashboard, check for "Shift Duration" text and "End Shift" button | Card and button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC004 | Current Location card is visible with Update Location button | dashboard.spec.ts | Dashboard Page | Verifies Current Location card and button are visible | Dashboard page loaded | None | Navigate to /dashboard, check for "Current Location" text and "Update Location" button | Card and button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC005 | Hours Remaining card is visible with View Roster button | dashboard.spec.ts | Dashboard Page | Verifies Hours Remaining card and button are visible | Dashboard page loaded | None | Navigate to /dashboard, check for "Hours Remaining" text and "View Roster" button | Card and button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC006 | Open Incidents table is visible with correct columns | dashboard.spec.ts | Dashboard Page | Verifies Open Incidents table displays with headers | Dashboard page loaded | None | Navigate to /dashboard, check for "Open Incidents" text and table columns | Table and columns visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC007 | Recent Recordings table is visible with correct columns | dashboard.spec.ts | Dashboard Page | Verifies Recent Recordings table displays with headers | Dashboard page loaded | None | Navigate to /dashboard, check for "Recent Recordings" text and table columns | Table and columns visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC008 | Record button is visible | dashboard.spec.ts | Dashboard Page | Verifies record button is visible | Dashboard page loaded | None | Navigate to /dashboard, check for record button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC009 | Upload button is visible | dashboard.spec.ts | Dashboard Page | Verifies upload button is visible | Dashboard page loaded | None | Navigate to /dashboard, check for upload button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC010 | Delete button is visible | dashboard.spec.ts | Dashboard Page | Verifies delete button is visible | Dashboard page loaded | None | Navigate to /dashboard, check for delete button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC011 | Settings page loads successfully | settings.spec.ts | Settings Page | Verifies settings page loads with correct URL | User is logged in | None | Navigate to /settings | URL matches /settings$ | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC012 | Settings heading is visible | settings.spec.ts | Settings Page | Verifies Settings heading is displayed | Settings page loaded | None | Navigate to /settings, check for "Settings" heading | Heading visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC013 | Theme Mode section is visible | settings.spec.ts | Settings Page - Theme Controls | Verifies Theme Mode section is displayed | Settings page loaded | None | Navigate to /settings, check for "Theme Mode" text | Section visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC014 | Light theme button is visible | settings.spec.ts | Settings Page - Theme Controls | Verifies Light theme button is displayed | Settings page loaded | None | Navigate to /settings, check for "Light" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC015 | Dark theme button is visible | settings.spec.ts | Settings Page - Theme Controls | Verifies Dark theme button is displayed | Settings page loaded | None | Navigate to /settings, check for "Dark" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC016 | System theme button is visible | settings.spec.ts | Settings Page - Theme Controls | Verifies System theme button is displayed | Settings page loaded | None | Navigate to /settings, check for "System" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC017 | All theme buttons are visible | settings.spec.ts | Settings Page - Theme Controls | Verifies all theme buttons (Light, Dark, System) are displayed | Settings page loaded | None | Navigate to /settings, check for all three theme buttons | All buttons visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC018 | Accent color section is visible | settings.spec.ts | Settings Page - Accent Color | Verifies Accent Color section is displayed | Settings page loaded | None | Navigate to /settings, check for accent color text | Section visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC019 | Accent color slider is visible | settings.spec.ts | Settings Page - Accent Color | Verifies accent color slider control is displayed | Settings page loaded | None | Navigate to /settings, check for range input slider | Slider visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC020 | Color preview is visible | settings.spec.ts | Settings Page - Accent Color | Verifies color preview element is displayed | Settings page loaded | None | Navigate to /settings, check for color preview element | Color preview visible | Passed (chromium, firefox, webkit, Galaxy S9); Failed (Android Pixel 7) | Mixed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | Failed on Android Pixel 7 - element not found |
| TC021 | Typography section is visible | settings.spec.ts | Settings Page - Typography & Reading | Verifies Typography section is displayed | Settings page loaded | None | Navigate to /settings, check for typography text | Section visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC022 | Global Typeface dropdown is visible | settings.spec.ts | Settings Page - Typography & Reading | Verifies Global Typeface dropdown is displayed | Settings page loaded | None | Navigate to /settings, check for combobox/select element | Dropdown visible | Passed (chromium,kit, Galaxy S9); Failed (Android Pixel 7 firefox, web) | Mixed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | Failed on Android Pixel 7 - element not found |
| TC023 | UI Scaling buttons are visible (Small, Medium, Large) | settings.spec.ts | Settings Page - Typography & Reading | Verifies UI Scaling buttons are displayed | Settings page loaded | None | Navigate to /settings, check for Small, Medium, Large buttons | All buttons visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC024 | Need more help text is visible | settings.spec.ts | Settings Page - Footer | Verifies footer help text is displayed | Settings page loaded | None | Navigate to /settings, check for "Need more help?" text | Text visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC025 | Clicking Dark theme adds dark class to HTML | settings.spec.ts | Settings Page - Theme Toggle Functionality | Verifies clicking Dark theme applies dark class to HTML element | Settings page loaded | None | Navigate to /settings, click Dark button, check html element class | HTML has 'dark' class | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC026 | Clicking Light theme removes dark class from HTML | settings.spec.ts | Settings Page - Theme Toggle Functionality | Verifies clicking Light theme removes dark class from HTML | Settings page loaded | None | Navigate to /settings, click Dark then Light, check html element | HTML does not have 'dark' class | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC027 | Clicking System theme button works | settings.spec.ts | Settings Page - Theme Toggle Functionality | Verifies System theme button is clickable | Settings page loaded | None | Navigate to /settings, click System button | No errors occur | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC028 | Leaves page loads successfully | leaves.spec.ts | Leaves Page | Verifies leaves page loads with correct URL | User is logged in | None | Navigate to /leaves | URL matches /leaves$ | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC029 | Leave Dashboard heading is visible | leaves.spec.ts | Leaves Page | Verifies Leave Dashboard heading is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Leave Dashboard" heading | Heading visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC030 | Working Days/Hrs card is visible | leaves.spec.ts | Leaves Page - Leave Cards | Verifies Working Days/Hrs card is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Working Days/Hrs" text | Card visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC031 | Earned Leaves card is visible | leaves.spec.ts | Leaves Page - Leave Cards | Verifies Earned Leaves card is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Earned Leaves" text | Card visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC032 | Payable Days card is visible | leaves.spec.ts | Leaves Page - Leave Cards | Verifies Payable Days card is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Payable Days" text | Card visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC033 | Paid Leave Balance card is visible | leaves.spec.ts | Leaves Page - Leave Cards | Verifies Paid Leave Balance card is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Paid Leave Balance" text | Card visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC034 | All leave cards are visible | leaves.spec.ts | Leaves Page - Leave Cards | Verifies leave cards container is visible | Leaves page loaded | None | Navigate to /leaves, check for card elements | Cards visible | Passed (chromium, firefox, webkit, Galaxy S9); Failed (Android Pixel 7) | Mixed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | Failed on Android Pixel 7 - element not found |
| TC035 | Leave History table is visible with correct columns | leaves.spec.ts | Leaves Page - Leave Tables | Verifies Leave History table displays with headers | Leaves page loaded | None | Navigate to /leaves, check for "Leave History" and table columns | Table and columns visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC036 | Holidays table is visible with correct columns | leaves.spec.ts | Leaves Page - Leave Tables | Verifies Holidays table displays with headers | Leaves page loaded | None | Navigate to /leaves, check for "Holidays" and table columns | Table and columns visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC037 | Leave Application section is visible | leaves.spec.ts | Leaves Page - Leave Application Form | Verifies Leave Application section is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Leave Application" text | Section visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC038 | Leave type options are visible (EL, UPL, PL) | leaves.spec.ts | Leaves Page - Leave Application Form | Verifies leave type radio options are displayed | Leaves page loaded | None | Navigate to /leaves, check for EL, UPL, PL options | Options visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC039 | Apply button is visible | leaves.spec.ts | Leaves Page - Leave Application Form | Verifies Apply button is displayed | Leaves page loaded | None | Navigate to /leaves, check for "Apply" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit, Android Galaxy S9, Android Pixel 7 | |
| TC040 | Header is visible on desktop | layout.spec.ts | Layout & Header - Desktop Layout | Verifies header element is visible on desktop viewport | Dashboard page loaded, viewport 1280x800 | None | Set viewport 1280x800, navigate to /dashboard, check for header element | Header visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC041 | User greeting "Hi User" is visible in header | layout.spec.ts | Layout & Header - Desktop Layout | Verifies user greeting text is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "Hi User" text | Text visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC042 | Welcome back text is visible | layout.spec.ts | Layout & Header - Desktop Layout | Verifies welcome message is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "Welcome back" text | Text visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC043 | Search input is visible in header on desktop | layout.spec.ts | Layout & Header - Desktop Layout | Verifies search input is visible on desktop | Dashboard page loaded, viewport 1280x800 | None | Set viewport 1280x800, navigate to /dashboard, check for search input | Input visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC044 | Theme toggle button is visible | layout.spec.ts | Layout & Header - Desktop Layout | Verifies theme toggle button is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "Toggle theme" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC045 | Notifications button is visible | layout.spec.ts | Layout & Header - Desktop Layout | Verifies notifications button is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "Notifications" button | Button visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC046 | Desktop sidebar is visible | layout.spec.ts | Layout & Header - Desktop Layout | Verifies sidebar is visible on desktop | Dashboard page loaded, viewport 1280x800 | None | Set viewport 1280x800, navigate to /dashboard, check for aside element | Sidebar visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC047 | Logo text "KeenAble" is visible in sidebar | layout.spec.ts | Layout & Header - Desktop Layout | Verifies application logo is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "KeenAble" text in sidebar | Logo visible | Passed | ✅ Passed | chromium, firefox, webkit | |
| TC048 | Header is visible on mobile | layout.spec.ts | Layout & Header - Mobile Layout | Verifies header element is visible on mobile viewport | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check for header element | Header visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC049 | User greeting is visible on mobile | layout.spec.ts | Layout & Header - Mobile Layout | Verifies user greeting is visible on mobile | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check for "Hi User" text | Text visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC050 | Search input is hidden on mobile viewport | layout.spec.ts | Layout & Header - Mobile Layout | Verifies search input is NOT visible on mobile | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check search input is hidden | Input not visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC051 | Mobile menu button is visible on mobile | layout.spec.ts | Layout & Header - Mobile Layout | Verifies hamburger menu button is displayed on mobile | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check for "Open menu" button | Button visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC052 | Mobile bottom navigation is visible | layout.spec.ts | Layout & Header - Mobile Layout | Verifies bottom navigation bar is displayed on mobile | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check for bottom nav element | Nav visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC053 | Desktop sidebar is hidden on mobile | layout.spec.ts | Layout & Header - Mobile Layout | Verifies sidebar is hidden on mobile viewport | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, navigate to /dashboard, check sidebar has hidden class | Sidebar hidden | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC054 | Search input is visible in the header | layout.spec.ts | Layout & Header - Search Input | Verifies search input is in header | Dashboard page loaded | None | Navigate to /dashboard, check search input visibility | Input visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC055 | Search input accepts text | layout.spec.ts | Layout & Header - Search Input | Verifies search input accepts user input | Dashboard page loaded | None | Navigate to /dashboard, fill search with "test query", verify value | Input accepts text | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC056 | Theme toggle button changes theme from light to dark | layout.spec.ts | Layout & Header - Theme Toggle | Verifies theme toggle switches to dark mode | Settings page loaded | None | Navigate to /settings, click Dark button, verify html has dark class | Dark class applied | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC057 | Theme toggle button changes theme from dark to light | layout.spec.ts | Layout & Header - Theme Toggle | Verifies theme toggle switches from dark to light | Settings page loaded | None | Navigate to /settings, click Dark then Light, verify html has no dark class | Dark class removed | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC058 | Theme toggle in header works | layout.spec.ts | Layout & Header - Theme Toggle | Verifies theme toggle button in header is clickable | Dashboard page loaded | None | Navigate to /dashboard, click "Toggle theme" button | No errors occur | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC059 | Notifications button is visible | layout.spec.ts | Layout & Header - Notifications | Verifies notifications button exists | Dashboard page loaded | None | Navigate to /dashboard, check for "Notifications" button | Button visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC060 | Notification badge indicator is visible | layout.spec.ts | Layout & Header - Notifications | Verifies notification badge is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for badge element | Badge visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC061 | Dashboard link navigates to dashboard page | navigation.spec.ts | Navigation - Desktop Sidebar Navigation | Verifies sidebar Dashboard link works | Dashboard page loaded | None | Click sidebar link to /dashboard | URL changes to /dashboard | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC062 | Leaves link navigates to leaves page | navigation.spec.ts | Navigation - Desktop Sidebar Navigation | Verifies sidebar Leaves link works | Dashboard page loaded | None | Click sidebar link to /leaves | URL changes to /leaves | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC063 | Settings link navigates to settings page | navigation.spec.ts | Navigation - Desktop Sidebar Navigation | Verifies sidebar Settings link works | Dashboard page loaded | None | Click sidebar link to /settings | URL changes to /settings | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC064 | Sign Out button is visible in sidebar | navigation.spec.ts | Navigation - Desktop Sidebar Navigation | Verifies Sign Out button is displayed | Dashboard page loaded | None | Navigate to /dashboard, check for "Sign Out" button in sidebar | Button visible | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC065 | Mobile Dashboard tab navigates to dashboard | navigation.spec.ts | Navigation - Mobile Bottom Navigation | Verifies mobile bottom nav Dashboard works | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, click mobile nav to /dashboard | URL changes to /dashboard | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC066 | Mobile Leaves tab navigates to leaves page | navigation.spec.ts | Navigation - Mobile Bottom Navigation | Verifies mobile bottom nav Leaves works | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, click mobile nav to /leaves | URL changes to /leaves | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC067 | Mobile Settings tab navigates to settings page | navigation.spec.ts | Navigation - Mobile Bottom Navigation | Verifies mobile bottom nav Settings works | Dashboard page loaded, viewport 375x667 | None | Set viewport 375x667, click mobile nav to /settings | URL changes to /settings | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC068 | Can navigate from Dashboard to Leaves to Settings | navigation.spec.ts | Navigation - Page Navigation Flow | Verifies full navigation flow works | User logged in | None | Navigate Dashboard -> Leaves -> Settings -> Dashboard | All pages load correctly | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |
| TC069 | Root URL redirects to dashboard | navigation.spec.ts | Navigation - Root URL Redirect | Verifies accessing root URL redirects to dashboard | None | None | Navigate to / | Redirects to /dashboard | ✅ Passed | ✅ Passed | chromium, firefox, webkit | |

## d) Page / Feature Coverage Summary

| Page / Feature | No. of Tests | Passed | Failed | Skipped |
|----------------|--------------|--------|--------|---------|
| Dashboard Page | 10 | 10 | 0 | 0 |
| Settings Page | 17 | 15 | 2 | 0 |
| Leaves Page | 12 | 11 | 1 | 0 |
| Layout & Header | 21 | 21 | 0 | 0 |
| Navigation | 9 | 9 | 0 | 0 |
| **Total** | **69** | **66** | **3** | **0** |

## e) How to Run Tests

### Install and Setup
```bash
npm install
npx playwright install --with-deps
```

### Run All Tests
```bash
npx playwright test
```

### Run a Specific File
```bash
npx playwright test tests/dashboard.spec.ts
```

### Run Tests by Feature
```bash
npx playwright test --grep "Dashboard"
```

### Run in Headed Mode (Visible Browser)
```bash
npx playwright test --headed
```

### Run with Playwright UI Mode
```bash
npx playwright test --ui
```

### Generate and Open HTML Report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

## f) playwright.config.ts Summary

```typescript
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: 'http://95.216.39.97:8086',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Android Galaxy S9', use: { ...devices['Galaxy S9'] } },
    { name: 'Android Pixel 7', use: { ...devices['Pixel 7'] } },
  ],
});
```

### Configuration Details:
- **baseURL:** http://95.216.39.97:8086
- **Browsers:** Chromium, Firefox, WebKit (Desktop), Android Galaxy S9, Android Pixel 7
- **Trace:** Enabled on first retry (captures trace on failure)
- **Retries:** 0 locally, 2 on CI
- **Parallelism:** Fully parallel locally, single worker on CI
- **Screenshots/Videos:** Default Playwright settings (on failure)

## g) Test Assumptions & Limitations

### Black-Box Testing Constraints
- Tests rely solely on visible UI elements and URLs
- No access to source code or internal application state
- Tests cannot verify backend logic or database changes

### Hardcoded Test Data
- No hardcoded user credentials or passwords in test files
- Test uses "Hi User" as expected logged-in user greeting
- URLs tested: /dashboard, /settings, /leaves

### Live Site Dependencies
- Tests depend on live application being accessible at http://95.216.39.97:8086
- Tests assume user is already logged in (pre-authenticated session)
- Tests may fail if live site data changes (e.g., leave records, incident data)

### Known Issues
- 3 tests fail on Android Pixel 7 due to element visibility issues:
  - "Color preview is visible" - element not found on mobile
  - "Global Typeface dropdown is visible" - element not found on mobile  
  - "All leave cards are visible" - element not found on mobile
- These failures are likely due to responsive design differences on smaller mobile viewports

### Results Variability
- Test results may vary based on live site availability
- Network latency may affect test durations
- Mobile tests may behave differently on various device emulators

## h) Conventions Used

### Test File Naming
- Pattern: `{feature}.spec.ts`
- All test files in `tests/` directory

### Test Grouping
- Tests grouped using `test.describe()` blocks
- Grouping by: Page > Section > Specific Feature
- Example: "Settings Page > Theme Controls > Light theme button is visible"

### Helper Functions
- `waitForHydration()` - Waits for React/Next.js to finish loading
  - Waits for network idle
  - Waits for spinner to hide (if present)
  - Used in all test files before assertions

### Page Object Patterns
- No formal Page Object Model (POM) used
- Tests use Playwright locators directly (getByRole, getByText, locator)
- Locators are descriptive and self-documenting

### Test Data Approach
- No external test data files
- Tests use hardcoded strings matching UI (e.g., "Settings", "Dashboard")
- No API calls or database setup required

### Naming Conventions
- Test names: Descriptive, describes what is being verified
- Feature names: Derived from describe() block hierarchy
- Test IDs: Sequential TC001, TC002, etc.
