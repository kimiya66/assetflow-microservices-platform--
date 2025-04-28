const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('assets', 'user', 'password', {
  host: process.env.DB_HOST || 'localhost', // to run it from docker the host should be based on asset-db as defined in docker-composer.yml - in docker localhost not working
  dialect: 'mysql',
});

module.exports = sequelize;