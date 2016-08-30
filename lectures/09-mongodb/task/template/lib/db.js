
const monk = require('monk')

const db = monk('localhost/summercamp')

module.exports = db
