import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import { version } from '../../package.json';
import { create } from '@storybook/theming/create';

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
    isToolshown: true,
  },
  i18n: {
    provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
    supportedLocales: ['LTR', 'RTL'],
    providerLocaleKey: 'locale',
    getDirection: (locale) => locale.toLowerCase(),
  },
};

// Decorators
export const decorators = [withI18n];