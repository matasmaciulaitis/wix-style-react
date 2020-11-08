import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { DATA_HOOKS } from './constants';
import { listItemSelectDriverFactory } from '../ListItemSelect/ListItemSelect.uni.driver';

export const addressInputOptionDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get prefix */
    getPrefix: async () =>
      await listItemSelectDriverFactory(base, body).getPrefix(),

    /** Get main label Text */
    getMainLabel: async () =>
      await base.$(`[data-hook="${DATA_HOOKS.MAIN_LABEL}"]`).text(),

    /** Get secondary label Text */
    getSecondaryLabel: async () => {
      const secondaryLabelElement = await base.$(
        `[data-hook="${DATA_HOOKS.SECONDARY_LABEL}"]`,
      );
      if (await secondaryLabelElement.exists()) {
        return secondaryLabelElement.text();
      }
    },

    /** Get suffix */
    getSuffix: async () =>
      await (await listItemSelectDriverFactory(base, body)).getSuffix(),

    getOptionLayout: async () => {
      const secondaryLabelElement = await base.$(
        `[data-hook="${DATA_HOOKS.SECONDARY_LABEL}"]`,
      );
      if (await secondaryLabelElement.exists()) {
        return (await (
          await listItemSelectDriverFactory(base, body)
        ).getSubtitle())
          ? 'double-line'
          : 'single-line';
      }
    },
  };
};
