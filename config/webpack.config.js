const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const paths = require('./paths')
const fs = require('fs');


// lecture template
const getFilesContent = (dirPath) => {
  return fs.readdirSync(dirPath)
    .filter(file => fs.lstatSync(path.join(dirPath, file)).isFile())
    .map(file => fs.readFileSync(path.join(dirPath, file), 'utf8'))
    .join('\n');
};

// Template
const templateContents = getFilesContent(paths.template); // Template général
const templateContentsPhone = getFilesContent(paths.templatePhone); // Template téléphone
const templateContentsDesktop = getFilesContent(paths.templateDesktop); // Template ordinateur
let templateEnd = '<div id="phone">' + 	templateContentsPhone + '</div><div id="desktop">' + templateContentsDesktop + '</div>' + templateContents;


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
      content: templateEnd,
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