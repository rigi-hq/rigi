import { describe, expect, it } from 'vitest';
import { SDK_VERSION } from './index.js';

describe('plugin-sdk', () => {
  it('exposes an SDK version string', () => {
    expect(typeof SDK_VERSION).toBe('string');
    expect(SDK_VERSION.length).toBeGreaterThan(0);
  });
});
