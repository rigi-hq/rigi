import { defineConfig, mergeConfig } from 'vitest/config';
import base from './base.js';

export default mergeConfig(
  base,
  defineConfig({
    test: {
      include: ['src/**/*.int-spec.ts'],
      testTimeout: 10_000,
      hookTimeout: 5_000,
    },
  }),
);
