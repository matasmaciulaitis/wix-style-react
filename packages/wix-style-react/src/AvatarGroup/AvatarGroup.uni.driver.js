import {
  baseUniDriverFactory,
  findByHook,
  countByHook,
  findByHookAtIndex,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const avatarGroupDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the number Of displayed Avatars
     * @returns {Promise<number>}
     */
    getAvatarsCount: () => countByHook(base, dataHooks.avatarGroupItem),

    /**
     * Gets the text content
     * @param {number} Avatar index
     * @returns {Promise<string>}
     */
    getAvatarContentByIndex: async n =>
      await findByHookAtIndex(base, dataHooks.avatarGroupItem, n).text(),
  };
};
