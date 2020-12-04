import React from 'react';
import PropTypes from 'prop-types';

import { dataHooks } from './constants';
import useCopyClipboard from '../providers/useCopyClipboard';

function CopyClipboard(props) {
  const { dataHook, className, children, value, onCopy, resetTimeout } = props;
  const { isCopied, copyToClipboard } = useCopyClipboard({
    value,
    onCopy,
    resetTimeout,
  });
  const targetRef = React.createRef();

  return (
    <div className={className} data-hook={dataHook}>
      {children({
        copyToClipboard: () => copyToClipboard(),
        isCopied,
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

  /** Interval after which state of whether value was copied is reset */
  resetTimeout: PropTypes.number,
};

CopyClipboard.defaultProps = {
  children: () => {},
};

export default CopyClipboard;
