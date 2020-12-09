import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Singleton for managing current input method (keyboard or mouse).
 */
const inputMethod = new (class {
  // Default is keyboard in case an element is focused programmatically.
  method = 'keyboard';
  subscribers = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', () => this.setMethod('mouse'));
      window.addEventListener('keydown', () => this.setMethod('keyboard'));
      // We need to listen on keyUp, in case a TAB is made from the browser's address-bar,
      // so the keyDown is not fired, only the keyUp.
      window.addEventListener('keyup', () => this.setMethod('keyboard'));
    }
  }

  subscribe = (target, callback) => this.subscribers.set(target, callback);

  unsubscribe = target => this.subscribers.delete(target);

  /**
   * Is the current input method `keyboard`. if `false` is means it is `mouse`
   */
  isKeyboard = () => this.method === 'keyboard';

  setMethod(method) {
    if (method !== this.method) {
      this.method = method;
      this.subscribers.forEach(f => f());
    }
  }
})();

const useFocusable = ({ disabled }) => {
  const [focus, setFocus] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  const markAsFocused = useCallback(() => {
    setFocus(true);
    setFocusVisible(inputMethod.isKeyboard());
  }, []);
  const markAsBlurred = useCallback(() => {
    setFocus(false);
    setFocusVisible(false);
  }, []);

  const $this = useRef();
  useEffect(() => {
    const subscribe = () =>
      inputMethod.subscribe($this, () => {
        if (inputMethod.isKeyboard()) {
          setFocusVisible(true);
        }
      });
    const unsubscribe = () => inputMethod.unsubscribe($this);

    if (focus) {
      subscribe();
    } else {
      unsubscribe();
    }
    return () => unsubscribe();
  }, [focus]);

  const prevDisabledRef = useRef(disabled);
  useEffect(() => {
    /*
      in case when button was focused and then become disabled,
      we need to trigger blur logic and remove all listers, as disabled button
      do not trigger onFocus and onBlur events
    */
    const prevDisabled = prevDisabledRef.current;
    const isFocused = focus || focusVisible;
    const isBecomeDisabled = !prevDisabled && disabled;
    if (isFocused && isBecomeDisabled) {
      markAsBlurred();
    }
    prevDisabledRef.current = disabled;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return {
    focus,
    focusVisible,
    markAsFocused,
    markAsBlurred,
  };
};

export default useFocusable;
