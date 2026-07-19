import { HealthController } from '#health/health.controller';

describe('HealthController (unit)', () => {
  it('returns ok status', () => {
    const controller = new HealthController();
    expect(controller.check()).toEqual({ status: 'ok' });
  });
});
