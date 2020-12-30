import { browser } from 'protractor';
import {
  scrollToElement,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { sidebarTestkitFactory } from '../../../testkit/protractor';
import { storySettings } from './storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;

describe('Sidebar', () => {
  const eyes = eyesItInstance();
  let driver;

  const createDriver = async (dataHook = storySettings.dataHook) => {
    driver = sidebarTestkitFactory({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Sidebar');
    // await scrollToElement(await driver.element());

    return driver;
  };

  describe('Sidebar gradient', () => {
    beforeEach(async () => {
      await browser.get(createStoryUrl(testStoryNames.GRADIENT));
      await createDriver();
    });

    eyes.it.only(
      'Should not show gradient when items list is smaller than list container',
      async () => {},
    );

    eyes.it(
      'Should show gradient when items list is larger than list container',
      async () => {},
    );

    eyes.it(
      'Should show gradient when container is resized to ber smaller than items list',
      async () => {},
    );
  });
});
