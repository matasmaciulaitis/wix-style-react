import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './ButtonXBase.st.css';
import { dataHooks } from './constants';

/** ButtonX */
class ButtonX extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      children,
      prefix,
      suffix,
      onClick,
      onMouseEnter,
      onMouseLeave,
      fullWidth,
      disabled,
    } = this.props;

    return (
      <button
        className={st(
          classes.root,
          { stretch: fullWidth, disabled },
          className,
        )}
        data-hook={dataHook}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={classes.prefix} data-hook={dataHooks.prefix}>
          {prefix}
        </div>
        {children}
        <div className={classes.suffix} data-hook={dataHooks.suffix}>
          {suffix}
        </div>
      </button>
    );
  }
}

ButtonX.displayName = 'ButtonX';

ButtonX.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,

  fullWidth: PropTypes.bool,
};

ButtonX.defaultProps = {};

export default ButtonX;
