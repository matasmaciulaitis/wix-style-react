import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';
import { Layout, Cell, Input, TextButton } from '../../../index';
import useCopyClipboard from '../useCopyClipboard';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const CopyClipboard = () => {
  const [value, setValue] = useState('https://www.wix.com');
  const { copyToClipboard } = useCopyClipboard({ value });
  return (
    <Layout>
      <Cell>
        <Input
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
          dataHook={storySettings.dataHookInputCopy}
          onInputClicked={() => copyToClipboard()}
          suffix={
            <Input.Affix>
              <TextButton>Click on input to copy</TextButton>
            </Input.Affix>
          }
          clearButton
          onClear={() => {
            setValue('');
          }}
        />
      </Cell>
      <Cell>
        <Input
          onChange={() => {}}
          dataHook={storySettings.dataHookInputPaste}
        />
      </Cell>
    </Layout>
  );
};

storiesOf(kind, module).add(testStories.useCopyClipboard, () => (
  <CopyClipboard />
));
