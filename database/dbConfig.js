const environment = process.env.DB_ENVIRONMENT || "development";
const knexConfig = require('../knexfile.js')(environment);
module.exports = require("knex")(knexConfig);
