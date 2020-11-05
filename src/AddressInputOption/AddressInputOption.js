import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../ListItemSelect';
import Text from '../Text';
import Box from '../Box';
import { st, classes } from './AddressInputOption.st.css';
import { DATA_ATTR, OPTION_LAYOUT } from './constants';
import LocationIcon from 'wix-ui-icons-common/Location';

/** This component is responsible of transforming a given prediction object and display-props into a valid address option according to the UX guidelines. */
class AddressInputOption extends React.PureComponent {
  _renderTitle = () => {
    const { mainLabel, secondaryLabel } = this.props;
    return (
      <Box display="flex" margin="auto">
        <Text>{mainLabel}</Text>
        {secondaryLabel && (
          <Box marginLeft="6px">
            <Text light secondary weight="thin">
              {secondaryLabel}
            </Text>
          </Box>
        )}
      </Box>
    );
  };

  render() {
    const {
      dataHook,
      className,
      secondaryLabel,
      optionLayout,
      mainLabel,
      suffix,
      prefix,
      ...restProps
    } = this.props;

    return (
      <ListItemSelect
        dataHook={dataHook}
        className={className}
        subtitle={
          optionLayout === OPTION_LAYOUT.SINGLE_LINE ? null : (
            <Text light secondary weight="thin">
              {secondaryLabel}
            </Text>
          )
        }
        title={
          optionLayout === OPTION_LAYOUT.SINGLE_LINE
            ? this._renderTitle()
            : mainLabel
        }
        suffix={<Box>{suffix}</Box>}
        prefix={<Box>{prefix}</Box>}
        {...{ [DATA_ATTR.OPTION_LAYOUT]: optionLayout }}
        {...restProps}
      />
    );
  }
}

export const addressInputOptionBuilder = ({
  id,
  className,
  prefix,
  mainLabel,
  displayLabel,
  secondaryLabel,
  suffix,
  disabled,
  size,
  ellipsis,
  dataHook,
  optionLayout,
  onClick,
}) => ({
  id,
  disabled,
  overrideStyle: true,
  label: displayLabel,
  value: ({ selected, hovered, ...rest }) => (
    <AddressInputOption
      optionLayout={optionLayout}
      dataHook={dataHook}
      className={className}
      prefix={prefix}
      mainLabel={mainLabel}
      secondaryLabel={secondaryLabel}
      suffix={suffix}
      size={size}
      ellipsis={ellipsis}
      selected={selected}
      highlighted={hovered}
      onClick={onClick}
      {...rest}
    />
  ),
});

AddressInputOption.displayName = 'AddressInputOption';

AddressInputOption.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** The full address description. will be displayed in the input after selection.*/
  displayLabel: PropTypes.string,

  /** The main part of the address, will be displayed at the beginning of the line with noticeable style or at the top line when lineStyle=’’double-line”*/
  mainLabel: PropTypes.string,

  /** The secondary part of the address, will be displayed at the end of the line with lighter style or at the bottom line when lineStyle=’’double-line”*/
  secondaryLabel: PropTypes.string,

  /** Determines the options layout to display*/
  optionLayout: PropTypes.oneOf([
    OPTION_LAYOUT.SINGLE_LINE,
    OPTION_LAYOUT.DOUBLE_LINE,
  ]),

  /** Shows the default location icon next to the option, can receive alternative prefix node or a `false` value to hide it.*/
  prefix: PropTypes.node,

  /** Will show the provided node as the option suffix. */
  suffix: PropTypes.node,

  /** If true, the option is selected */
  selected: PropTypes.bool,

  /** If true, the option is highlighted */
  highlighted: PropTypes.bool,

  /** If true, the option is disabled */
  disabled: PropTypes.bool,

  /** Callback function triggered when option is clicked */
  onClick: PropTypes.func,
};

AddressInputOption.defaultProps = {
  optionLayout: OPTION_LAYOUT.SINGLE_LINE,
  prefix: <LocationIcon />,
};

export default AddressInputOption;
