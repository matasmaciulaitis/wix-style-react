import { toggleSwitchDriverFactory as coreToggleSwitchDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const toggleSwitchDriverFactory = ({ element, eventTrigger }) => {
  WithDeprecationWarning(toggleSwitchDriverFactory);

  const coreToggleSwitchDriver = coreToggleSwitchDriverFactory({
    element,
    eventTrigger,
  });

  return {
    ...coreToggleSwitchDriver,
    /** Get Toggle Switch size */
    getSize: () => element.getAttribute('data-size'),

    /** Get Toggle Switch skin */
    getSkin: () => element.getAttribute('data-skin'),
  };
};

export default toggleSwitchDriverFactory;
