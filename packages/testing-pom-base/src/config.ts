import {
  defineConfig,
  type PlaywrightTestConfig,
  type ReporterDescription,
} from '@playwright/test';

export type PresetOptions = {
  baseUrl: string;
  isCi: boolean;
};

export function playwrightPreset(options: PresetOptions): PlaywrightTestConfig {
  const reporter: ReporterDescription[] = options.isCi
    ? [['list'], ['github'], ['allure-playwright']]
    : [['list']];

  return defineConfig({
    testDir: './tests',
    testMatch: '**/*.e2e-spec.ts',
    // biome-ignore lint/style/useNamingConvention: baseURL is Playwright's option name
    use: { baseURL: options.baseUrl },
    reporter,
    projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  });
}
