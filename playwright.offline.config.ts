import { defineConfig,devices } from '@playwright/test';
export default defineConfig({testDir:'tests',testMatch:['chapter-code-offline.spec.ts','chapter4-offline.spec.ts','chapter5-offline.spec.ts'],timeout:60000,workers:1,reporter:'list',use:{...devices['Pixel 7'],trace:'retain-on-failure'}});
