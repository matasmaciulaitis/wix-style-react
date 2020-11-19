import React from 'react';
import { st, classes } from './BadgeSelectItem.st.css';
import PropTypes from 'prop-types';
import ListItemSelect from '../ListItemSelect';

const BadgeOption = props => {
  const {
    dataHook,
    skin,
    text,
    subtitle,
    ellipsis,
    selected,
    highlighted,
    disabled,
    className,
  } = props;

  const prefix = <div className={st(classes.marker, { skin })} />;

  return (
    <ListItemSelect
      className={className}
      title={text}
      ellipsis={ellipsis}
      dataHook={dataHook}
      prefix={prefix}
      selected={selected}
      highlighted={highlighted}
      disabled={disabled}
      subtitle={subtitle}
    />
  );
};

BadgeOption.propTypes = {
  dataHook: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  skin: PropTypes.string.isRequired,
  ellipsis: PropTypes.bool,
  selected: PropTypes.bool,
  highlighted: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default BadgeOption;

export const badgeSelectItemBuilder = ({
  id,
  className,
  text,
  skin,
  subtitle,
  ellipsis,
  disabled,
  dataHook,
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
  value: ({ selected, hovered, disabled }) => (
    <BadgeOption
      dataHook={dataHook}
      className={className}
      skin={skin}
      text={text}
      subtitle={subtitle}
      ellipsis={ellipsis}
      selected={selected}
      highlighted={hovered}
      disabled={disabled}
    />
  ),
});
