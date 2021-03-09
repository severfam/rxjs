const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'dource-map',
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts/, loader: 'ts-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}