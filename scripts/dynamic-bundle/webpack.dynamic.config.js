const config = require('./webpack.lib.config');

config.entry = './index.dynamic.js';
config.output.publicPath = './dist-dynamic/';
config.output.path += '-dynamic';

config.plugins[config.plugins.length - 1].folder = config.output.path;
module.exports = config;
