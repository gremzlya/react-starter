const webpack = require('webpack');
const defaultConfig = require('./defaultConfig');

const devConfig = Object.assign({}, defaultConfig);

devConfig.devtool = 'eval-source-map';
devConfig.entry = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  defaultConfig.entry,
];
devConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

module.exports = devConfig;
