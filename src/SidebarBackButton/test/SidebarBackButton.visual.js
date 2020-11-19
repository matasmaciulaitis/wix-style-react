import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarBackButton from '../SidebarBackButton';

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {},
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}SidebarBackButton${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(<SidebarBackButton>Go Back</SidebarBackButton>),
      );
    });
  });
};
