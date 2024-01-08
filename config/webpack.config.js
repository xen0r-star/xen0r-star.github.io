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
var templateBody = getFilesContent(paths.template); // Template général
var templatePhone = getFilesContent(paths.templatePhone); // Template téléphone
var templateDesktop = getFilesContent(paths.templateDesktop); // Template ordinateur


// Configuration
module.exports = {
    entry: [paths.src + '/index.js'],

    output: {
        path: paths.build,
        filename: 'js/[name].[contenthash].js',
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            templateParameters: {
                'body': templateBody,
                'desktop': templateDesktop,
                'phone': templatePhone
            },

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

            {
                test: /\.(gltf)$/,
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
            '@public': paths.public
        },
    },
}