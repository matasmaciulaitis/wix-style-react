import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriverList } from '@unidriver/core';

export interface CarouselUniDriver extends BaseUniDriver {
  isLoading: () => Promise<boolean>;
  getChildren: () => UniDriverList;
  getImages: () => Array<Promise<string | null>>;
}
