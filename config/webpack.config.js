const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const templatesDir = path.resolve(__dirname, '../src/template');
const templates = fs.readdirSync(templatesDir);

let combinedTemplate = '';
for (const template of templates) {
    const templateContent = fs.readFileSync(path.join(templatesDir, template), 'utf8');
    combinedTemplate += templateContent;
}

const combinedTemplateFile = path.join(__dirname, '../build', 'template.html');
fs.writeFileSync(combinedTemplateFile, combinedTemplate, { flag: 'w' });

console.log("--------------------{ LOG }--------------------\n");

module.exports = {
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
            template: combinedTemplateFile,
            filename: 'template.html',
            inject: false,
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../build'),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|scss|sass|less|styl)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'less-loader', 'stylus-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
};
