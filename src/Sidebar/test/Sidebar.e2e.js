import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { SidebarTestkit, ButtonTestkit } from '../../../testkit/protractor';
import { storySettings } from './storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;

describe('Sidebar', () => {
  let driver;

  const createDriver = async (dataHook = storySettings.dataHooks.sidebar) => {
    driver = SidebarTestkit({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Sidebar');

    return driver;
  };

  describe('Sidebar gradient', () => {
    beforeEach(async () => {
      await browser.get(createStoryUrl(testStoryNames.GRADIENT));
      await createDriver();
    });

    const clickAddItemButton = async () => {
      const buttonDriver = ButtonTestkit({
        dataHook: storySettings.dataHooks.addItemButton,
      });
      await buttonDriver.click();
    };

    const resizeBoxHeight = () => {
      return browser.executeScript(
        `document.querySelector(\'[data-hook="${storySettings.dataHooks.boxContainer}"]\').style.height = "150px"`,
      );
    };

    it('Should not show gradient when items list is smaller than list container', async () => {
      expect(driver.isGradientDisplayed()).toBe(false);
    });

    it('Should show gradient when items list is larger than list container', async () => {
      await clickAddItemButton();
      expect(driver.isGradientDisplayed()).toBe(true);
    });

    it('Should show gradient when container is resized to be smaller than items list', async () => {
      resizeBoxHeight();
      expect(driver.isGradientDisplayed()).toBe(true);
    });
  });
});
