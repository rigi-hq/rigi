import { loadConfig } from '@rigi/config';
import { z } from 'zod';

const schema = z.object({
  database: z.object({ url: z.url() }),
  port: z.coerce.number().int().positive().default(3000),
  redis: z.object({ url: z.url() }),
});

export const config = loadConfig(schema);
