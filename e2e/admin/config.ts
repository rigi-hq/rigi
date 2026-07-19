import { loadConfig } from '@rigi/config';
import { z } from 'zod';

const schema = z.object({
  baseUrl: z.url(),
  isCi: z.coerce.boolean().default(false),
});

export const config = loadConfig(schema);
