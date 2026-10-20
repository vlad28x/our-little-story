import { defineConfig,devices } from '@playwright/test';
export default defineConfig({
 testDir:'tests',testMatch:'dev-recovery-flow.spec.ts',outputDir:'test-results/dev',timeout:60000,expect:{timeout:15000},workers:1,reporter:'list',
 use:{...devices['Pixel 7'],baseURL:'http://127.0.0.1:5174/',trace:'retain-on-failure'},
 webServer:{command:'node tests/devServer.mjs',url:'http://127.0.0.1:5174/',reuseExistingServer:false,timeout:30000},
});
