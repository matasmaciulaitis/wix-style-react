import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../ListItemSelect';
import Box from '../Box';
import { st, classes } from './AddressInputOption.st.css';
import { dataHooks } from './constants';
import LocationIcon from 'wix-ui-icons-common/Location';

/** This component is responsible of transforming a given prediction object and display-props into a valid address option according to the UX guidelines. */
class AddressInputOption extends React.PureComponent {
  _renderTitle = () => {
    const { secondaryLabel, mainLabel } = this.props;
    return (
      <Box display="flex" lineHeight="initial" fontSize="initial">
        <Text>{mainLabel}</Text>
        <Text dataHook={dataHooks.SUBTITLE} secondary size={'small'}>
          {secondaryLabel}
        </Text>
      </Box>
    );
  };

  render() {
    const {
      dataHook,
      className,
      displayLabel,
      secondaryLabel,
      optionLayout,
      mainLabel,
      suffix,
      prefix,
    } = this.props;

    return (
      <ListItemSelect
        dataHook={dataHook}
        className={className}
        subtitle={optionLayout === 'single-line' ? null : secondaryLabel}
        title={optionLayout === 'single-line' ? this._renderTitle() : mainLabel}
        suffix={suffix}
        prefix={prefix}
      />
    );
  }
}

AddressInputOption.displayName = 'AddressInputOption';

AddressInputOption.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** The full address description will be displayed in the input after selection.*/
  displayLabel: PropTypes.string,

  /** The main part of the address, will be displayed at the beginning of the line with noticeable style or at the top line when lineStyle=’’double-line”*/
  mainLabel: PropTypes.string.isRequired,

  /** The secondary part of the address, will be displayed at the end of the line with lighter style or at the bottom line when lineStyle=’’double-line”*/
  secondaryLabel: PropTypes.string,

  /** Determines the options layout to display*/
  optionLayout: PropTypes.oneOf(['single-line', 'double-line']),

  /** Shows the default location icon next to the option, can receive alternative prefix node or a `false` value to hide it.*/
  prefix: PropTypes.node,

  /** Will show the provided node as the option suffix. */
  suffix: PropTypes.node,
};

AddressInputOption.defaultProps = {
  optionLayout: 'single-line',
  prefix: <LocationIcon />,
};

export default AddressInputOption;
