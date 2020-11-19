import React from 'react';
import { storiesOf } from '@storybook/react';
import BadgeOption, { badgeSelectItemBuilder } from '../BadgeSelectItemBuilder';
import Box from '../../Box';
import { SKINS } from '../constants';
import DropdownLayout from '../../DropdownLayout';

const skins = Object.keys(SKINS);

const tests = [
  {
    describe: 'skins',
    its: skins.map((skin, idx) => ({
      it: skin,
      props: { id: idx, skin, text: skin },
    })),
  },
  {
    describe: 'badge select state',
    its: [
      {
        it: 'default',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'selected',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          selected: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'highlighted',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          highlighted: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'selected and highlighted',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          selected: true,
          highlighted: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'disabled',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          disabled: true,
          subtitle: `subtitle text`,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`BadgeOption${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box>
          <BadgeOption {...props} />
        </Box>
      ),
    );
  });
});

storiesOf('BadgeOption', module).add('builder', () => (
  <DropdownLayout
    visible
    selectedId={0}
    options={[
      badgeSelectItemBuilder({
        id: 0,
        skin: 'standard',
        text: 'standard',
        subtitle: 'subtitle text',
      }),
      badgeSelectItemBuilder({
        id: 1,
        skin: 'danger',
        text: 'danger',
        subtitle: 'subtitle text',
      }),
      badgeSelectItemBuilder({
        id: 2,
        skin: 'warningLight',
        text: 'disabled option title',
        subtitle: `disabled option subtitle`,
        disabled: true,
      }),
    ]}
  />
));
