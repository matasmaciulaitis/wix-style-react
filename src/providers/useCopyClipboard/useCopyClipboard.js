import { useState, useCallback, useRef, useEffect } from 'react';
import { toggleSelection } from './toggleSelection';

/**
 * @typedef {Object} Clipboard
 * @prop {boolean} isCopied - a return boolean with status of clipboard action
 * @prop {function} copyToClipboard - a return function that allows to initiate copying
 * @prop {function} resetState - an optional return function
 */

/**
 * A custom hook for copying to clipboard. Returns copying to clipboard status and function to initiate copying to clipboard
 * @param {Object} props -  an object for value, onCopy, and resetTimeout props
 * @param {string} props.value -  a string that should be copied to clipboard
 * @param {function} [props.onCopy] - an optional parameter to apply additional logic when copying to clipboard
 * @param {number} [props.resetTimeout] - an optional parameter to set interval which after copying to clipboard will reset status
 * @return {Clipboard}
 */

function useCopyClipboard({ value, onCopy, resetTimeout }) {
  const [isCopied, setCopied] = useState(null);
  const range = document.createRange();
  const newContainer = useRef(document.createElement('span'));
  const selection = document.getSelection();

  const copyToClipboard = useCallback(() => {
    const registerCopyEvent = () => {
      const container = newContainer.current;
      container.style.all = 'unset';
      container.textContent = value;
      container.style.whiteSpace = 'pre';
      container.style.MozUserSelect = 'text';
      container.style.msUserSelect = 'text';
      container.style.userSelect = 'text';
      container.addEventListener('copy', event => {
        event.stopPropagation();
        if (onCopy) {
          onCopy();
        }
      });
      document.body.appendChild(container);
    };

    const copy = () => {
      // Toggle selection returs a function that can be used to restore user selection afterwards copy command
      reselectPrevious = toggleSelection();
      range.selectNodeContents(newContainer.current);
      selection.addRange(range);
      setCopied(document.execCommand('copy'));
      reselectPrevious();
    };

    const cleanup = () => {
      if (selection) {
        if (typeof selection.removeRange === 'function') {
          selection.removeRange(range);
        } else {
          selection.removeAllRanges();
        }
        if (newContainer) document.body.removeChild(newContainer.current);
      }
    };

    let reselectPrevious = toggleSelection();
    registerCopyEvent();
    copy();
    cleanup();
  }, [value, onCopy, range, newContainer, selection]);

  const reset = () => {
    setCopied(null);
  };

  useEffect(() => {
    let timeout;
    if (isCopied && resetTimeout) {
      timeout = setTimeout(reset, resetTimeout);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetTimeout]);

  useEffect(() => () => reset(), [value]);

  return { isCopied, copyToClipboard, reset };
}

export default useCopyClipboard;
