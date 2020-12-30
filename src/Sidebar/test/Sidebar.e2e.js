import { browser } from 'protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { SidebarTestkit } from '../../../testkit/protractor';
import { storySettings } from '../docs/storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;

describe('Sidebar', () => {
  const eyes = eyesItInstance();
  let driver;

  const createDriver = async (dataHook = storySettings.dataHook) => {
    driver = SidebarTestkit({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Sidebar');

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
