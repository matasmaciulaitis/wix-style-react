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
                dataHook={dataHooks.avatarGroupItem}
                key={key}
                {...item}
                className={classes.avatar}
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
                dataHook={dataHooks.avatarGroupItem}
                key={key}
                {...item}
                className={classes.avatar}
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
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /**
   * Sets the appearance of the Avatars
   */
  type: PropTypes.oneOf(['stretched', 'condensed']),

  /**
   * Sets the size of the Avatar
   */
  size: PropTypes.oneOf(['medium', 'small']),

  /**
   * Show divider on the side of the first Avatar
   */
  showDivider: PropTypes.bool,

  /**
   * Sets the number of Avatars to display
   */
  maxItems: PropTypes.number,

  /**
   * An array of Avatars
   */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AvatarGroup.defaultProps = {
  type: 'stretched',
  size: 'medium',
  showDivider: false,
  maxItems: 5,
};

export default AvatarGroup;
