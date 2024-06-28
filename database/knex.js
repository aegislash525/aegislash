const knex = require('knex');
const knexConfig = require('../knexfile');
// TODO remove hard-coded mode [development, production]
const db = knex(knexConfig.development);

module.exports = db;
