import express from 'express';
import http from 'http';
import webpack from 'webpack';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevMiddleware from 'webpack-dev-middleware';

import webpackDevConfig from './build/webpack.dev.config';
import { SERVER } from './project.config';

const isDev = process.env.NODE_ENV !== 'production';
const app = express();

if (isDev) {
  const compiler = webpack(webpackDevConfig);
  app.use(WebpackDevMiddleware(compiler));
  app.use(WebpackHotMiddleware(compiler));
}

http
  .createServer(app)
  .listen(SERVER.port, () =>
    console.log(`🔮 Magic happens on port ${SERVER.port}...`),
  );
