// ANCHOR - Init Variable
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(require(path.resolve(__dirname, '../webpack.config.js')));
const middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    app.use(
        express.static('dist'),
        middleware(compiler, {

        })
    );
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'))
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

module.exports = app;