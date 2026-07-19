import { loadConfig } from '@rigi/config';
import { z } from 'zod';

const schema = z.object({
  baseUrl: z.url(),
  timeout: z.coerce.number().int().positive(),
});

export const config = loadConfig(schema);
