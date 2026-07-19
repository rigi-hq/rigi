import base from '@rigi/vitest-config/base';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  base,
  defineConfig({
    test: {
      include: ['src/**/*.spec.ts'],
    },
  }),
);
