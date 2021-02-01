import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AvatarGroupUniDriver extends BaseUniDriver {
  getAvatarsCount(): Promise<number>;
  getAvatarContentByIndex(index: number): Promise<string>;
}
