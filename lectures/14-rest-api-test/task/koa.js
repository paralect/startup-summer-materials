const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mount = require('koa-mount');

const usersRouter = require('./routes/users');

const app = koa();
require('koa-validate')(app);

app.use(bodyParser());

app.use(mount('/api/v1/users', usersRouter.routes()));

module.exports = app;
