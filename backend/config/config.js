const env = require('dotenv');

module.exports = {
  username: env.config.USER_NAME,
  password: env.config.USER_PASSWORD,
  database: env.config.DB_NAME,
  host: env.config.DB_HOST,
  dialect: "mysql"
}
