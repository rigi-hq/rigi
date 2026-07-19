import { config as loadDotenv } from 'dotenv';
import type { ZodType } from 'zod';

loadDotenv();

// node-config reads ./config/* relative to process.cwd() (the consuming app).
const nodeConfig = (await import('config')).default;

export function loadConfig<T>(schema: ZodType<T>): T {
  return schema.parse(nodeConfig.util.toObject());
}
