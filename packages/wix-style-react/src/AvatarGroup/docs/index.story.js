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
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Group type',
            text: "The grouping appearance of the avatars can be 'stretched' or 'condensed'",
            source: examples.groupType,
          }),
          example({
            title: 'Divider',
            text: 'A divider can be applied between the first and the rest of the avatars',
            source: examples.divider
          }),
          example({
            title: 'More indicator',
            text: "Enable the consumer to define the maximum number of items to show, before collapsing them into the ‘More’ indication.\n" +
              "\n" +
              "Minimum number of items to display is 2.\n" +
              "\n" +
              "(See more description under Behaviours section)\n",
            source: examples.moreIndicator
          })

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
