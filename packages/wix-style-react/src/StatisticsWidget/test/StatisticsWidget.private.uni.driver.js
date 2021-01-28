import publicDriverFactory from '../StatisticsWidget.uni.driver';
import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
  countByHook,
} from '../../../test/utils/unidriver';

import DataHooks from '../dataHooks';

export const statisticsWidgetPrivateDriverFactory = (base, body) => {
  const getStatsItem = async index =>
    findByHookAtIndex(base, DataHooks.stat, index);

  return {
    ...publicDriverFactory(base, body),

    /** Get info icon of the stat with index */
    isInfoExists: async index => {
      const stat = await getStatsItem(index);
      return findByHook(stat, DataHooks.info).exists();
    },

    pressEnterKey: async index => {
      if (index === undefined) {
        await base.pressKey('Enter');
        return;
      }

      const stat = await getStatsItem(index);
      await stat.pressKey('Enter');
    },

    pressSpaceKey: async index => {
      if (index === undefined) {
        await base.pressKey(' ');
        return;
      }

      const stat = await getStatsItem(index);
      await stat.pressKey(' ');
    },

    hasTabIndex: async index => {
      const stat = await getStatsItem(index);
      const tabIndex = await stat._prop('tabIndex');

      return tabIndex === 0;
    },

    getStatsItem,
  };
};
