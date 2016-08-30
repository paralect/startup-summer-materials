const db = require('../db');

class Users {
  login({ email, password }) {
    return db.findOne({ where: { email, password } })
    .then((user) => {
      if (user.deleted) {
        return Promise.reject('User deleted');
      }
      return user;
    });
  }
}

module.exports = Users;
