import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// Release-source snapshots in work/ are archives, not another test suite.
export default mergeConfig(viteConfig,defineConfig({test:{include:['tests/**/*.test.ts','tests/**/*.test.tsx']}}));
