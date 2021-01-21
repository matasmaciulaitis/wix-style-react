import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * An uncontrolled time input component with a stepper and am/pm support
 */
class TimeInput extends Component {
  render() {
    const { defaultValue, formatOptions } = this.props;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      ...formatOptions,
    };
    const intl = new Intl.DateTimeFormat('default', options);

    return <div>{intl.format(defaultValue)}</div>;
  }
}

TimeInput.displayName = 'TimeInput';

TimeInput.propTypes = {
  formatOptions: PropTypes.shape({
    hour12: PropTypes.bool,
    timeZone: PropTypes.string,
  }),
};

TimeInput.defaultProps = {};

export default TimeInput;
