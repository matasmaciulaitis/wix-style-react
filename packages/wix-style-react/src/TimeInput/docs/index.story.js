import React from 'react';
import TimeInput from '..';
import { storySettings } from './storySettings';
import LockLocked from 'wix-ui-icons-common/LockLocked';
import Input from '../../Input';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TimeInput,
  componentPath: '..',

  exampleImport: `import { TimeInput } from 'wix-style-react';`,

  componentProps: {
    dashesWhenDisabled: false,
    disabled: false,
    width: 'auto',
  },

  exampleProps: {
    onChange: moment => moment.format('h:mm a'),
    customSuffix: [
      { label: 'string', value: 'hello' },
      {
        label: 'node',
        value: (
          <Input.IconAffix>
            <LockLocked />
          </Input.IconAffix>
        ),
      },
    ],
  },
};
