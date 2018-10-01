const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack/webpack.dev.config');

const app = express();

const compiler = webpack(webpackConfig);

const createWebpackMiddleware = publicPath =>
  webpackDevMiddleware(compiler, {
    publicPath,
    noInfo: true,
    // logLevel: 'warn',
    // silent: true,
    // stats: 'errors-only',
  });

const webpackMiddleware = createWebpackMiddleware(webpackConfig.output.publicPath);

app.use(webpackMiddleware);
app.use(webpackHotMiddleware(compiler));

const fs = webpackMiddleware.fileSystem;

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port 3000. Open up http://0.0.0.0:3000/ in your browser.');
});
