import { loadConfig } from '@rigi/config';
import { z } from 'zod';

const schema = z.object({
  baseUrl: z.url(),
});

export const config = loadConfig(schema);
