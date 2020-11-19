export const getDepth = (item, childrenProperty) => {
  // returns depth of item and children
  let depth = 0;

  if (item[childrenProperty]) {
    item[childrenProperty].forEach(d => {
      const tmpDepth = getDepth(d, childrenProperty);

      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }

  return depth + 1;
};

export const getValuesByKey = (data, key, childrenProp) => {
  const values = [data[key]];
  if (data[childrenProp]) {
    data[childrenProp].forEach(item => {
      values.push(...getValuesByKey(item, key, childrenProp));
    });
  }

  return values;
};

export const removeFromTree = (items, position, childrenProperty) => {
  const lastIndex = position.length - 1;
  let itemsRemoveCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsRemoveCandidate.splice(pos, 1)[0]; // eslint-disable-line no-unused-expressions
    } else {
      itemsRemoveCandidate = itemsRemoveCandidate[pos][childrenProperty];
    }
  });

  return items;
};

export const addToTree = (items, item, position, childrenProperty) => {
  const lastIndex = position.length - 1;
  let itemsAddCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsAddCandidate.splice(pos, 0, item); // eslint-disable-line no-unused-expressions
    } else {
      if (itemsAddCandidate[pos] && !itemsAddCandidate[pos][childrenProperty]) {
        itemsAddCandidate[pos][childrenProperty] = [];
      }
      itemsAddCandidate = itemsAddCandidate[pos][childrenProperty];
    }
  });

  return items;
};

export function recursiveMap(items, predicateFn, childProp = 'children') {
  return items.map(currentItem => {
    const item = predicateFn(currentItem);
    if (item !== currentItem) {
      return item;
    }
    if (currentItem[childProp]) {
      return {
        ...currentItem,
        children: recursiveMap(currentItem[childProp], predicateFn),
      };
    }
    return currentItem;
  });
}

export function isLastItem(siblings, item) {
  return siblings && siblings[siblings.length - 1] === item;
}

export function isFistItem(siblings, item) {
  return siblings && siblings[0] === item;
}

export function isRootItem(depth) {
  return depth === 1;
}

export function hoverAboveItself(prevPosition, nextPosition) {
  return prevPosition.every((position, index) => {
    return nextPosition[index] === position;
  });
}

export function isItemHasChildren(item, childrenProperty) {
  return Boolean(item[childrenProperty] && item[childrenProperty].length);
}
