const { merge } = require('webpack-merge');
const common = require('./webpack.config');

const path = require('path')


// Configuration
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    headers: { 
      'Content-Encoding': 'none',
    },
    port: 8080,
    watchFiles: ['src/**/*.*', 'src/*.*'],
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});
