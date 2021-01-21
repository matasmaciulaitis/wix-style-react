import React from 'react';
import PropTypes from 'prop-types';
import TimeInputOld from './TimeInputOld';
import TimeInputNew from './TimeInputNew';
import moment from 'moment';

/**
 * An uncontrolled time input component with a stepper and am/pm support
 */

const TimeInput = props => {
  if (props.defaultValue instanceof Date) {
    return <TimeInputNew {...props} />;
  } else {
    return <TimeInputOld {...props} />;
  }
};

TimeInput.displayName = 'TimeInput';

TimeInput.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Should time be shown as "--:--" when disabled */
  dashesWhenDisabled: PropTypes.bool,

  /** The control's starting time */
  defaultValue: PropTypes.object,

  /** 24h mode  */
  disableAmPm: PropTypes.bool,

  /** Is disabled  */
  disabled: PropTypes.bool,

  /** Called upon blur */
  onChange: PropTypes.func,

  /** @deprecated  */
  rtl: PropTypes.bool,

  /** @deprecated */
  style: PropTypes.object,

  /** The input width behavior, as 'auto' it will shrink, at '100%' it will grow */
  width: PropTypes.oneOf(['auto', '100%']),

  /** Number of minutes to be changed on arrow click */
  minutesStep: PropTypes.number,

  /** Custom suffix, located before ticker */
  customSuffix: PropTypes.node,

  /** Error flag */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** When set to true, this input won't display status suffix */
  hideStatusSuffix: PropTypes.bool,

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** Display seconds  */
  showSeconds: PropTypes.bool,
};

TimeInput.defaultProps = {
  defaultValue: moment(),
  onChange: () => {},
  style: {},
  disableAmPm: false,
  disabled: false,
  dashesWhenDisabled: false,
  minutesStep: 20,
  width: 'auto',
  showSeconds: false,
};

export default TimeInput;
