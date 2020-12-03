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
import SectionHelper from '../../SectionHelper';

import AddressInputOption from '..';
import * as examples from './examples';
import ToolBoxIcon from 'wix-ui-icons-common/Location';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AddressInputOption,
  componentPath: '..',

  componentProps: {
    mainLabel: 'main label',
    secondaryLabel: 'secondary label',
    suffix: 'suffix',
    prefix: <ToolBoxIcon />,
    optionLayout: 'single-line',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AddressInputOption.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is responsible of transforming a given prediction object and display-props into a valid address option according to the UX guidelines.',
          }),

          importExample(`
// Use directly
import { AddressInputOption } from 'wix-style-react';
// Or use a builder
import { addressInputOptionBuilder } from 'wix-style-react';`),

          divider(),
          description({
            text: (
              <SectionHelper title="WARNING">
                This component is work in progress, please don't use this
                component unless you were instructed to by wsr team.
              </SectionHelper>
            ),
          }),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A basic example',
            source: examples.basicExample,
          }),

          example({
            title: 'Option Layout',
            text:
              'Addresses can be displayed as a single line (default) or double lines',
            source: examples.optionLayout,
          }),

          example({
            title: 'Affixes',
            text:
              'Component has prefix and suffix areas. Default prefix is location icon.',
            source: examples.Affixes,
          }),

          example({
            title: 'Advanced example',
            text:
              'All properties work together and can be combined in various ways. It can be rendered as standalone or as part of dropdown using builders.',
            source: examples.advancedExample,
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
