const webpack = require('webpack');
const defaultConfig = require('./defaultConfig');

const prodConfig = Object.assign({}, defaultConfig);

prodConfig.devtool = 'source-map';
prodConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

module.exports = prodConfig;
