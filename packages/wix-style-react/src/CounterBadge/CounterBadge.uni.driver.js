import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const counterBadgeDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base),

    /* Get the content of the CounterBadge */
    getContent: () =>
      base.$(`[data-hook="${dataHooks.caption}"]`)._prop('innerHTML'),
  };
};
