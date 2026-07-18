import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    environment: 'node',
    testTimeout: 30_000,
    // Vite always injects import.meta.env.BASE_URL (default "/") and Vitest
    // copies it onto process.env.BASE_URL via `??=`, which clobbers an unset
    // shell BASE_URL before the spec's own `?? 'http://localhost:3000'`
    // fallback ever runs. Re-assert the intended value here so it wins.
    env: {
      BASE_URL: process.env.BASE_URL ?? 'http://localhost:3000',
    },
  },
});
