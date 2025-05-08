import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000', 
    headless: true
  },
  testDir: './tests',
  timeout: 30000
});
