module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [],
    },
    plugins: [],
};
