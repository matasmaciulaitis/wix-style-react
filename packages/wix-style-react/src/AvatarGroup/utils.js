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
  const firstIndex = Math.floor(Math.random() * 6); // get random number between 0 to 5
  const lastIndex = firstIndex + 6;
  return patternColor.slice(firstIndex, lastIndex);
};

const myPatternColors = getRandomColorPattern();

const getAvatarColor = ({ index, color }) => {
  let colorIndex = index;
  if (color) {
    return color;
  }

  while (colorIndex > 5) {
    colorIndex = colorIndex - 6;
  }
  return myPatternColors[colorIndex];
};

export const serializeItems = (items, avatarSize) =>
  items.map((item, index) => {
    const {
      ariaLabel,
      color,
      imgProps,
      name,
      text,
      placeholder,
      dataHook,
      title,
      onClick = undefined,
    } = item;

    const size = avatarSize === 'small' ? 'size24' : 'size30';
    const shape = 'circle';
    const avatarColor = getAvatarColor({ index, color });
    return {
      size,
      shape,
      ariaLabel,
      color: avatarColor,
      imgProps,
      name,
      text,
      placeholder,
      dataHook,
      title,
      onClick,
    };
  });

export const limitItemsLength = (
  items,
  itemsLength,
  maxItems,
  avatarSize,
  moreItemAvatarClassname,
) => {
  const moreItemAvatar = {
    text: `${itemsLength - maxItems + 1}+`,
    size: avatarSize === 'small' ? 'size24' : 'size30',
    className: moreItemAvatarClassname,
    isMoreItem: true,
  };

  if (itemsLength > maxItems && maxItems >= 2) {
    items.length = maxItems;
    items[maxItems - 1] = moreItemAvatar;
  }
  return items;
};
