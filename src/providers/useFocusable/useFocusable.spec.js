import * as React from 'react';
import { render } from '@testing-library/react';
import FocusableComponent from './test/FocusableComponent';
import { focusableComponentDriverFactory } from './test/FocusableComponent.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const FocusableComponentTestkit = uniTestkitFactoryCreator(
  focusableComponentDriverFactory,
);

const createDriver = ui => {
  const { container } = render(ui);
  const driver = FocusableComponentTestkit({
    wrapper: container,
    dataHook: 'focusable-component',
  });
  return driver;
};

describe('FocusableHOC', () => {
  describe('Focusable', () => {
    const expectKeyboardFocused = async driver => {
      expect(await driver.hasFocusState()).toBe(true);
      expect(await driver.hasFocusVisibleState()).toBe(true);
    };

    const expectNotFocused = async driver => {
      expect(await driver.hasFocusState()).toBe(false);
      expect(await driver.hasFocusVisibleState()).toBe(false);
    };

    const expectMouseFocused = async driver => {
      expect(await driver.hasFocusState()).toBe(true);
      expect(await driver.hasFocusVisibleState()).toBe(false);
    };

    beforeAll(() => {
      // Previous tests may trigger a `mousedown` event, so we need to trigger a `keydown` event as
      // the default input is keyboard (some tests rely on this default behaviour).
      document.dispatchEvent(new Event('keydown', { bubbles: true }));
    });

    beforeEach(() => {
      // Reseting modules, in order to reset the FocusableHOC.InputMethod.method state.
      if (typeof jest.resetModules === 'function') {
        jest.resetModules();
      }
      // TODO: find a way to reset the eventHandlers which are added to the window.
    });

    it('should not have focus nor focus-visible [given] initial render', async () => {
      const driver = createDriver(<FocusableComponent />);

      expectNotFocused(driver);
    });

    it('should have focus and focus-visible [when] focused programatically', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.focus();
      // Default input is keyboard
      expectKeyboardFocused(driver, 'after focus');
    });

    it('should have focus and focus-visible [when] tabbed in', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.tabIn();
      expectKeyboardFocused(driver, 'after focus');
    });

    it('should have focus and focus-visible [when] tabbed in withot keyDown', async () => {
      // This test case checks a scenario when the focus is on the browser's
      // url input, and we press tab. The keyDown is not fired.
      const driver = createDriver(<FocusableComponent />);

      await driver.focus();
      await driver.fireKeyUp();
      expectKeyboardFocused(driver, 'after focus');
    });

    it('should not have focus nor focus-visible [when] blured programatically [given] keyboard focused', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.tabIn();
      expectKeyboardFocused(driver, 'after focus');

      await driver.blur();
      expectNotFocused(driver, 'after blur');
    });

    describe('Given `onFocus`', () => {
      it('callback should not have focus nor focus-visible [when] keyboard focused', async () => {
        const onFocus = () => ({});

        const driver = createDriver(<FocusableComponent onFocus={onFocus} />);

        await driver.tabIn();
        expectNotFocused(driver);
      });
      it('callback with focus method calling should have focus and focus-visible [when] keyboard focused', async () => {
        const onFocus = (event, triggers) => triggers.focus();

        const driver = createDriver(<FocusableComponent onFocus={onFocus} />);

        await driver.tabIn();
        expectKeyboardFocused(driver, 'after focus');
      });
    });

    describe('Given `onBlur`', () => {
      it('callback should not blur focused component [when] keyboard focused', async () => {
        const onBlur = () => ({});

        const driver = createDriver(<FocusableComponent onBlur={onBlur} />);

        await driver.tabIn();
        expectKeyboardFocused(driver, 'after focus');

        await driver.blur();
        expectKeyboardFocused(driver, 'after focus');
      });

      it('callback with blur method calling should blur focused component [when] keyboard focused', async () => {
        const onBlur = (event, triggers) => triggers.blur();

        const driver = createDriver(<FocusableComponent onBlur={onBlur} />);

        await driver.tabIn();
        expectKeyboardFocused(driver, 'after focus');

        await driver.blur();
        expectNotFocused(driver);
      });
    });

    it('should have focus but not focus-visible [when] clicked', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.click();
      expectMouseFocused(driver, 'after click');
    });

    /**
     * This test checks that the InputMethod.method state is updated to `keyboard` after
     * is was set to `mouse`.
     */
    it('should have focus and focus-visible [when] focused [given] mouseDown and blur', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.click();
      expectMouseFocused(driver, 'after click');

      await driver.blur();
      expectNotFocused(driver, 'after blur');

      await driver.tabIn();
      expectKeyboardFocused(driver, 'after focus');
    });

    it('should not be focused [when] tabbed out [given] focused by mouse', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.click();
      expectMouseFocused(driver, 'after click');

      await driver.tabOut();
      expectNotFocused(driver, 'after tab');
    });

    it('should have focus and focus-visible, when: any keyboard key pressed [given] focused by mouse', async () => {
      const driver = createDriver(<FocusableComponent />);

      await driver.click();
      expectMouseFocused(driver, 'after click');

      await driver.fireKeyDown();
      expectKeyboardFocused(driver, 'after pressing space');
    });
  });
});
