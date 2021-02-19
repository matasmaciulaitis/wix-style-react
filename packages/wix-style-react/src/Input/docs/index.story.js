import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  divider,
  tabs,
  tab,
  code as baseCode,
  title,
  importExample,
  api,
  testkit,
  playground,
  description,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import Input from '..';

const code = config => baseCode({ components: allComponents, ...config });
const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: Input,
  componentPath: '../Input.js',

  componentProps: {},

  exampleProps: {
    status: [
      {
        label: 'Error',
        value: Input.StatusError,
      },
      {
        label: 'Warning',
        value: Input.StatusWarning,
      },
      {
        label: 'Loading',
        value: Input.StatusLoading,
      },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/tree/master/src/Input',
      component: (
        <div style={{ width: '50%' }}>
          <Input />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: `
            Input allows to insert short text values. This component is used in submit forms or to build other form components like \`<Autocomplete/>\` or \`<NumberInput/>\`.<br/>
            Use it:<br/>
            &emsp;- To insert names, titles and other short textual information.<br/>
            &emsp;- To build custom inputs like Credit Card input.<br/>
            Don’t use it:<br/>
            &emsp;- To insert long paragraphs, instead use the <InputArea/> component.<br/>
            &emsp;- As a search input, instead use the <Search/> component.<br/>
            `,
          }),

          divider(),

          importExample("import { Input } from 'wix-style-react';"),

          divider(),

          title('Property Examples'),

          example({
            title: 'Size',
            text: `
              Adjust the component size using \`size\` prop. It supports 3 sizes:<br/>
              &emsp;- \`large\` - use it in onboarding flows, where input needs emphasis.<br/>
              &emsp;- \`medium\` (default) - use in all common cases.<br/>
              &emsp;- \`small\` - use in more dense and narrow layouts.<br/>
            `,
            source: examples.size,
          }),

          example({
            title: 'Border',
            text: `
              Style the component using \`border\` prop. It supports 3 styles:<br/>
              &emsp;- \`default\` - use in all common cases.<br/>
              &emsp;- \`round\` (default) - use to build filter inputs, like search.<br/>
              &emsp;- \`bottomLine\` - use as a title which can be edited on the click.<br/>
            `,
            source: examples.border,
          }),

          example({
            title: 'Status',
            text: `
            Control component status using \`status\` prop. It supports 3 states:<br/>
              &emsp;- \`error\` - use to highlight invalid input value.<br/>
              &emsp;- \`warning\` - use to highlight inputs that values impact user business or can’t be validated.<br/>
              &emsp;- \`loading\` - use to show that the value is being uploaded to the server.<br/>
            `,
            source: examples.status,
          }),

          example({
            title: 'StatusMessage',
            text: `
              Explain the status with \`statusMessage\` prop. The message is revealed when a user mouse hovers the status icon.
              The placement of a tooltip is controlled with \`tooltipPlacement\` prop.
            `,
            source: examples.statusMessage,
          }),

          example({
            title: 'ReadOnly and Disabled',
            text: `
              Control input interaction with:<br/>
              &emsp;- \`readOnly\` - disables writing new values, but allows to copy the current value. Use to display urls, codes and similar text.<br/>
              &emsp;- \`disabled\` - disables all input interactions. Use to highlight unavailable functions.<br/>
            `,
            source: examples.readOnlyAndDisabled,
          }),

          example({
            title: 'Affix',
            text: `
              Boost input value with additional information added to \`prefix\` and \`suffix\` props.
            `,
            source: examples.affix,
          }),

          example({
            title: 'ClearButton',
            text: `
              Enable a button that clears input value by using \`clearButton\` prop.
              Show it when input’s value is optional or often has to be clear, for example date and search inputs.
            `,
            source: examples.clearButton,
          }),

          example({
            title: 'textOverflow',
            text: `
              Control long text value truncation with \`textOverflow\` prop. It has 2 options:<br/>
              &emsp;- \`clip\`(default) - ends the text  with a sharp cut.<br/>
              &emsp;- \`ellipsis\` - shows ellipsis where  text is truncated. Use to emphasize that text doesn’t fit, especially when \`bottomLine\` style is enabled.<br/>
            `,
            source: examples.textOverflow,
          }),

          divider(),

          title('Common Use Cases'),

          example({
            title: 'Layouting',
            text: 'asd',
            source: examples.layouting1,
          }),

          example({
            title: 'Layouting',
            text: 'asd',
            source: examples.layouting2,
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
