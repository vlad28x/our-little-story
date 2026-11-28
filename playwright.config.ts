import { defineConfig, devices } from '@playwright/test';

const base = process.env.VITE_BASE_PATH || '/';
const baseURL = `http://127.0.0.1:4173${base}`;

export default defineConfig({
  testDir: 'tests',
  testMatch: ['**/*flow.spec.ts', 'scene-assets.spec.ts', 'smoke.spec.ts'],
  testIgnore: 'dev-recovery-flow.spec.ts',
  outputDir: 'test-results/served',
  timeout: 90_000,
  expect: { timeout: 7_000 },
  workers: 1,
  reporter: 'list',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [{ name: 'mobile-chromium', use: devices['Pixel 7'] }],
  webServer: {
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
