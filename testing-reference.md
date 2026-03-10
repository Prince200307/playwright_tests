# KeenAble Testing Reference Manual

This document provides a comprehensive guide for writing Playwright tests for the KeenAble website (http://95.216.39.97:8086).

---

## 1. Website Overview

**Application Name:** KeenAble - Mark My Presence  
**Type:** Employee attendance and shift management web application  
**Framework:** Next.js with React (App Router)
**UI Library:** Shadcn UI components

### Pages:
- **Dashboard** (`/dashboard`) - Main employee dashboard with shift management
- **Leaves** (`/leaves`) - Leave management and application
- **Settings** (`/settings`) - Theme and appearance settings (fully functional)
- **Schedule** (`/schedule`) - Returns 404 - NOT IMPLEMENTED

### Main Layout Components:
- **Desktop Sidebar:** Logo, Navigation links, Settings, Sign Out
- **Header:** User avatar, greeting, search, theme toggle, notifications, mobile menu
- **Mobile Bottom Nav:** Dashboard, Schedule, Leaves, Settings tabs

### Important Notes:
- This is a Next.js App Router application
- Initial HTML contains a loader spinner inside the `<main>` section
- Real UI is rendered only after JavaScript hydration
- **Tests must wait for hydration before asserting UI elements**

---

## 2. Page Structure

| Page | URL | Description |
|------|-----|-------------|
| Dashboard | `/dashboard` | Main dashboard with shift management, incidents, recordings |
| Leaves | `/leaves` | Leave dashboard with history, holidays, and application form |
| Settings | `/settings` | Theme customization with light/dark/system modes |
| Schedule | `/schedule` | Returns 404 - NOT IMPLEMENTED |

### Hydration Handling
```typescript
// Always wait for React hydration before asserting elements
async function waitForHydration(page: Page) {
  await page.waitForLoadState('networkidle');
  const spinner = page.locator('.animate-spin');
  if (await spinner.count() > 0) {
    await expect(spinner).toBeHidden({ timeout: 10000 });
  }
}
```

---

## 3. Navigation Map

```
Root (/)
  └── Dashboard (/dashboard)
       ├── Leaves (/leaves)
       ├── Settings (/settings)
       └── Schedule (/schedule) - 404 NOT FOUND

Desktop Sidebar:
  - Dashboard link
  - Schedule link (broken - 404)
  - Leaves link
  - Settings link
  - Sign Out button

Mobile Bottom Navigation:
  - Dashboard tab
  - Schedule tab (broken - 404)
  - Leaves tab
  - Settings tab
```

---

## 4. Testable UI Elements

### PAGE: Dashboard (/dashboard)

#### Cards:
- **Current Shift Card**
  - Text: "Yet To Start"
  - Button: "Start Shift"

- **Shift Duration Card**
  - Text: "00:00:00"
  - Button: "End Shift"

- **Current Location Card**
  - Button: "Update Location"

- **Hours Remaining Card**
  - Button: "View Roster"

#### Tables:
- **Open Incidents Table**
  - Columns: Time, Description, Priority

- **Recent Recordings Table**
  - Columns: Time, File Name, Play

#### Action Buttons:
- **Record button** - Red circular button with microphone icon
- **Upload button**
- **Delete button**

---

### PAGE: Leaves (/leaves)

#### Heading:
- "Leave Dashboard"

#### Cards:
- Working Days/Hrs
- Earned Leaves
- Payable Days
- Paid Leave Balance

#### Tables:
- **Leave History Table**
  - Columns: Date, Leave Type, Status

- **Holidays Table**
  - Columns: Date, Holiday

#### Form:
- **Leave Application Section**
  - Radio buttons: EL, UPL, PL
  - Button: "Apply"

---

### PAGE: Settings (/settings)

#### Heading:
- "Settings"

#### System Appearance Section:
- **Theme Mode**
  - Buttons: Light, Dark, System

- **Accent Color Mood**
  - Hue slider
  - Color preview

#### Typography & Reading Section:
- **Global Typeface** dropdown
- **UI Scaling** buttons: Small, Medium, Large

#### Footer:
- "Need more help?" text

---

## 5. Recommended Playwright Locators

### Navigation Locators:

| Element | Preferred Locator | Fallback Locator |
|---------|------------------|------------------|
| Dashboard Link | `page.locator('aside a[href="/dashboard"]')` | `page.getByRole('link', { name: 'Dashboard' })` |
| Leaves Link | `page.locator('aside a[href="/leaves"]')` | `page.getByRole('link', { name: 'Leaves' })` |
| Settings Link | `page.locator('aside a[href="/settings"]')` | `page.getByRole('link', { name: 'Settings' })` |
| Sign Out Button | `page.locator('aside button:has-text("Sign Out")')` | `page.getByRole('button', { name: 'Sign Out' })` |

### Header Locators:

| Element | Preferred Locator | Fallback Locator |
|---------|------------------|------------------|
| User Greeting | `page.locator('header >> text=Hi User')` | `page.getByText('Hi User')` |
| Search Input | `page.locator('header input[placeholder="Search..."]')` | `page.getByPlaceholder('Search...')` |
| Theme Toggle | `page.locator('header button[aria-label="Toggle theme"]')` | `page.getByRole('button', { name: 'Toggle theme' })` |
| Notifications | `page.locator('header button[aria-label="Notifications"]')` | `page.getByRole('button', { name: 'Notifications' })` |
| Mobile Menu | `page.locator('header button[aria-label="Open menu"]')` | `page.getByRole('button', { name: 'Open menu' })` |

### Mobile Navigation Locators:

| Element | Preferred Locator | Fallback Locator |
|---------|------------------|------------------|
| Mobile Nav | `page.locator('nav.fixed.bottom-0')` | N/A |
| Dashboard Tab | `page.locator('nav.fixed.bottom-0 a[href="/dashboard"]')` | `page.getByRole('link', { name: 'Dashboard' })` |
| Leaves Tab | `page.locator('nav.fixed.bottom-0 a[href="/leaves"]')` | `page.getByRole('link', { name: 'Leaves' })` |
| Settings Tab | `page.locator('nav.fixed.bottom-0 a[href="/settings"]')` | `page.getByRole('link', { name: 'Settings' })` |

### Dashboard Page Locators:

| Element | Locator |
|---------|---------|
| Current Shift | `page.getByText('Current Shift')` |
| Yet To Start | `page.getByText('Yet To Start')` |
| Start Shift Button | `page.getByRole('button', { name: 'Start Shift' })` |
| Shift Duration | `page.getByText('Shift Duration')` |
| 00:00:00 | `page.getByText('00:00:00')` |
| End Shift Button | `page.getByRole('button', { name: 'End Shift' })` |
| Current Location | `page.getByText('Current Location')` |
| Update Location Button | `page.getByRole('button', { name: 'Update Location' })` |
| Hours Remaining | `page.getByText('Hours Remaining')` |
| View Roster Button | `page.getByRole('button', { name: 'View Roster' })` |
| Open Incidents | `page.getByText('Open Incidents')` |
| Recent Recordings | `page.getByText('Recent Recordings')` |
| Table columns | `page.getByText('Time').first()` |

### Leaves Page Locators:

| Element | Locator |
|---------|---------|
| Leave Dashboard Heading | `page.getByRole('heading', { name: 'Leave Dashboard' })` |
| Working Days/Hrs | `page.getByText('Working Days/Hrs')` |
| Earned Leaves | `page.getByText('Earned Leaves')` |
| Payable Days | `page.getByText('Payable Days')` |
| Paid Leave Balance | `page.getByText('Paid Leave Balance')` |
| Leave History | `page.getByText('Leave History')` |
| Holidays | `page.getByText('Holidays')` |
| Leave Application | `page.getByText('Leave Application')` |
| Apply Button | `page.getByRole('button', { name: 'Apply' })` |

### Settings Page Locators:

| Element | Locator |
|---------|---------|
| Settings Heading | `page.getByRole('heading', { name: 'Settings' })` |
| Theme Mode | `page.getByText('Theme Mode')` |
| Light Button | `page.getByRole('button', { name: 'Light' })` |
| Dark Button | `page.getByRole('button', { name: 'Dark' })` |
| System Button | `page.getByRole('button', { name: 'System' })` |
| UI Scaling Small | `page.getByRole('button', { name: 'Small' })` |
| UI Scaling Medium | `page.getByRole('button', { name: 'Medium' })` |
| UI Scaling Large | `page.getByRole('button', { name: 'Large' })` |
| Need more help? | `page.getByText('Need more help?')` |
| HTML Element (for theme) | `page.locator('html')` |

---

## 6. Mobile Specific Elements

### Responsive Behavior:

| Element | Desktop (lg: 1024px+) | Mobile (< lg: 1024px) |
|---------|----------------------|----------------------|
| Sidebar | Visible, fixed left | Hidden (has `hidden lg:flex` class) |
| Bottom Nav | Hidden | Visible, fixed bottom |
| Search Input | Visible in header | Hidden (has `hidden md:flex` class) |
| Mobile Menu Button | Hidden | Visible (has `lg:hidden` class) |

### Mobile Navigation Testing:

```typescript
// Set mobile viewport
await page.setViewportSize({ width: 375, height: 667 });

// Access mobile elements
const mobileNav = page.locator('nav.fixed.bottom-0');
const dashboardTab = mobileNav.locator('a[href="/dashboard"]');

// Verify visibility
await expect(mobileNav).toBeVisible();
await expect(dashboardTab).toBeVisible();

// Click navigation
await dashboardTab.click();
await expect(page).toHaveURL(/\/dashboard$/);
```

---

## 7. Test Files Structure

```
tests/
  dashboard.spec.ts    # Dashboard page tests (12 tests)
  leaves.spec.ts       # Leaves page tests (13 tests)
  settings.spec.ts     # Settings page tests (20 tests)
  navigation.spec.ts   # Navigation tests (11 tests)
  layout.spec.ts      # Layout/header tests (13 tests)
```

### Test Results: 69 tests passed

---

## 8. DOM Notes

### Dashboard Page Structure:
```html
<main>
  <!-- Cards Section -->
  <div class="grid">
    <div><!-- Current Shift -->
      <h3>Current Shift</h3>
      <p>Yet To Start</p>
      <button>Start Shift</button>
    </div>
    <div><!-- Shift Duration -->
      <h3>Shift Duration</h3>
      <p>00:00:00</p>
      <button>End Shift</button>
    </div>
    <div><!-- Current Location -->
      <h3>Current Location</h3>
      <button>Update Location</button>
    </div>
    <div><!-- Hours Remaining -->
      <h3>Hours Remaining</h3>
      <button>View Roster</button>
    </div>
  </div>
  
  <!-- Tables Section -->
  <table><!-- Open Incidents --></table>
  <table><!-- Recent Recordings --></table>
  
  <!-- Action Buttons -->
  <button><!-- Record --></button>
  <button><!-- Upload --></button>
  <button><!-- Delete --></button>
</main>
```

### Leaves Page Structure:
```html
<main>
  <h1>Leave Dashboard</h1>
  
  <!-- Cards -->
  <div class="grid">
    <div>Working Days/Hrs</div>
    <div>Earned Leaves</div>
    <div>Payable Days</div>
    <div>Paid Leave Balance</div>
  </div>
  
  <!-- Tables -->
  <table><!-- Leave History --></table>
  <table><!-- Holidays --></table>
  
  <!-- Form -->
  <section>
    <h3>Leave Application</h3>
    <label>EL</label>
    <label>UPL</label>
    <label>PL</label>
    <button>Apply</button>
  </section>
</main>
```

### Settings Page Structure:
```html
<main>
  <h1>Settings</h1>
  
  <section>
    <h2>System Appearance</h2>
    <label>Theme Mode</label>
    <button>Light</button>
    <button>Dark</button>
    <button>System</button>
  </section>
  
  <section>
    <h2>Accent Color Mood</h2>
    <input type="range" />
    <div class="color-preview" />
  </section>
  
  <section>
    <h2>Typography & Reading</h2>
    <select>Global Typeface</select>
    <button>Small</button>
    <button>Medium</button>
    <button>Large</button>
  </section>
  
  <footer>Need more help?</footer>
</main>
```

---

## 9. Stability Notes

### Potential Flaky Elements:

1. **Loading Spinners**
   - Dashboard and Leaves pages show animated loading spinner initially
   - **Tests must wait for hydration** before asserting main content
   - Use: `await page.waitForLoadState('networkidle')`
   - Then verify spinner is hidden: `await expect(page.locator('.animate-spin')).toBeHidden()`

2. **Theme Toggle Animation**
   - Theme change has CSS transition
   - Add wait after clicking theme buttons: `await page.waitForTimeout(300)`

3. **Navigation Active State**
   - Active page indicator may take moment to render

4. **Responsive Classes**
   - Desktop: 1280x800 or 1024x768
   - Mobile: 375x667 or 414x896

### Best Practices:

- Always use `await page.waitForLoadState('networkidle')` after navigation
- Wait for loading spinner to be hidden before asserting content
- For theme tests, verify the `dark` class on `<html>` element
- Use regex in URL matching: `/\/settings$/` instead of `**/settings`
- Mobile tests should explicitly set viewport before running

---

## 10. Element Selector Table

| Element | Page | Locator | Notes |
|---------|------|---------|-------|
| Logo Globe Icon | All | `page.locator('aside .lucide-globe')` | Globe SVG icon |
| Logo Text | All | `page.getByText('KeenAble')` | "KeenAble" heading |
| Desktop Sidebar | All | `page.locator('aside')` | Left sidebar navigation |
| Dashboard Link | All | `page.locator('aside a[href="/dashboard"]')` | Sidebar nav item |
| Leaves Link | All | `page.locator('aside a[href="/leaves"]')` | Sidebar nav item |
| Settings Link | All | `page.locator('aside a[href="/settings"]')` | Sidebar nav item |
| Sign Out Button | All | `page.locator('aside button:has-text("Sign Out")')` | Sign out button |
| Header | All | `page.locator('header')` | Top header bar |
| User Greeting | All | `page.getByText('Hi User')` | "Hi User" text |
| Welcome Text | All | `page.getByText('Welcome back')` | Welcome subtitle |
| Search Input | Desktop | `page.getByPlaceholder('Search...')` | Header search |
| Theme Toggle | All | `page.getByRole('button', { name: 'Toggle theme' })` | Moon icon button |
| Notifications | All | `page.getByRole('button', { name: 'Notifications' })` | Bell icon button |
| Notification Badge | All | `page.locator('header button[aria-label="Notifications"] span')` | Red dot |
| Mobile Menu | Mobile | `page.getByRole('button', { name: 'Open menu' })` | Hamburger icon |
| Mobile Bottom Nav | Mobile | `page.locator('nav.fixed.bottom-0')` | Bottom tab bar |
| Dashboard Tab | Mobile | `page.locator('nav.fixed.bottom-0 a[href="/dashboard"]')` | Dashboard tab |
| Leaves Tab | Mobile | `page.locator('nav.fixed.bottom-0 a[href="/leaves"]')` | Leaves tab |
| Settings Tab | Mobile | `page.locator('nav.fixed.bottom-0 a[href="/settings"]')` | Settings tab |
| Current Shift | Dashboard | `page.getByText('Current Shift')` | Card heading |
| Start Shift Button | Dashboard | `page.getByRole('button', { name: 'Start Shift' })` | Start button |
| End Shift Button | Dashboard | `page.getByRole('button', { name: 'End Shift' })` | End button |
| Open Incidents | Dashboard | `page.getByText('Open Incidents')` | Table heading |
| Recent Recordings | Dashboard | `page.getByText('Recent Recordings')` | Table heading |
| Leave Dashboard | Leaves | `page.getByRole('heading', { name: 'Leave Dashboard' })` | Page heading |
| Leave History | Leaves | `page.getByText('Leave History')` | Table heading |
| Holidays | Leaves | `page.getByText('Holidays')` | Table heading |
| Leave Application | Leaves | `page.getByText('Leave Application')` | Form section |
| Apply Button | Leaves | `page.getByRole('button', { name: 'Apply' })` | Submit button |
| Settings Heading | Settings | `page.getByRole('heading', { name: 'Settings' })` | Page heading |
| Light Button | Settings | `page.getByRole('button', { name: 'Light' })` | Theme option |
| Dark Button | Settings | `page.getByRole('button', { name: 'Dark' })` | Theme option |
| System Button | Settings | `page.getByRole('button', { name: 'System' })` | Theme option |
| UI Scaling Small | Settings | `page.getByRole('button', { name: 'Small' })` | Size option |
| UI Scaling Medium | Settings | `page.getByRole('button', { name: 'Medium' })` | Size option |
| UI Scaling Large | Settings | `page.getByRole('button', { name: 'Large' })` | Size option |
| Need more help? | Settings | `page.getByText('Need more help?')` | Footer text |
| HTML Element | Settings | `page.locator('html')` | For checking dark class |

---

## Appendix: Running Tests

### Test Commands:

```bash
# Run all tests
npx playwright test

# Run specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run mobile tests
npx playwright test --project="Android Pixel 5"
npx playwright test --project="Android Galaxy S9"
npx playwright test --project="Android Pixel 7"

# Run in UI mode
npx playwright test --ui

# Run in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/dashboard.spec.ts
npx playwright test tests/settings.spec.ts

# Run specific test
npx playwright test -g "should navigate to Settings"
```

### Configuration:

The baseURL is set to `http://95.216.39.97:8086` in `playwright.config.ts`.

Browser projects configured:
- Chromium (desktop)
- Firefox (desktop)
- WebKit (desktop)
- Android Pixel 5
- Android Galaxy S9
- Android Pixel 7

---

*Document updated: March 2026*
