const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const paths = require('./paths')
const fs = require('fs');


// Template
const templates = fs.readdirSync(paths.template);
const templateContents = templates.map(template => {
  return fs.readFileSync(path.join(paths.template, template), 'utf8');
}).join('\n');


// Configuration
module.exports = {
  entry: [paths.src + '/index.js'],

  output: {
    path: paths.build,
    filename: 'js/[name].js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html',
      inject: 'body',
      content: templateContents,
      filename: 'index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      scriptLoading: 'defer',
      publicPath: '',
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },

      { test: /\.(gltf)$/,
        loader: "file-loader",
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': paths.src,
      '@public' : paths.public
    },
  },
}