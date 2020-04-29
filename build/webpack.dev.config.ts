import { EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import { APP_TYPE, PATHS, SERVER } from '../project.config';
import common from './webpack.common.config';

export default merge(common, {
  mode: 'development',
  // entry: ['webpack-hot-middleware/client?quiet=true', PATHS.entry],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    // hot: true,
    overlay: true,
    staticOptions: { redirect: false },
    port: SERVER.port,
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      APP_TYPE,
    }),
  ],
  output: {
    publicPath: '/',
  },
});
