import React from 'react';
import PropTypes from 'prop-types';
import { Animator } from 'wix-animations';
import { classes } from './Collapse.st.css';

// Returns the height of element including vertical margin
export const getElementHeight = element => {
  const elementStyles = window.getComputedStyle(element);
  const marginTop = parseInt(
    elementStyles.getPropertyValue('margin-top') || 0,
    10,
  );
  const marginBottom = parseInt(
    elementStyles.getPropertyValue('margin-bottom') || 0,
    10,
  );
  return element.scrollHeight + marginTop + marginBottom;
};

/** `<Collapse/>` component is used for hideable content.
 *
 * Easily create accordions or within `<Card/>` to collapse its `<Card.Content/>`.
 */
const Collapse = ({ children, open, dataHook }) => (
  <Animator
    show={open}
    height={getElementHeight}
    data-hook={dataHook}
    className={classes.collapse}
    children={children}
  />
);

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  dataHook: PropTypes.string,
};

Collapse.defaultProps = {
  open: true,
};

export default Collapse;
