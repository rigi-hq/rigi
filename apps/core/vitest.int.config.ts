import nestInt from '@rigi/vitest-config/nest-int';
import swc from 'unplugin-swc';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  nestInt,
  defineConfig({
    oxc: false,
    plugins: [
      swc.vite({
        module: { type: 'es6' },
      }),
    ],
  }),
);
