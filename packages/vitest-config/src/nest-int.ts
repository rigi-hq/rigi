import { defineConfig } from 'vitest/config';

// Integration tests boot the Nest app + hit a real test Postgres.
// SWC transform gives decorators + emitDecoratorMetadata that Nest DI needs.
export default defineConfig({
  test: {
    include: ['src/**/*.int-spec.ts'],
    environment: 'node',
    globals: true,
    testTimeout: 30_000,
    hookTimeout: 30_000,
    fileParallelism: false,
  },
});
