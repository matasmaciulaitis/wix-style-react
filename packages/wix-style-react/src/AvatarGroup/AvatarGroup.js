import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './AvatarGroup.st.css';
import Avatar from '../Avatar';
import Divider from '../Divider';
import Button from '../Button';

/** AvatarGroup */
class AvatarGroup extends React.PureComponent {
  componentDidMount() {
    console.log('did mount');
  }

  render() {
    let {
      dataHook,
      className,
      type,
      items,
      maxItems,
      moreItemRenderProp,
    } = this.props;
    const size = this.props.size === 'small' ? 'small' : 'medium';

    const patternColor = [
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
    ];
    const getRandomColorPattern = () => {
      const firstIndex = Math.floor(Math.random() * 6);
      const lastIndex = firstIndex + 6;
      return patternColor.slice(firstIndex, lastIndex);
    };
    const myPatternColors = getRandomColorPattern();
    const serializeItems = items =>
      items.map((item, index) => {
        const size = this.props.size === 'small' ? 'size24' : 'size30';
        const shape = 'circle';
        const {
          ariaLabel,
          color,
          imgProps,
          name,
          text,
          placeholder,
          dataHook,
          title,
          onClick = () => {},
        } = item;
        const myColor = () => {
          let colorIndex = index;
          if (color) {
            return color;
          } else {
            while (colorIndex > 5) {
              colorIndex = colorIndex - 6;
            }
            return myPatternColors[colorIndex];
          }
        };
        const my = myColor();
        return {
          size,
          shape,
          ariaLabel,
          color: my,
          imgProps,
          name,
          text,
          placeholder,
          dataHook,
          title,
          onClick
        };
      });
    maxItems = maxItems < 2 ? 2 : maxItems;
    const moreItemAvatar = {
      text: `${items.length - maxItems + 1}+`,
      size: this.props.size === 'small' ? 'size24' : 'size30',
      className: classes.moreItemAvatar,
      isMoreItem: true,
    };
    const serializedItems = serializeItems(items);

    if (items.length > maxItems && maxItems >= 2) {
      serializedItems.length = maxItems;
      serializedItems[maxItems - 1] = moreItemAvatar;
    }
    return (
      <div
        className={st(classes.root, { size, type }, className)}
        data-hook={dataHook}
      >
        {serializedItems.map((item, index) => {
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
                className={st(classes.divider, { size, type })}
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
    presence: undefined,
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
