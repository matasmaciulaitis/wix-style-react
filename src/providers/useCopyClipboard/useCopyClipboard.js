import { useState, useCallback, useRef } from 'react';
import { toggleSelection } from './toggleSelection';

/**
 * @typedef {Object} Clipboard
 * @prop {boolean} copied - a return boolean with status of clipboard action
 * @prop {function} copyToClipboard - a return function that allows to initiate copying
 * @prop {function} resetStatus - an optional return function
 */

/**
 * A custom hook for copying to clipboard. Returns copying to clipboard status and function to initiate copying to clipboard
 * @param {string} value -  a string that should be copied to clipboard
 * @param {function} onCopy - an optional parameter to apply additional logic when copying to clipboard
 * @return {Clipboard}
 */

function useCopyClipboard(value, onCopy) {
  const [copied, setCopied] = useState(false);
  const range = document.createRange();
  const newContainer = useRef(document.createElement('span'));
  const selection = document.getSelection();

  const copyToClipboard = useCallback(() => {
    const reselectPrevious = toggleSelection();
    const container = newContainer.current;
    const registerCopyEvent = () => {
      container.textContent = value;
      container.style.MozUserSelect = 'text';
      container.style.msUserSelect = 'text';
      container.style.userSelect = 'text';
      container.addEventListener('copy', event => {
        event.preventDefault();
        if (event.clipboardData === 'undefined') {
          window.clipboardData.clearData();
          window.clipboardData.setData('text', value);
        } else {
          event.clipboardData.setData('text/plain', value);
        }
        event.stopPropagation();
        if (onCopy) onCopy(event.clipboardData);
      });
      document.body.appendChild(container);
      return container;
    };

    const copy = () => {
      // Toggle selection is needed in case user has selected an item on the page on the time of executing copying to clipboard
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
      reselectPrevious();
    };

    resetState();
    registerCopyEvent();
    copy();
    cleanup();
  }, [value, onCopy, range, newContainer, selection]);

  const resetState = () => {
    setCopied(false);
  };

  return { copied, copyToClipboard, resetState };
}

export default useCopyClipboard;
