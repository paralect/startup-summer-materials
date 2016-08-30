const BaseService = require('./base.service');
const monk = require('monk');
const logger = global.logger;

/**
* Inits connection with mongodb, manage reconnects, create factory methods
*
* @return {Object} with a factory method {createService}, that creates a
* mongodb service
**/
const init = (connectionString) => {
  // options docs: http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/
  console.log(connectionString);
  const db = monk(connectionString, { safe: true });
  logger.info(`Connecting to mongodb: ${connectionString}`);

  db.on('close', (err) => {
    if (err) {
      logger.error(err, `Lost connection with mongodb: ${connectionString}`);
    } else {
      logger.warn(`Closed connection with mongodb: ${connectionString}`);
    }
  });

  db.on('connected', (err) => {
    if (err) {
      logger.error(err);
    } else {
      logger.info(`Connected to mongodb: ${connectionString}`);
    }
  });

  db.createService = function createService(collectionName, validateSchema, options = {}) {
    const opt = options;
    if (validateSchema) {
      opt.validateSchema = validateSchema;
    }

    const collection = db.get(collectionName, { castIds: false });
    return new BaseService(logger, collection, opt);
  };

  return db;
};

module.exports = init;
