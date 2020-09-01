const path = require('path');

module.exports = {
    entry: './src/front/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', 'src'],
        alias: {
            'terminal-css': path.join(__dirname, '../node_modules/xterm/css/xterm.css')
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./public/dist'),
    },
};