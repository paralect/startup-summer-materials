const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        __dirname + '/src/index.jsx',
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.styl$/,
            loaders: ['style', 'css', 'stylus']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
