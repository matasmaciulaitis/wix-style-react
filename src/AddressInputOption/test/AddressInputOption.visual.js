import React from 'react';
import { storiesOf } from '@storybook/react';
import AddressInputOption from '../AddressInputOption';

const commonProps = {
  mainLabel: 'address input option',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
      },
      {
        it: 'single-line layout',
        props: {
          secondaryLabel: 'secondary labal',
        },
      },
      {
        it: 'double-line layout',
        props: {
          secondaryLabel: 'secondary labal',
          optionLayout: 'double-line',
        },
      },
    ],
  },
  {
    describe: 'long text',
    its: [
      {
        it: 'long main label',
        props: {
          mainLabel:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
      {
        it: 'long main label and secondary label',
        props: {
          mainLabel:
            'this is a long text that will eventually have an ellipsis at some point',
          secondaryLabel:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
    ],
  },
  {
    describe: 'Affixes',
    its: [
      {
        it: 'with suffix',
        props: {
          suffix: 'suffix',
        },
      },
      {
        it: 'selected with suffix',
        props: {
          suffix: 'suffix',
        },
      },
      {
        it: 'no prefix',
        props: { prefix: false },
      },
      {
        it: 'text prefix',
        props: { prefix: 'prefix' },
      },
    ],
  },
  {
    describe: 'select and highlight',
    its: [
      {
        it: 'selected',
        props: { selected: true },
      },
      {
        it: 'highlighted',
        props: { highlighted: true },
      },
      {
        it: 'selected and highlighted',
        props: { selected: true, highlighted: true },
      },

      {
        it: 'selected with subtitle',
        props: {
          selected: true,
          subtitle: 'This is a nice subtitle',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'disabled with double line layout',
        props: {
          disabled: true,
          secondaryLabel: 'secondary labal',
          optionLayout: 'double-line',
        },
      },
      {
        it: 'disabled with single line layout',
        props: {
          disabled: true,
          secondaryLabel: 'secondary labal',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${AddressInputOption.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AddressInputOption {...commonProps} {...props} />);
  });
});
