import { create } from '@storybook/theming/create';
import { version } from '../../package.json';

const theme = create({
  base: 'light',
  brandTitle: `wix-style-react v${version}`,
  brandUrl: 'https://github.com/wix/wix-style-react',
});

export const parameters = {
  options: {
    theme,
    showPanel: false,
    isToolshown: true,
  },
};
