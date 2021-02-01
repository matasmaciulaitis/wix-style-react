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
     * @param {number} index Avatar index
     * @returns {Promise<string>}
     */
    getAvatarContentByIndex: async index =>
      await findByHookAtIndex(base, dataHooks.avatarGroupItem, index).text(),
  };
};
