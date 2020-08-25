// ANCHOR - Init Variable
const webpack = require('webpack');
const path = require('path');
// const compiler = webpack('../../webpack.config.js');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
console.log(__dirname);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// app.use(middleware(webpack(webpackConfig), {
//     publicPath: webpackConfig.output.path
// }))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

module.exports = app;