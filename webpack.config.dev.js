const webpack = require('webpack');

const config = require('./webpack.config');

const index = config.entry;
config.entry = [
  'webpack-hot-middleware/client',
  index,
];

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = config;
