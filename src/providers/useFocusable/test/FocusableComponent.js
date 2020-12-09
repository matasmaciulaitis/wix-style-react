import React from 'react';
import useFocusable from '../useFocusable';
import { st, classes } from './FocusableComponent.st.css';

const FocusableComponent = ({ disabled }) => {
  const { focus, focusVisible, markFocused, markBlurred } = useFocusable({
    disabled,
  });

  return (
    <div
      onFocus={markFocused}
      onBlur={markBlurred}
      className={st(classes.root, {
        focus,
        focusVisible,
      })}
      data-hook="focusable-component"
    >
      Hello
    </div>
  );
};

export default FocusableComponent;
