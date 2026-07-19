import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'prisma/config';

// Prisma 7 no longer auto-loads .env for the CLI; load it explicitly via
// Node's built-in loader instead of adding a dotenv dependency. The repo
// keeps a single .env at the monorepo root (see justfile / compose.yaml),
// not per-app, so resolve relative to this config file rather than cwd.
const rootEnvPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../.env',
);
try {
  process.loadEnvFile(rootEnvPath);
} catch {
  // .env is optional (e.g. CI providing DATABASE_URL directly).
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.RIGI_DATABASE_URL,
  },
});
