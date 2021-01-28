import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
  countByHook,
} from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { trendIndicatorDriverFactory } from '../TrendIndicator/TrendIndicator.uni.driver';
import { adaptiveHeadingDriverFactory } from '../utils/AdaptiveHeading/AdaptiveHeading.uni.driver';

import DataHooks from './dataHooks';

const statisticsWidgetDriverFactory = (base, body) => {
  const getStatsItem = async index =>
    findByHookAtIndex(base, DataHooks.stat, index);

  const getTooltipDriver = async index => {
    const item = await getStatsItem(index);
    const tooltip = await findByHook(item, DataHooks.tooltip);

    return tooltipDriverFactory(tooltip, body);
  };

  const getTrendIndicatorDriver = async index => {
    const item = await getStatsItem(index);
    const tooltip = await findByHook(item, DataHooks.percentage);

    return trendIndicatorDriverFactory(tooltip, body);
  };

  const getAdaptiveHeadingDriver = async index => {
    const item = await getStatsItem(index);
    const heading = await findByHook(item, DataHooks.value);

    return adaptiveHeadingDriverFactory(heading);
  };

  const getStatsPartText = async (index, hook) => {
    const item = await getStatsItem(index);
    const node = await findByHook(item, hook);

    if (!(await node.exists())) {
      return null;
    }

    return await node.text();
  };

  return {
    ...baseUniDriverFactory(base),
    /** Get number of items */
    getItemsCount: async () => await countByHook(base, DataHooks.stat),

    /** Click on the statistic with index */
    clickStatistics: async index => {
      const item = await getStatsItem(index);

      return item.click();
    },

    /** Get value of the statistic with index */
    getValue: async index => {
      const heading = await getAdaptiveHeadingDriver(index);

      return heading.getText();
    },

    /** Get short value of the stat with index */
    getValueInShort: async index => {
      const heading = await getAdaptiveHeadingDriver(index);

      return heading.getShortText();
    },

    /** Get description of the statistic with index */
    getDescription: async index =>
      getStatsPartText(index, DataHooks.description),

    /** Get the text of the info tooltip */
    getDescriptionInfo: async index => {
      const tooltip = await getTooltipDriver(index);

      if (!(await tooltip.exists())) {
        return null;
      }

      await tooltip.mouseEnter();

      const text = await tooltip.getTooltipText();

      await tooltip.mouseLeave();

      return text;
    },

    /** Get children in section by hook */
    getChildren: async (index, hook) => {
      const item = await getStatsItem(index);
      return findByHook(item, hook);
    },

    /** Get percentage of the statistic with index */
    getPercentage: async index => {
      const trendIndicator = await getTrendIndicatorDriver(index);

      if (!(await trendIndicator.exists())) {
        return null;
      }

      return await trendIndicator.getTrendValue();
    },
  };
};

export default statisticsWidgetDriverFactory;
