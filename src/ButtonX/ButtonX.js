import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './ButtonX.st.css';
import ButtonXBase from './ButtonXBase';

/** ButtonX */
class ButtonX extends React.PureComponent {
  render() {
    const { className, priority, size, ...rest } = this.props;

    return (
      <ButtonXBase
        className={st(classes.root, { priority, size }, className)}
        {...rest}
      />
    );
  }
}

ButtonX.displayName = 'ButtonX';

ButtonX.propTypes = {
  ...ButtonXBase.PropTypes,

  /** Button priority */
  priority: PropTypes.oneOf(['primary', 'secondary']),

  /** Button size */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
};

ButtonX.defaultProps = {
  ...ButtonXBase.defaultProps,

  priority: 'primary',
  size: 'medium',
};

export default ButtonX;
