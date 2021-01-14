import React from 'react';
import { st, classes } from './standard.st.css';
import ButtonX from '../ButtonX';

/** ButtonXStandard */
class ButtonXStandard extends React.PureComponent {
  render() {
    const { className, priority, disabled, ...rest } = this.props;

    return (
      <ButtonX
        className={st(classes.root, { priority, disabled }, className)}
        disabled={disabled}
        {...rest}
      />
    );
  }
}

ButtonXStandard.displayName = 'ButtonXStandard';

ButtonXStandard.propTypes = {
  ...ButtonX.PropTypes,
};

ButtonXStandard.defaultProps = {
  ...ButtonX.defaultProps,

  priority: 'primary',
  size: 'medium',
};

export default ButtonXStandard;
