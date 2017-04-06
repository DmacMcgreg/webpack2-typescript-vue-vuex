'use strict';

/**
 * Created by x on 11/23/15.
 */
var path = require('path');

/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const { CheckerPlugin } = require('awesome-typescript-loader');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//提取公用CSS
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc = path.resolve(__dirname, 'src');
var pathToBuild = path.resolve(__dirname, 'www');
var config = {
    //pathToBuild: pathToBuild,
    devtool: false,
    //入口文件配置
    entry: {
        app: [
            path.resolve(__dirname, 'ts/index')
        ],
       common: [
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk'
        ]
    },
    /***
     * 输出文件配置{path是指文件的输出绝对路径,publicPath:编译文件指向的访问路径} 
     * path + publicPath 列子:http://127.0.0.1:8989/index.html
     **/
    output: {
        path: path.resolve(__dirname, 'www'),
        chunkFilename: '[name].js',
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)?$/,
                loaders: ['ts-loader'],
                //loader: 'awesome-typescript-loader',
                //loaders: ['react-hot', 'babel','ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"], //当requrie的模块找不到时，添加这些后缀
        //设置别名
        alias: {
            "components": path.resolve(__dirname, 'ts/components/'),
            "utilities": path.resolve(__dirname, 'ts/utilities/'),
            "@redux": path.resolve(__dirname, 'ts/redux/')
        }
    },
    //外部环境依赖。不合并此文件
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new ExtractTextPlugin("app.css"),
         new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        /**
         * 组件热刷新
         */
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'react ui组件',
            addLinkCss: ['/www/styles/iconfont.css'],
            template: './template/index.ejs',
            hash: true,    //为静态资源生成hash值
        })
    ]
};


module.exports = config;
