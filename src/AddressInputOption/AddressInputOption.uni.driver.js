import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { listItemSelectDriverFactory } from '../ListItemSelect/ListItemSelect.uni.driver';

export const addressInputOptionDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get prefix */
    getPrefix: async () =>
      await listItemSelectDriverFactory(base, body).getPrefix(),

    /** Get main label Text */
    getMainLabel: async () =>
      await listItemSelectDriverFactory(base, body).getTitle(),

    /** Get secondary label Text */
    getSecondaryLabel: async () =>
      await listItemSelectDriverFactory(base, body).getSubtitle(),

    /** Get suffix */
    getSuffix: async () =>
      await (await listItemSelectDriverFactory(base, body)).getSuffix(),
  };
};
