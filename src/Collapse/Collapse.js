import React from 'react';
import PropTypes from 'prop-types';
import ReactCollapse from '@kunukn/react-collapse';

/** `<Collapse/>` component is used for hideable content.
 *
 * Easily create accordions or within `<Card/>` to collapse its `<Card.Content/>`.
 */
const Collapse = ({ children, open, dataHook }) => {
  return (
    <div data-hook={dataHook}>
      <ReactCollapse isOpen={open} transition="height 300ms" overflowOnExpanded>
        {state => state !== 'collapsed' && children}
      </ReactCollapse>
    </div>
  );
};

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
