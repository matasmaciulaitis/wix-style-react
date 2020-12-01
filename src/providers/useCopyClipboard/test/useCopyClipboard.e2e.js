import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from './storySettings';
import inputUniDriverFactory from '../Input/Input.uni.driver';

describe('useCopyClipboard', () => {
  const storyUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.useCopyClipboard,
  });
  const inputDriverCopy = inputUniDriverFactory({
    dataHook: storySettings.inputDriverCopy,
  });
  const inputDriverPaste = inputUniDriverFactory({
    dataHook: storySettings.inputDriverPaste,
  });

  beforeEach(done => {
    browser.get(storyUrl);
    waitForVisibilityOf(
      [inputDriverCopy.element(), inputDriverPaste.element()],
      'Can not find Input with useCopyClipboard',
    ).then(done);
  });

  eyes.it('should copy text to clipboard', async () => {
    await inputDriverCopy.click();
    await inputDriverPaste.click();
    await browser
      .actions()
      .sendKeys(
        protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.INSERT),
      )
      .perform();
    expect(await inputDriverPaste.getText()).toBe('https://www.wix.com');
  });
});
