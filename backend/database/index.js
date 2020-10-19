const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const Investidor = require('../models/Investidor.model');

const connection = new Sequelize(dbConfig);

Investidor.init(connection);

module.exports = connection;