import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './AvatarGroup.st.css';
import Avatar from '../Avatar';
import Divider from '../Divider';
import Button from '../Button';
import { serializeItems, limitItemsLength } from './utils';

/** AvatarGroup */
class AvatarGroup extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      type,
      items,
      maxItems,
      moreItemRenderProp,
      size,
    } = this.props;

    const avatarSize = size === 'small' ? 'small' : 'medium';
    const itemsMaxLength = maxItems < 2 ? 2 : maxItems;
    const serializedItems = serializeItems(items, avatarSize);
    const avatars = limitItemsLength(
      serializedItems,
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
          if (index === 0 && this.props.showDivider && items.length > 1) {
            return [
              <Avatar
                key={index * 10 + 1}
                {...item}
                className={classes.avatar}
              />,
              <Divider
                key={index + index}
                direction={'vertical'}
                className={st(classes.divider, { size: avatarSize, type })}
              />,
            ];
          }
          return (
            <Avatar
              key={index}
              {...item}
              className={
                item.isMoreItem
                  ? st(classes.avatar, classes.moreItemAvatar)
                  : classes.avatar
              }
              onClick={item.isMoreItem ? moreItemRenderProp : null}
            />
          );
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
  divider: PropTypes.bool,

  /**
   * Sets the number of Avatars to display
   */
  maxAvatarLimit: PropTypes.number,

  avatars: PropTypes.arrayOf(Avatar),
};

const tempAvatarGroupItems = [
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    // name: "",
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    // color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    // color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    // color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    // color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    // imgProps: {src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Mao-the-dachshund-wikipedia.png"},
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
];

AvatarGroup.defaultProps = {
  type: 'stretched',
  size: 'medium',
  showDivider: false,
  maxItems: 5,
  items: tempAvatarGroupItems,
  moreItemRenderProp: ({ open, close, selectedOption = {} }) => (
    <Button onMouseEnter={open} onMouseLeave={close}>
      {selectedOption.value || 'Hover me'}
    </Button>
  ),
};

export default AvatarGroup;
