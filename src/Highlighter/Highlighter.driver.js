import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const highlighterDriverFactory = ({ element }) => {
  WithDeprecationWarning(highlighterDriverFactory);

  return {
    exists: () => !!element,
    html: () => element.innerHTML,
    getElement: () => element,
  };
};

export default highlighterDriverFactory;
