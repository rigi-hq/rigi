import { HealthController } from './health.controller.js';

describe('HealthController (unit)', () => {
  it('returns ok status', () => {
    const controller = new HealthController();
    expect(controller.check()).toEqual({ status: 'ok' });
  });
});
