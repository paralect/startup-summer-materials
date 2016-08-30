let koa = require('koa');
let views = require('co-views');
let serve = require('koa-static');
let mount = require('koa-mount');
let webpack = require('webpack');
let webpackMiddleware = require('koa-webpack-dev-middleware');
let webpackConfig = require('./../client/webpack.config');

let app = koa();
let render = views(__dirname, {
    ext: 'html',
    map: {html: 'ejs'},
});

// rebuild bundle in non-production enviroment on source files change
if (process.env.NODE_ENV === 'production') {
    app.use(mount(webpackConfig.output.publicPath, serve(webpackConfig.output.path)));
} else {
    let webpackMiddlewareOptions = {
        noInfo: false,
        quiet: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        // public path to bind the middleware to 
        // use the same as in webpack
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        },
    };

    app.use(webpackMiddleware(webpack(webpackConfig), webpackMiddlewareOptions));
}

app.use(function *() {
    this.body = yield render('index');
});

app.listen(3000);
