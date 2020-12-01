/**
 * Function that deselects current selection
 * @return {function} returns a function that can be used to reselect previous selection
 */
export function toggleSelection() {
  const selection = document.getSelection();
  if (!selection.rangeCount) {
    return () => {};
  }
  let active = document.activeElement;

  const ranges = [];
  for (let i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  const activeTagName = active.tagName.toUpperCase();

  if (activeTagName === 'INPUT' || activeTagName === 'TEXTAREA') {
    active.blur();
  } else {
    active = null;
  }

  selection.removeAllRanges();
  return () => {
    selection.type === 'Caret' && selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active && active.focus();
  };
}
