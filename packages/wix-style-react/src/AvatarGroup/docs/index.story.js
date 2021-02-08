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
import * as examples from './examples';

import AvatarGroup from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AvatarGroup,
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
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AvatarGroup.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: `AvatarGroup allows to display a number of avatars (digital representation of a user) as a single entity. It’s a building block grouping number of standalone <Avatar/> components.

Use it:\n
 - To display a group of 2+ users\n
 - To display users that have something in common (i.e. belong to a project, are in the same team, attend the same event, etc.)\n

Don’t use it:\n
 - To display single avatar\n
 - To display visual content other than users (i.e. images - use <Image/>)\n
`,
          }),

          importExample("import { AvatarGroup } from 'wix-style-react'"),

          divider(),

          title('Examples'),

          example({
            title: 'Size',
            text:
              'Use to adjust dimensions of a component. Supports 2 sizes:' +
              '\n' +
              ' - medium (default)- use in all common cases\n' +
              ' - small - use to de-emphasise the group and in more dense and narrow layouts',
            source: examples.size,
          }),

          example({
            title: 'Group type',
            text:
              'Use to control the density of a group. Component supports 2 types: \n' +
              ' - stretched (default) - use when each user is as important as a group as a whole \n' +
              ' - condensed - use in narrow layouts and in cases where it is important to show the sum of the people rather than individuals',
            source: examples.groupType,
          }),
          example({
            title: 'Divider',
            text:
              'Use to separate the avatar from the rest of the group. Component allows to separate single avatar only, which must be a first item on the list.',
            source: examples.divider,
          }),

          example({
            title: 'Max number of items',
            text:
              'Use to define the maximum number of items to show before collapsing them. \n' +
              '\n' +
              'By default component displays up to 5 items. The ‘N+’ indication will replace the last avatar, in case the number exceeds this limit.\n',
            source: examples.maxItems,
          }),

          example({
            title: 'More indicator',
            text: 'moreItemContent prop -  temp description',
            source: examples.moreIndicator,
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
