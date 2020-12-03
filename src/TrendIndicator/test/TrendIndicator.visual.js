import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import TrendIndicator from '../TrendIndicator';

const commonProps = {};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'value number',
        props: {
          value: 10,
        },
      },
      {
        it: 'value not a number',
        props: {
          value: NaN,
        },
      },
    ],
  },
  {
    describe: 'value',
    its: [
      {
        it: 'positive',
        props: {
          value: 21,
        },
      },
      {
        it: 'negative',
        props: {
          value: -32,
        },
      },
      {
        it: 'neutral',
        props: {
          value: 0,
        },
      },
    ],
  },
  {
    describe: 'inverted',
    its: [
      {
        it: 'positive',
        props: {
          value: 21,
          inverted: true,
        },
      },
      {
        it: 'negative',
        props: {
          value: -32,
          inverted: true,
        },
      },
      {
        it: 'neutral',
        props: {
          value: 0,
          inverted: true,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(
    `${themeName ? `${themeName}|` : ''}${TrendIndicator.displayName}`,
    () => {
      tests.forEach(({ describe, its }) => {
        story(describe, () => {
          its.map(({ it, props }) =>
            snap(it, () =>
              testWithTheme(<TrendIndicator {...commonProps} {...props} />),
            ),
          );
        });
      });
    },
  );
};
