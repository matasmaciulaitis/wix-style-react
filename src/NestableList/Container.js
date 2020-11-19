import React, { Component } from 'react';
import classNames from 'classnames';
import Item from './Item';
import { getDepth } from './utils';
import Collapse from '../Collapse';

class Container extends Component {
  render() {
    const {
      items,
      parentPosition,
      childrenProperty,
      childrenStyle,
      renderAction,
      treeDepth,
      isRenderDraggingChildren,
      topLevel,
      theme,
    } = this.props;
    let containerClass;
    if (theme) {
      containerClass = (topLevel && theme.topContainer) || theme.container;
    }
    const classes = classNames(
      'nestable-container',
      {
        'nestable-top-container': topLevel,
      },
      containerClass,
    );
    return (
      <div className={classes} style={topLevel ? {} : childrenStyle}>
        {items.map((item, i) => {
          const position = parentPosition.concat([i]);
          const children = item[childrenProperty];
          return (
            <Item
              id={item.id}
              key={item.id}
              item={item}
              index={i}
              siblings={items}
              isRenderDraggingChildren={isRenderDraggingChildren}
              position={position}
              depth={getDepth(item, childrenProperty)}
              theme={theme}
            >
              {children && !item.isCollapsed && children.length ? (
                <WrappedContainer
                  items={children}
                  renderAction={renderAction}
                  isRenderDraggingChildren={isRenderDraggingChildren}
                  parentPosition={position}
                  childrenProperty={childrenProperty}
                  childrenStyle={childrenStyle}
                  theme={theme}
                  treeDepth={treeDepth + 1}
                />
              ) : null}
              {!item.isCollapsed &&
                renderAction({
                  siblings: items,
                  item,
                  depth: treeDepth,
                })}
            </Item>
          );
        })}
      </div>
    );
  }
}

class WrappedContainer extends React.PureComponent {
  render() {
    return <Container {...this.props} />;
  }
}

export default WrappedContainer;
