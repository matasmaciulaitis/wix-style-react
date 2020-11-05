import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { AddressInputOptionLayout } from './AddressInpitOption.d.ts';

export interface ListItemSelectUniDriver extends BaseUniDriver {
  getPrefix(): Promise<BaseUniDriver>;
  getMainLabel(): Promise<string>;
  getSecondaryLabel(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
  getOptionLayout(): Promise<AddressInputOptionLayout>;
}
