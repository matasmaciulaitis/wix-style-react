import React from 'react';
import { storiesOf } from '@storybook/react';

// TODO - this requires some kind of serving which webpack won't know how to do when read from node_modules/wix-style-react
import { Button as ButtonLoader } from '../.lib/dist-dynamic/main';

// This should be import { } from 'wix-style-react/standalone'
import {
  WSRDynamicLoadingProvider,
  WSRComponentsContext,
} from '../src/standalone';

storiesOf('Dynamic Loading Bundling', module).add('Usage', () => (
  <WSRDynamicLoadingProvider componentLoaders={{ Button: ButtonLoader }}>
    <WSRComponentsContext.Consumer>
      {({ Button }) => <Button>click me</Button>}
    </WSRComponentsContext.Consumer>
  </WSRDynamicLoadingProvider>
));
