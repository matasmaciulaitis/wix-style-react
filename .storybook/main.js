module.exports = {
  stories: ['../stories/index.js'],
  addons: [
    __dirname + '/addons/MadeforToggle/register.js',
    __dirname + '/addons/ThemeWSR/register.js',
    '@storybook/addon-options/register',
    '@storybook/addon-links/register',
    '@storybook/addon-google-analytics/dist/register',
    'storybook-addon-i18n/register',
  ],
};
