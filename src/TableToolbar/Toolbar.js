import React from 'react';
import PropTypes from 'prop-types';
import { default as WixStyleReactDivider } from '../Divider';
import { st, classes } from './Toolbar.st.css';
import Text from '../Text';

export const Toolbar = ({ children }) => (
  <div className={classes.toolbar}>{children}</div>
);

Toolbar.displayName = 'Toolbar';

Toolbar.propTypes = {
  children: PropTypes.any, // TODO: validate children are of type <ItemGroup>
};

export const ItemGroup = ({ children, position }) => (
  <div className={st(classes.itemGroup, { position })}>{children}</div>
);

ItemGroup.displayName = 'Toolbar.ItemGroup';

ItemGroup.propTypes = {
  children: PropTypes.any, // TODO: validate children are either <Item> od <Divider>
  position: PropTypes.oneOf(['start', 'end']),
};

ItemGroup.defaultProps = {
  position: 'start',
};

export const Item = ({ children, layout }) => (
  <span className={st(classes.item, { layout })}>{children}</span>
);

Item.displayName = 'Toolbar.Item';

Item.propTypes = {
  children: PropTypes.any,
  layout: PropTypes.oneOf(['button']),
};

/**
 * Similar to the original WSR Label, but the label is displayed on the same line as the target element (and not above it).
 * TODO:; we might want to simply add this ability to the existing Label.
 */
export const Label = ({ children, ...rest }) => (
  <Text tagName="label" {...rest} className={classes.itemLabel}>
    {React.Children.toArray(children).map((c, index) =>
      typeof c === 'string' ? <span key={index}>{c}</span> : c,
    )}
  </Text>
);

Label.displayName = 'Toolbar.Label';

Label.propTypes = {
  children: PropTypes.any,
};

export const Divider = () => <WixStyleReactDivider direction="vertical" />;

Divider.displayName = 'Toolbar.Divider';

// Aliases for convenience
Toolbar.ItemGroup = ItemGroup;
Toolbar.Item = Item;
Toolbar.Label = Label;
Toolbar.Divider = Divider;
