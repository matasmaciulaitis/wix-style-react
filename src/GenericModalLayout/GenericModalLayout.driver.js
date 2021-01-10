import { isClassExists } from '../../test/utils';

const genericModalLayoutDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    isFullscreen: () => isClassExists(element, 'fullscreenContainer'),
  };
};

export default genericModalLayoutDriverFactory;
