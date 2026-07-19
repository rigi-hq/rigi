import { expect, type Locator } from '@playwright/test';

export type BaseElement = ReturnType<typeof expect<Locator>> & {
  locator: Locator;
};

export function baseElement(locator: Locator): BaseElement {
  return Object.assign(expect(locator), { locator });
}
