import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../ListItemSelect';
import Text from '../Text';
import Box from '../Box';
import LocationIcon from 'wix-ui-icons-common/Location';
import { st, classes } from './AddressInputOption.st.css';

/** This component is responsible of transforming a given prediction object and display-props into a valid address option according to the UX guidelines. */
class AddressInputOption extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      secondaryLabel,
      optionLayout,
      mainLabel,
      suffix,
      prefix,
      disabled,
      selected,
      ...restProps
    } = this.props;

    const textProps = {
      tagName: 'div',
      ellipsis: true,
      showDelay: 300,
      skin: disabled ? 'disabled' : 'standard',
      light: selected,
    };

    const secondaryTextProps = {
      ...textProps,
      light: !disabled,
      secondary: !selected,
    };

    return (
      <ListItemSelect
        dataHook={dataHook}
        className={st(classes.root, { optionLayout }, className)}
        subtitle={<Text {...secondaryTextProps}>{secondaryLabel}</Text>}
        title={<Text {...textProps}>{mainLabel}</Text>}
        suffix={<Box>{suffix}</Box>}
        prefix={<Box>{prefix}</Box>}
        ellipsis
        disabled={disabled}
        selected={selected}
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
  secondaryLabel,
  suffix,
  disabled,
  dataHook,
  optionLayout,
  onClick,
  displayLabel,
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
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
  optionLayout: PropTypes.oneOf(['single-line', 'double-line']),

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
  optionLayout: 'single-line',
  prefix: <LocationIcon />,
};

export default AddressInputOption;
