const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./utils/webpack/devConfig');
  const compiler = webpack(webpackConfig);
  const devMiddlewareConfig = {
    noInfo: true,
    hot: true,
    inline: true,
  };
  app.use(webpackDevMiddleware(compiler, devMiddlewareConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
