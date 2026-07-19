import base from '@rigi/vitest-config/e2e';
import { defineConfig, mergeConfig } from 'vitest/config';
import { config } from '#config';

export default mergeConfig(
  base,
  defineConfig({
    test: {
      testTimeout: config.timeout,
    },
  }),
);
