import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import WIP from './WIP.md';
import { Category } from '../storiesHierarchy';

storiesOf(Category.LAB, module).add('What is this?', () => (
  <div>
    <Markdown source={WIP} />
  </div>
));
