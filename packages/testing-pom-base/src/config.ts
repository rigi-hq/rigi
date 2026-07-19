import { defineConfig, type PlaywrightTestConfig } from '@playwright/test';

export function playwrightPreset(baseUrl: string): PlaywrightTestConfig {
  return defineConfig({
    testDir: './tests',
    testMatch: '**/*.e2e-spec.ts',
    // biome-ignore lint/style/useNamingConvention: baseURL is Playwright's option name
    use: { baseURL: baseUrl },
    reporter: [['list'], ['github'], ['allure-playwright']],
    projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  });
}
