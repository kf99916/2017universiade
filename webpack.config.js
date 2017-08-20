const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendors: ['./src/sass/vendors.scss'],
        index: './src/sass/index.scss'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/[name].min.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].min.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity,
        })
    ]
};