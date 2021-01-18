export const serializeItems = (items, avatarSize, myPatternColors) => items.map((item, index) => {

  const size = avatarSize === 'small' ? 'size24' : 'size30';
  const shape = 'circle';

  const {ariaLabel, color, imgProps, name, text ,onClick = ()=>{}} = item;
  const myRandomColor = () => {
    let colorIndex = index;
    if (color) {
      return color
    }
    while (colorIndex > 5) {
      colorIndex = colorIndex - 6
    }
    return myPatternColors[colorIndex];

  }

  const my = myRandomColor()
  return {
    size,
    shape,
    ariaLabel,
    color: my,
    imgProps,
    name,
    text
  }
})

const patternColor = ['A1','A2','A3','A4','A5','A6','A1','A2','A3','A4','A5','A6'];
export const getRandomColorPattern = () => {
  const firstIndex = Math.floor(Math.random() * 6);
  const lastIndex = firstIndex + 6;
  return patternColor.slice(firstIndex, lastIndex)
}
const myPatternColors = getRandomColorPattern();
