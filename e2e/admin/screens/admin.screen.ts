import { baseElement } from '@rigi/testing-pom-base/base-element';
import { BaseScreen } from '@rigi/testing-pom-base/base-screen';

export class AdminScreen extends BaseScreen {
  readonly path = '/admin';

  private readonly pageHeaderLocator = this.page
    .getByRole('heading', { level: 2 })
    .first();

  readonly pageHeader = baseElement(this.pageHeaderLocator);
}
