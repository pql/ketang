const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production', // 默认是开发模式
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: { // browserHistory的时候，刷新会报404.会自动重定向到index.html
            index: './index.html'
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'node_modules')
        },
        // 当你加载一个文件的时，没有指定扩展名时，会自动寻找哪些扩展名
        extensions: ['.ts', '.tsx', '.js','.json']
    },
    module: {
        rules: [
            {
                test: /.(j|t)sx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /.(j|t)sx?$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
}