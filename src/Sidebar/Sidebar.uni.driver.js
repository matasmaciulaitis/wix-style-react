import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const sidebarDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    isGreadientDisplayed: async () => {
      return findByHook(base, dataHooks.scrollBarGradient).exists();
    },
  };
};
