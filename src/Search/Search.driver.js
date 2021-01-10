import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const searchDriverFactory = args => {
  WithDeprecationWarning(searchDriverFactory);

  const { element } = args;

  const inputWithOptionsDriver = inputWithOptionsDriverFactory({
    ...args,
    element:
      element && element.querySelector('[data-hook="search-inputwithoptions"]'),
  });

  return {
    ...inputWithOptionsDriver,
    driver: {
      ...inputWithOptionsDriver.driver,
      isExpandable: () => element.hasAttribute('data-expandable'),
      isCollapsed: () => element.hasAttribute('data-collapsed'),
    },
  };
};

export default searchDriverFactory;
