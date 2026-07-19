import { test as base } from '@playwright/test';
import { AdminScreen } from '#screens/admin.screen';

type Fixtures = {
  adminScreen: AdminScreen;
};

export const test = base.extend<Fixtures>({
  adminScreen: async ({ page }, use) => {
    await use(new AdminScreen(page));
  },
});
