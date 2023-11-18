const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.config')
const paths = require('./paths')


module.exports = merge(common, {
    mode: 'production',
    devtool: false,

    output: {
        path: paths.public,
        filename: 'js/[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), '...'],
        runtimeChunk: {
            name: 'runtime',
        },
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});