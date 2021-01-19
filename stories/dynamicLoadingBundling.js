import React from 'react';
import { storiesOf } from '@storybook/react';

// This should be import { } from 'wix-style-react/standalone'
import {
  Button as ButtonLoader,
  WSRDynamicLoadingProvider,
  WSRComponentsContext,
} from '../.lib/dist-dynamic/main';

storiesOf('Dynamic Loading Bundling', module).add('Usage', () => (
  <WSRDynamicLoadingProvider componentLoaders={{ Button: ButtonLoader }}>
    <WSRComponentsContext.Consumer>
      {({ Button }) => <Button>click me</Button>}
    </WSRComponentsContext.Consumer>
  </WSRDynamicLoadingProvider>
));
