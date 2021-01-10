import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const autoCompleteDriverFactory = (...args) => {
  WithDeprecationWarning(autoCompleteDriverFactory);

  return inputWithOptionsDriverFactory(...args);
};

export default autoCompleteDriverFactory;
