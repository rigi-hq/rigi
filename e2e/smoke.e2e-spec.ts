import { describe, expect, it } from 'vitest';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

describe('smoke', () => {
  it('GET /health returns ok on the running stack', async () => {
    const res = await fetch(`${BASE_URL}/health`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: 'ok' });
  });

  it('GET /admin renders', async () => {
    const res = await fetch(`${BASE_URL}/admin`);
    expect(res.status).toBe(200);
  });
});
