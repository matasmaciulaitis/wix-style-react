import React from 'react';
import PropTypes from 'prop-types';

import { dataHooks } from './constants';
import useCopyClipboard from '../providers/useCopyClipboard';

function CopyClipboard(props) {
  const { dataHook, className, children, value, onCopy } = props;
  const { copyToClipboard } = useCopyClipboard(value, onCopy);
  const targetRef = React.createRef();

  return (
    <div className={className} data-hook={dataHook}>
      {children({
        copyToClipboard: () => copyToClipboard(),
        targetHook: dataHooks.target,
        targetRef,
      })}
    </div>
  );
}

CopyClipboard.displayName = 'CopyClipboard';

CopyClipboard.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Children render prop */
  children: PropTypes.func,

  /** onCopy callback */
  onCopy: PropTypes.func,

  /** Text to be added to clipboard */
  value: PropTypes.string,
};

CopyClipboard.defaultProps = {
  children: () => {},
};

export default CopyClipboard;
