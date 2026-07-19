import { test } from '#fixtures';

test.describe('admin panel', () => {
  test('renders the dashboard header', async ({ adminScreen }) => {
    await adminScreen.goto();
    await adminScreen.pageHeader.toBeVisible();
    await adminScreen.pageHeader.toHaveText('Welcome on Board!');
  });
});
