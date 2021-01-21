import publicDriverFactory from '../VariableInput.uni.driver';
import { tagUniDriverFactory } from '../../Tag/Tag.uni.driver';
import { dataHooks } from '../constants';

export const getContent = base => base.$('.public-DraftEditor-content');
export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

const getTagDriver = base =>
  tagUniDriverFactory(base.$(`[data-hook=${dataHooks.tag}]`));

export default (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    getPlaceholder: () => getPlaceholder(base).text(),
    isTagTiny: () => getTagDriver(base).isTiny(),
    isTagSmall: () => getTagDriver(base).isSmall(),
    isTagMedium: () => getTagDriver(base).isMedium(),
  };
};
