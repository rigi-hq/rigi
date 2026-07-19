import { config as loadDotenv } from 'dotenv';
import type { ZodType } from 'zod';

loadDotenv();

// biome-ignore lint/style/noProcessEnv: this wrapper owns node-config setup
process.env.NODE_CONFIG_STRICT_MODE = 'true';

const nodeConfig = (await import('config')).default;

export function loadConfig<T>(schema: ZodType<T>): T {
  return schema.parse(nodeConfig.util.toObject());
}
