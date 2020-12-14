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
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AtlasAddressInput from '..';

// We've set up a mock Atlas api in Storybook middleware file
const BASE_URL = '/api/';
const MockAtlasAddressInput = props => (
  <AtlasAddressInput baseUrl={BASE_URL} {...props} />
);
const MockWixAtlasServiceWeb = WixAtlasServiceWeb.bind(null, BASE_URL);

const example = config =>
  baseExample({
    components: {
      ...allComponents,
      AtlasAddressInput: MockAtlasAddressInput,
      WixAtlasServiceWeb: MockWixAtlasServiceWeb,
    },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AtlasAddressInput,
  componentPath: '..',

  componentProps: {
    size: 'medium',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AtlasAddressInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'An address search component, requires an address provider.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example.',
            source: examples.simple,
          }),

          example({
            title: 'Controlled',
            text: `You can pass a \`value\` prop to control the value of input.\n
Using the \`onSelect\` prop, we can fetch additional data based on selected place\n
and set custom value on selection.`,
            source: examples.controlled,
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
