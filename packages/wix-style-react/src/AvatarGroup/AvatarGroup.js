import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './AvatarGroup.st.css';
import Avatar from '../Avatar';
import Divider from '../Divider';
import { serializeItems, limitItemsLength } from './utils';
import MoreItemAvatar from './moreItemAvatar/MoreItemAvatar';
import { dataHooks } from './constants';

/** AvatarGroup */
class AvatarGroup extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      type,
      items,
      maxItems,
      moreItemContent,
      size,
    } = this.props;

    if (items === undefined) return null;

    const avatarSize = size === 'small' ? 'small' : 'medium';
    const itemsMaxLength = maxItems < 2 ? 2 : maxItems;
    const normalizedItems = serializeItems(items, avatarSize);
    const avatars = limitItemsLength(
      normalizedItems,
      items.length,
      itemsMaxLength,
      avatarSize,
      classes.moreItemAvatar,
    );

    return (
      <div
        className={st(classes.root, { size: avatarSize, type }, className)}
        data-hook={dataHook}
      >
        {avatars.map((item, index) => {
          const key = `${Object.values(item)}`;
          if (index === 0 && this.props.showDivider && items.length > 1) {
            return [
              <Avatar
                tabIndex={-1}
                dataHook={dataHooks.avatarGroupItem}
                key={key}
                {...item}
                className={classes.avatarItem}
              />,
              <Divider
                key={key + 'divider'}
                direction={'vertical'}
                className={st(classes.divider, { size: avatarSize, type })}
              />,
            ];
          }
          if (item.isMoreItem) {
            return (
              <MoreItemAvatar
                {...item}
                key={key}
                render={content => content(moreItemContent)}
              />
            );
          } else {
            return (
              <Avatar
                tabIndex={-1}
                dataHook={dataHooks.avatarGroupItem}
                key={key}
                {...item}
                className={classes.avatarItem}
              />
            );
          }
        })}
      </div>
    );
  }
}

AvatarGroup.displayName = 'AvatarGroup';

AvatarGroup.propTypes = {
  /**
   * Applies a data-hook HTML attribute that can be used in the tests
   */
  dataHook: PropTypes.string,

  /**
   * Allows to apply a CSS class to the component’s root element
   */
  className: PropTypes.string,

  /**
   * Changes the way avatars are displayed inside the group.
   */
  type: PropTypes.oneOf(['stretched', 'condensed']),

  /**
   * Changes the size of avatars in the group
   */
  size: PropTypes.oneOf(['medium', 'small']),

  /**
   * Separates the first avatar with a divider  from the rest of the group
   */
  showDivider: PropTypes.bool,

  /**
   * Sets the maximum number of avatars to be displayed. Number which exceeds this limit will be hidden under the “N+” item.
   */
  maxItems: PropTypes.number,

  /**
   * Use to pass an array of avatars
   */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * Use to make the ‘N+’ indication clickable.
   */
  moreItemContent: PropTypes.node,
};

AvatarGroup.defaultProps = {
  type: 'stretched',
  size: 'medium',
  showDivider: false,
  maxItems: 5,
};

export default AvatarGroup;
