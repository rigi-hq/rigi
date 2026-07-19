import { config } from '#config';

describe('smoke', () => {
  it('GET /health returns ok on the running stack', async () => {
    const res = await fetch(`${config.baseUrl}/health`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: 'ok' });
  });

  it('GET /admin renders', async () => {
    const res = await fetch(`${config.baseUrl}/admin`);
    expect(res.status).toBe(200);
  });
});
