const path = require('path');

module.exports = {
    entry: {
        main: './src/front'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./server/dist')
    },
}
