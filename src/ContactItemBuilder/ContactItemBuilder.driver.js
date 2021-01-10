import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import textDriverFactory from '../Text/Text.driver';
import { dataHooks } from './ContactItemBuilderDataHooks';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const contactItemBuilderDriverFactory = ({ element }) => {
  WithDeprecationWarning(contactItemBuilderDriverFactory);

  const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

  const titleDriver = textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.pickerOptionTitle,
  });

  const subtitleDriver = textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.pickerOptionSubtitle,
  });

  return {
    exists: () => !!element,
    getTitle: () => titleDriver.getText(),
    getSubtitle: () => subtitleDriver.getText(),
  };
};

export default contactItemBuilderDriverFactory;
