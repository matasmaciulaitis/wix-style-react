import React from 'react';
import { storiesOf } from '@storybook/react';
import AddressInputOption, {
  addressInputOptionBuilder,
} from '../AddressInputOption';
import { DropdownLayout, Box } from '../..';
import ToolBoxIcon from 'wix-ui-icons-common/Location';

const commonProps = {
  mainLabel: 'address input option',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'single-line layout',
        props: {
          secondaryLabel: 'secondary label',
        },
      },
      {
        it: 'double-line layout',
        props: {
          secondaryLabel: 'secondary label',
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
        it: 'long main label and secondary label ans single line layout',
        props: {
          mainLabel: 'this is a long text that has an ellipsis at some point',
          secondaryLabel:
            'this is a long text that has an ellipsis at some point',
        },
      },
      {
        it: 'long main label and secondary label and double line layout',
        props: {
          mainLabel:
            'this is a long text that will eventually have an ellipsis at some point',
          secondaryLabel:
            'this is a long text that will eventually have an ellipsis at some point',
          optionLayout: 'double-line',
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
    describe: 'option state',
    its: [
      {
        it: 'selected',
        props: { selected: true, secondaryLabel: 'This is a nice subtitle' },
      },
      {
        it: 'highlighted',
        props: { highlighted: true, secondaryLabel: 'This is a nice subtitle' },
      },
      {
        it: 'selected and highlighted',
        props: {
          selected: true,
          highlighted: true,
          secondaryLabel: 'This is a nice subtitle',
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
          secondaryLabel: 'secondary label',
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
    ).add(it, () => (
      <Box width="500px">
        <AddressInputOption {...commonProps} {...props} />
      </Box>
    ));
  });
});

storiesOf(`${AddressInputOption.displayName}/builder`, module).add(
  'builder',
  () => (
    <DropdownLayout
      visible
      inContainer
      selectedId={0}
      options={[
        addressInputOptionBuilder({
          id: 0,
          mainLabel: 'option 1',
          secondaryLabel: 'subtitle 1',
          suffix: 'suffix',
        }),
        addressInputOptionBuilder({
          id: 1,
          disabled: true,
          mainLabel: 'option 2',
          secondaryLabel: 'subtitle 2',
          prefix: <ToolBoxIcon />,
        }),
        addressInputOptionBuilder({
          id: 2,
          mainLabel: 'option 3',
          secondaryLabel: 'subtitle 3',
          optionLayout: 'double line',
        }),
      ]}
    />
  ),
);
