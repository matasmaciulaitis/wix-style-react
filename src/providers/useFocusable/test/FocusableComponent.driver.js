import { StylableDOMUtil } from '@stylable/dom-test-kit';
import stylesheet from './FocusableComponent.st.css';
import {
  ReactBase,
  baseUniDriverFactory,
} from '../../../../test/utils/unidriver';

const stylableUtil = new StylableDOMUtil(stylesheet);

const hasFocusState = element => stylableUtil.hasStyleState(element, 'focus');
const hasFocusVisibleState = element =>
  stylableUtil.hasStyleState(element, 'focus-visible');

export const focusableComponentDriverFactory = base => {
  const reactBase = ReactBase(base);
  const focus = async () => reactBase.focus();
  const blur = async () => reactBase.blur();
  const fireMouseDown = () =>
    window.dispatchEvent(new window.Event('mousedown'));
  const fireMouseUp = () => window.dispatchEvent(new window.Event('mouseup'));
  const fireKeyDown = () => window.dispatchEvent(new window.Event('keydown'));
  const fireKeyUp = () => window.dispatchEvent(new window.Event('keyup'));
  const tabOut = async () => {
    await fireKeyDown();
    await blur();
    await fireKeyUp();
  };
  const tabIn = async () => {
    await fireKeyDown();
    await focus();
    await fireKeyUp();
  };
  const click = async () => {
    await fireMouseDown();
    await focus();
    await fireMouseUp();
  };
  return {
    ...baseUniDriverFactory(base),
    hasFocusState: async () => hasFocusState(await base.getNative()),
    hasFocusVisibleState: async () =>
      hasFocusVisibleState(await base.getNative()),
    focus,
    blur,
    fireMouseDown,
    fireKeyDown,
    fireKeyUp,
    tabOut,
    tabIn,
    click,
  };
};
