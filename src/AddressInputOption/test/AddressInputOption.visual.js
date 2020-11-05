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
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${AddressInputOption.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AddressInputOption {...commonProps} {...props} />);
  });
});
