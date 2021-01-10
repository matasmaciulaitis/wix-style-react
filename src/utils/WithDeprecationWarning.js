const path = require('path');

let config = require(`${path.resolve(process.cwd())}/wsr.config.js`);

if (!config || !config.deprecationWarnings) {
  config = {
    deprecationWarnings: {},
  };
}

export const WithDeprecationWarning = driver => {
  if (console && config.deprecationWarnings[driver.name] !== 'mute') {
    // eslint-disable-next-line no-console
    console.warn(`
    Warning! ${driver.name} is deprecated and will be removed.
    For more information please refer to https://github.com/wix/wix-style-react/blob/master/docs/usage/testing.md
    `);
  }

  return driver;
};
