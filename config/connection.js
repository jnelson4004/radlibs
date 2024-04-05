//  establishes a connection to MySQL database using
// Sequelize and exports the configured instance for
// use in other parts of the app. The database config
// (host, port, username, and pw) loaded from .env
// for security and flexibility.
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001,
  }
);

module.exports = sequelize;