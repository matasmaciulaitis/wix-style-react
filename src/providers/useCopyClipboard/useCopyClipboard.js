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
 * @param {Object} props -  an object for value, onCopy, and resetInerval props
 * @param {string} props.value -  a string that should be copied to clipboard
 * @param {function} [props.onCopy] - an optional parameter to apply additional logic when copying to clipboard
 * @param {number} [props.resetInterval] - an optional parameter to set interval which after copying to clipboard will reset status
 * @return {Clipboard}
 */

function useCopyClipboard({ value, onCopy, resetInterval }) {
  const [isCopied, setCopied] = useState(null);
  const range = document.createRange();
  const newContainer = useRef(document.createElement('span'));
  const selection = document.getSelection();

  const copyToClipboard = useCallback(() => {
    const registerCopyEvent = () => {
      container.style.all = 'unset';
      container.textContent = value;
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
      return container;
    };

    const copy = () => {
      range.selectNodeContents(newContainer.current);
      selection.addRange(range);
      setCopied(document.execCommand('copy'));
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
      // Toggle selection is needed in case user has selected an item on the page on the time of executing copying to clipboard
      reselectPrevious();
    };

    const reselectPrevious = toggleSelection();
    const container = newContainer.current;
    registerCopyEvent();
    copy();
    cleanup();
  }, [value, onCopy, range, newContainer, selection]);

  const reset = () => {
    setCopied(null);
  };

  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(null), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  useEffect(() => () => setCopied(null), [value]);

  return { isCopied, copyToClipboard, reset };
}

export default useCopyClipboard;
