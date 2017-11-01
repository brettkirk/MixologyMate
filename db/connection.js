const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
let config;
if (process.env.DB_USERNAME && process.env.DB_PASSWORD && process.env.DB_NAME && process.env.DB_HOST && process.env.DB_DIALECT) {
  config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === undefined ? false : process.env.DB_LOGGING
  };
} else {
  config = {
      "username": "root",
      "password": null,
      "database": "mixologyMate",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
  }
}
let connection = new Sequelize(config.database, config.username, config.password, config);
connection.reset = () => {
  return connection.sync({force: true});
};

connection.sync().then(() => {
  console.log('Database properly connected.');
}).catch((err) => {
  console.log('Something went wrong with the database connection:');
  console.error(err);
});

module.exports = connection;