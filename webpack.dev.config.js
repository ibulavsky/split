const webpack = require('webpack');
const path = require("path");

// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const darkTheme = require('./styles/themes/dark');

module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        filename: "./main.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        overlay: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    ...darkTheme,
                                    'primary-color': '#1DA57A',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px',
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(s?css)$/,
                oneOf: [
                    {
                        test: /\.module\.s?css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: {
                                    url: false,
                                    importLoaders: 1,
                                    modules: true,
                                },
                            },
                            "sass-loader",
                        ],
                    },
                    {
                        use: [MiniCssExtractPlugin.loader, {loader: 'css-loader', options: {url: false}}, "sass-loader"],
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html',
        }),
    ],
};