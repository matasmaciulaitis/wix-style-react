import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BadgeSelectUniDriver extends BaseUniDriver {
  clickAtOption: (index: number) => Promise<void>;
}
