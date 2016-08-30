
const db = require('../lib/db')
const validate = require('jsonschema').validate
const Promise = require('bluebird')

class BaseService {
  constructor(collection, schema) {
    this._model = db.get(collection)
    this._schema = schema
  }

  _validPayload(doc) {
    return new Promise((resolve, reject) => {
      const validationResult = validate(doc, this._schema)

      if (validationResult.errors.length > 0) {
        return reject('Invalid document: ' +
          validationResult.errors.join('\n'))
      }
      return resolve(doc)
    })
  }

  _ensureChatId(query) {
    return new Promise((resolve, reject) => {
      if (query && query.chatId) {
        delete query.chatId
        resolve(query)
      } else {
        reject('Query segregation error: Missing `chatId` query parameter')
      }
    })
  }

  create(doc) {
    return this._validPayload(doc).then(this._model.insert)
  }

  find(query) {
    return this._ensureChatId(query)
      .then(() => {
        return this._model.find(query)
      })
  }

  findOne(query) {
    return this._ensureChatId(query)
      .then(() => {
        return this._model.findOne(query)
      })
  }

  remove(query) {
    return this._model.remove(query)
  }

  update(query, update) {
    return this._model.update(query, update)
  }

  count(query) {
    return this._model.count(query)
  }
}

module.exports = BaseService
