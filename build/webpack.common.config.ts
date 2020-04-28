import CircularDependencyPlugin from 'circular-dependency-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { Configuration, NamedModulesPlugin } from 'webpack';
import { PATHS } from '../project.config';

export default {
  target: 'web',
  entry: {
    app: PATHS.entry,
  },
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    alias: PATHS.aliases,
    extensions: ['.js', '.ts', '.svelte'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        loader: 'svelte-loader',
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      cache: true,
      filename: PATHS.index.output,
      template: PATHS.index.input,
    }),
    new CircularDependencyPlugin({ exclude: /node_modules/ }),
  ],
} as Configuration;
