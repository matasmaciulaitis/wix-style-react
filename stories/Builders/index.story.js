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
  columns,
  table,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';

import { storySettings } from './storySettings';
import allComponents from '../utils/allComponents';

import DropdownLayout from '../../src/DropdownLayout';
import { Category } from '../storiesHierarchy';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: <DropdownLayout />,
  componentPath: '../../src/DropdownLayout',

  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({}),

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

          columns([
            table({
              title: 'Related Components',
              rows: [
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemSelect"
                  >{`<ListItemSelect/>`}</LinkTo>,
                  'A single option of any selectable component',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemSection"
                  >{`<ListItemSection/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemAction"
                  >{`<ListItemAction/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemEditable"
                  >{`<ListItemEditable/>`}</LinkTo>,
                  'An internal editable component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="BadgeSelect"
                  >{`<BadgeSelectItem/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
              ],
            }),
          ]),

          title('Examples'),

          // example({
          //   title: 'Simple Usage',
          //   text: 'A simple example with compact preview',
          //   source: '<<%= ComponentName %> buttonText="Hello World!"/>',
          // }),
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
