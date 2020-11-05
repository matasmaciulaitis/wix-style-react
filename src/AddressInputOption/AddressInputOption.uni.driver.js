import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { DATA_ATTR } from './constants';
import listItemSelectDriverFactory from '../ListItemSelect/ListItemSelect.uni.driver';

export const addressInputOptionDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get prefix */
    getPrefix: async () =>
      await listItemSelectDriverFactory(base, body).getPrefix(),

    /** Get title Text */
    getMainLabel: async () =>
      await listItemSelectDriverFactory(base, body).getTitle(),

    /** Get subtitle Text */
    getSecondaryLabel: async () =>
      await listItemSelectDriverFactory(base, body).getSubtitle(),

    /** Get suffix */
    getSuffix: async () =>
      await listItemSelectDriverFactory(base, body).getSubtitle(),

    getOptionLayout: async () => await base.attr(DATA_ATTR.OPTION_LAYOUT),
  };
};
