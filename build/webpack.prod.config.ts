import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import { APP_TYPE } from '../project.config';
import common from './webpack.common.config';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      APP_TYPE,
    }),
  ],
  output: {
    publicPath: '/public',
  },
});
