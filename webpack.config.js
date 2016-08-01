var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: './src/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public'

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel'],
            include: APP_DIR
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: __dirname
        })
    ],
    devtool: 'inline-source-maps'
};

module.exports = config;
