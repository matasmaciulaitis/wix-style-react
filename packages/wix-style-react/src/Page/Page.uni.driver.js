import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const pageUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    hasClass: name => base.hasClass(name),

    /** true if header background image exist */
    backgroundImageExists: () =>
      findByHook(base, dataHooks.pageBackgroundImage).exists(),

    /** true if gradient class name exist */
    gradientClassNameExists: () =>
      findByHook(base, dataHooks.pageGradientClassName).exists(),

    /** true if tail exist in DOM */
    tailExists: () => findByHook(base, dataHooks.pageTail).exists(),

    /** return container height */
    gradientContainerHeight: async () => {
      const pageGradient = await findByHook(
        base,
        dataHooks.pageGradientClassName,
      );
      return pageGradient._prop('style').then(style => style.height);
    },

    /** returns html in a string form */
    getPageHtml: () => base._prop('innerHTML'),
  };
};
