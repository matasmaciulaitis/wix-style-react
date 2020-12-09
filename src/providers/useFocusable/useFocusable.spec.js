import * as React from 'react';
import { render } from '@testing-library/react';
import FocusableComponent from './test/FocusableComponent';
import { focusableComponentDriverFactory } from './test/FocusableComponent.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { act } from 'react-dom/test-utils';

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

      await expectNotFocused(driver);
    });

    it('should have focus and focus-visible [when] focused programatically', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.focus());
      // Default input is keyboard
      expectKeyboardFocused(driver, 'after focus');
    });

    it('should have focus and focus-visible [when] tabbed in', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.tabIn());
      await expectKeyboardFocused(driver, 'after focus');
    });

    it('should have focus and focus-visible [when] tabbed in withot keyDown', async () => {
      // This test case checks a scenario when the focus is on the browser's
      // url input, and we press tab. The keyDown is not fired.
      const driver = createDriver(<FocusableComponent />);

      await act(async () => {
        await driver.focus();
        await driver.fireKeyUp();
      });
      await expectKeyboardFocused(driver, 'after focus');
    });

    it('should not have focus nor focus-visible [when] blured programatically [given] keyboard focused', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.tabIn());
      await expectKeyboardFocused(driver, 'after focus');

      await act(async () => driver.blur());
      await expectNotFocused(driver, 'after blur');
    });

    it('should have focus but not focus-visible [when] clicked', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.click());
      await expectMouseFocused(driver, 'after click');
    });

    /**
     * This test checks that the InputMethod.method state is updated to `keyboard` after
     * is was set to `mouse`.
     */
    it('should have focus and focus-visible [when] focused [given] mouseDown and blur', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.click());
      await expectMouseFocused(driver, 'after click');

      await act(async () => driver.blur());
      await expectNotFocused(driver, 'after blur');

      await act(async () => driver.tabIn());
      await expectKeyboardFocused(driver, 'after focus');
    });

    it('should not be focused [when] tabbed out [given] focused by mouse', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.click());
      await expectMouseFocused(driver, 'after click');

      await act(async () => driver.tabOut());
      await expectNotFocused(driver, 'after tab');
    });

    it('should have focus and focus-visible, when: any keyboard key pressed [given] focused by mouse', async () => {
      const driver = createDriver(<FocusableComponent />);

      await act(async () => driver.click());
      await expectMouseFocused(driver, 'after click');

      await act(async () => driver.fireKeyDown());
      await expectKeyboardFocused(driver, 'after pressing space');
    });
  });
});
