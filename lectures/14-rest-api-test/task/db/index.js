const db = {
  findOne: () => Promise.resolve({ id: 1, deleted: false }),
};

module.exports = db;
