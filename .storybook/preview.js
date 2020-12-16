import * as React from 'react';

import { create } from '@storybook/theming/create'; // need /create?!

import { version } from '../package.json';
import { withI18n } from 'storybook-addon-i18n';
import MadeforToggle from './addons/MadeforToggle';
import ThemeWSR from './addons/ThemeWSR';

// Parameters
const theme = create({
  base: 'light',
  brandTitle: `Wix Style React ${version}`,
  brandUrl: 'https://github.com/wix/wix-style-react',
});

export const parameters = {
  options: {
    theme,
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: true,
  },
  i18n: {
    provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
    supportedLocales: ['LTR', 'RTL'],
    providerLocaleKey: 'locale',
    getDirection: locale => locale.toLowerCase(),
  },
};

// Decorators
export const decorators = [
  withI18n,
  MadeforToggle,
  ThemeWSR
];