import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  testMatch: '**/*-offline.spec.ts',
  outputDir: 'test-results/offline',
  timeout: 60_000,
  workers: 1,
  reporter: 'list',
  use: { ...devices['Pixel 7'], trace: 'retain-on-failure' },
});
