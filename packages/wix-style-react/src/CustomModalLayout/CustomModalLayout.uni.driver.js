import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const customModalLayoutDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),

    /** Returns if the modal content has padding */
    hasContentPadding: async () =>
      (await base.attr('data-contentpadding')) === 'true',
  };
};
