
function loadStories() {
  let req;
  switch (process.env.STORYBOOK_VISUAL) {
    // Test only base components
    case 'base':
      req = require.context(
        '../../src',
        true,
        /^(?!.\/Themes\/).*\.visual\.js$/,
      );
      break;
    // Test themes
    case 'themes':
      req = require.context('../../src/Themes', true, /\.visual\.js$/);
      break;
    default:
      req = require.context('../../src', true, /\.visual\.js$/);
  }

  req.keys().forEach((filename) => {
    const file = req(filename);
    if (typeof file.runTests === 'function') {
      file.runTests();
    }
  });
}

module.exports = {
  stories: ['../../src.**/*.visual.js'], // just for test
  addons: ['storybook-addon-i18n'],
};