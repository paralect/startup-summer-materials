const usersRouter = require('koa-router')();

const Users = require('../services/users');
const users = new Users();

usersRouter.post('/login', function *login() {
  this.checkBody('email').isEmail('Please enter a valid email address')
    .trim()
    .toLow();

  this.checkBody('password')
    .isLength(6, 20, 'Password must be 6-20 characters')
    .trim();

  if (this.errors) {
    this.body = this.errors;
    this.status = 400;
    return;
  }

  const { email, password } = this.request.body;
  this.body = yield users.login({ email, password });
});

module.exports = usersRouter;
