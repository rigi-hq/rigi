import { z } from 'zod';

let raw: Record<string, unknown> = {};
vi.mock('config', () => ({
  default: { util: { toObject: () => raw } },
}));

const { loadConfig } = await import('./index.js');

beforeEach(() => {
  raw = {};
});

describe('loadConfig', () => {
  it('returns the parsed, typed config when the schema matches', () => {
    raw = { answer: 42 };
    const result = loadConfig(z.object({ answer: z.coerce.number() }));
    expect(result.answer).toBe(42);
  });

  it('throws when a required key is missing', () => {
    expect(() => loadConfig(z.object({ missing: z.string() }))).toThrow();
  });

  it('throws when a value fails validation', () => {
    raw = { answer: 'not-a-uuid' };
    expect(() => loadConfig(z.object({ answer: z.uuid() }))).toThrow();
  });
});
