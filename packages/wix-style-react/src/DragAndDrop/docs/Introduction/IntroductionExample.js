import React from 'react';
import { st, classes } from './IntroductionExample.st.css';
import { SortableList } from 'wix-style-react';

/**
 * An example for a simple drag and drop list component.
 */
export default class IntroductionExample extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 'a',
          text: 'Item 1',
        },
        {
          id: 'b',
          text: 'Item 2',
        },
        {
          id: 'c',
          text: 'Item 3',
        },
        {
          id: 'd',
          text: 'Item 4',
        },
        {
          id: 'e',
          text: 'Item 5',
        },
        {
          id: 'f',
          text: 'Item 6',
        },
        {
          id: 'g',
          text: 'Item 7',
        },
        {
          id: 'h',
          text: 'Item 8',
        },
      ],
    };
  }

  handleDrop = ({ removedIndex, addedIndex }) => {
    const nextItems = [...this.state.items];
    nextItems.splice(addedIndex, 0, ...nextItems.splice(removedIndex, 1));
    this.setState({
      items: nextItems,
    });
  };

  renderItem = ({ isPlaceholder, isPreview, id, previewStyles, item }) => {
    return (
      <div
        className={st(classes.root, {
          placeholder: isPlaceholder,
          preview: isPreview,
        })}
        style={previewStyles}
        data-hook={`item-${id}`}
      >
        {item.text}
      </div>
    );
  };

  render() {
    return (
      <SortableList
        containerId="single-area-1"
        dataHook="list-single-area"
        items={this.state.items}
        renderItem={this.renderItem}
        onDrop={this.handleDrop}
      />
    );
  }
}
