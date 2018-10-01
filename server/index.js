const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack/webpack.dev.config');

const compiler = webpack(webpackConfig);

const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port 3000. Open up http://0.0.0.0:3000/ in your browser.');
});
