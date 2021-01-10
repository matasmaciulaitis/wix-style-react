import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const dropdownDriverFactory = (...args) => {
  WithDeprecationWarning(dropdownDriverFactory);

  return inputWithOptionsDriverFactory(...args);
};

export default dropdownDriverFactory;
