import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { AddressInputOptionLayout } from './AddressInputOption.d.ts';

export interface AddressInputOptionUniDriver extends BaseUniDriver {
  getPrefix(): Promise<BaseUniDriver>;
  getMainLabel(): Promise<string>;
  getSecondaryLabel(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
  getOptionLayout(): Promise<AddressInputOptionLayout>;
}
