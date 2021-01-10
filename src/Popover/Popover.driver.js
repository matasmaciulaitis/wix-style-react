import { popoverDriverFactory as basePopoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/Popover.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const popoverDriverFactory = (...args) => {
  WithDeprecationWarning(popoverDriverFactory);

  return basePopoverDriverFactory(...args);
};

export default popoverDriverFactory;
