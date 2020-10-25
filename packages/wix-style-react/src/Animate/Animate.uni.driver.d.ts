import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AnimateUniDriver extends BaseUniDriver {
  getDelay(): Promise<string>;
}
