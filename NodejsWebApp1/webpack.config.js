const path = require('path');

module.exports = {
    entry: {
        server: 'sv_index.js',
        client: 'cl_index.js'
    },
    target: 'node',
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
    },
    optimization: {
        minimize: false,
    },
};