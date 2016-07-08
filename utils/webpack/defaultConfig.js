const path = require('path');

const defaultConfig = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};

module.exports = defaultConfig;
