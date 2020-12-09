import React from 'react';
import useFocusable from '../useFocusable';
import { st, classes } from './FocusableComponent.st.css';

const FocusableComponent = ({ disabled }) => {
  const { focus, focusVisible, markAsFocused, markAsBlurred } = useFocusable({
    disabled,
  });

  return (
    <div
      onFocus={markAsFocused}
      onBlur={markAsBlurred}
      className={st(classes.root, {
        focus,
        'focus-visible': focusVisible,
      })}
      data-hook="focusable-component"
    >
      Hello
    </div>
  );
};

export default FocusableComponent;
