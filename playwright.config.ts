import { defineConfig, devices } from '@playwright/test';

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
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // {
    //   name: 'Android Pixel 5',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    {
      name: 'Android Galaxy S9',
      use: {
        ...devices['Galaxy S9'],
      },
    },
    {
      name: 'Android Pixel 7',
      use: {
        ...devices['Pixel 7'],
      },
    },
  ],
});
