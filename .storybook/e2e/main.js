function getStories() {
  const stories = [];
  if (global.self === global.top) {
    stories.push('./e2e-styles.scss');
  }
  stories.push('../../src/**/*.e2eStory.js');
  return stories;
}

module.exports = {
  stories: getStories(),
  addons: ['@storybook/addon-options','@storybook/addon-links' ],
};