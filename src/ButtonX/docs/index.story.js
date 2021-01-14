import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import ButtonX from '../ButtonX';
import ButtonXBase from '../ButtonXBase';
import ButtonXStandard from '../skins/ButtonXStandard';
import * as examples from './examples';

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;
const example = config =>
  baseExample({
    components: { ...allComponents, Link, ButtonXBase, ButtonXStandard },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ButtonX,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${ButtonX.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Raw button',
            source: examples.raw,
          }),

          example({
            title: 'WSR button',
            source: examples.wsr,
          }),

          example({
            title: 'Skinned button',
            source: examples.skin,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
