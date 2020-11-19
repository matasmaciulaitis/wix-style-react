import React from 'react';
import PropTypes from 'prop-types';

import { classes as theme } from './NestableListTheme.st.css';
import { classes, st } from './StyledNestableList.st.css';
import NestableList from '../NestableList';
import TableListItem from '../TableListItem';
import classNames from 'classnames';
import Box from '../Box';

import { Arrow } from './Arrow';
import { TextButton } from '../index';
import Add from 'wix-ui-icons-common/Add';
import { isFistItem, isLastItem, isRootItem } from '../NestableList/utils';

/** A styled list with drag and drop and nesting capabilities. */
class StyledNestableList extends React.PureComponent {
  renderArrow = ({ isLastChild = false, isPreview = false } = {}) => {
    return (
      <Box className={classes.arrowContainer} direction={'vertical'}>
        <div
          className={classNames(classes.verticalArrow, {
            [classes.lastItemVerticalArrow]: isLastChild,
            [classes.previewArrows]: isPreview,
          })}
        >
          <Arrow className={classes.horizontalArrow} />
        </div>
      </Box>
    );
  };

  renderAction = data => {
    const label = data.isRootAction
      ? this.props.addItemLabel
      : data.item.addItemLabel;

    if (!label || this.props.maxDepth <= data.depth) {
      return;
    }

    return (
      <Box
        className={classNames(
          {
            [classes.draggablePlaceholder]: data.isPlaceholder,
            [classes.draggablePreview]: data.isPreview,
            [classes.rootAction]: data.isRootAction,
          },
          classes.item,
          classes.actionItem,
        )}
      >
        <TableListItem
          options={[
            {
              value: (
                <TextButton
                  onClick={() => this.props.onAddItem(data.item)}
                  size={'small'}
                  prefixIcon={<Add />}
                >
                  {label}
                </TextButton>
              ),
            },
          ]}
        />
      </Box>
    );
  };

  renderPrefix = data => {
    if (
      data.isPreview ||
      isLastItem(data.siblings, data.item) ||
      isRootItem(data.depth)
    ) {
      return null;
    }
    return <div className={classes.childArrow} />;
  };

  renderItem = options => {
    const { isPlaceholder, depth, isPreview, siblings, item } = options;
    const { id, children, isCollapsed, draggable = true, ...rest } = item;
    const isLastChild = isLastItem(siblings, item);

    return (
      <Box>
        {!isRootItem(depth) && this.renderArrow({ isLastChild, isPreview })}
        <div
          className={classNames(
            {
              [classes.rootItem]: isRootItem(depth),
              [classes.firstItem]: isFistItem(siblings, item),
              [classes.lastItem]: isLastItem(siblings, item),
              [classes.haveChildren]: Boolean(item.children),
              [classes.draggablePlaceholder]: isPlaceholder,
              [classes.draggablePreview]: isPreview,
            },
            classes.item,
          )}
        >
          <TableListItem
            {...rest}
            showDivider={false}
            dragDisabled={!draggable && !this.props.readOnly}
            draggable={!this.props.readOnly}
            options={rest.options ? rest.options : []}
          />
        </div>
      </Box>
    );
  };

  render() {
    const {
      dataHook,
      className,
      items,
      maxDepth,
      onChange,
      preventChangeDepth,
    } = this.props;

    return (
      <div data-hook={dataHook} className={st(classes.root, {}, className)}>
        <NestableList
          items={items}
          renderItem={this.renderItem}
          renderPrefix={this.renderPrefix}
          renderAction={this.renderAction}
          onUpdate={onChange}
          maxDepth={maxDepth}
          threshold={30}
          theme={theme}
          readOnly={this.props.readOnly}
          preventChangeDepth={preventChangeDepth}
          childrenStyle={{
            position: 'relative',
            marginLeft: '84px',
          }}
          childrenProperty={'children'}
          isRenderDraggingChildren={false}
        />
        {this.props.addItemLabel &&
          this.renderAction({
            depth: 0,
            isRootAction: true,
          })}
      </div>
    );
  }
}

StyledNestableList.displayName = 'StyledNestableList';

const Node = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isCollapsed: PropTypes.bool,
  addItemLabel: PropTypes.string,
  ...TableListItem.propTypes,
};

const NodeShape = PropTypes.shape(Node);
Node.children = PropTypes.arrayOf(NodeShape);

StyledNestableList.propTypes = {
  /** Prevents item from being dragging and removes draggable or dragDisabled icon */
  readOnly: PropTypes.bool,
  /** label for add new item button */
  addItemLabel: PropTypes.string,
  /** triggers in case when add new item button is clicked */
  onAddItem: PropTypes.func,
  /** triggers when order or nesting is changed */
  onChange: PropTypes.func,
  /** Maximum depth of the node three */
  maxDepth: PropTypes.number,
  /** Allow drop node only on it's own depth */
  preventChangeDepth: PropTypes.bool,
  /**
   * * __id__ - Specifies the item id
   * * __addItemLabel__ - Show add button with given label
   * * __isCollapsed__ - Whether to render the items children
   * * __children__ - A list of children of type item
   * * __draggable__ - turns on/off dragging ability
   * * All other TableListItem props
   */
  items: PropTypes.arrayOf(NodeShape),
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

StyledNestableList.defaultProps = {
  maxDepth: 10,
  preventChangeDepth: false,
  items: [],
  onAddItem: () => {},
};

export default StyledNestableList;
