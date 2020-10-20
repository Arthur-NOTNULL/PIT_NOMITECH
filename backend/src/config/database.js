const { Sequelize } = require('sequelize');
require('dotenv/config');

const connection = new Sequelize({
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
});

connection.authenticate()
    .then(() => console.log("deu bom, o pai tá on"),
          () => console.error("Deu ruim, o pai tá off"));

module.exports = connection;