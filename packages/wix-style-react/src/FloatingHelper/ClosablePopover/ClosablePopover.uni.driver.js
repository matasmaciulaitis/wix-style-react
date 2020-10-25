import popoverDriverFactory from '../../Popover/Popover.uni.driver';

export const closablePopoverUniDriverFactory = (base, body) => {
  const popoverDriver = popoverDriverFactory(base, body);

  return {
    ...popoverDriver,
    /** Checks if the popover's content is open */
    isOpened: popoverDriver.isContentElementExists,
  };
};
