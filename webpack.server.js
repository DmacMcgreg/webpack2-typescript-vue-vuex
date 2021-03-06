'use strict';

/**
 * Created by x on 11/23/15.
 */
var path = require('path');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config.dev');
var pathToBuild = path.resolve(__dirname, 'www');
//import config from './webpack.dev.config';
var open           = require('open');
const opts_config = {
    port:8676
}
var compiler = webpack(config);
/***
 * publicPath 启动服务的资源路径
 */
var server =new WebpackDevServer(compiler, {
        contentBase: path.resolve(__dirname),
        compress: true,
        hot: true,
        publicPath: config.output.publicPath,
        open: true,
        inline: true
    })
server.listen(9090,'0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at 127.0.0.1:8989/index.html');
    open(`http://127.0.0.1:9090/index.html`);
});