const { Pool } = require("pg");
const { data } = require("./config");

const db = new Pool({
  user: data.user,
  password: data.password,
  host: data.host,
  port: data.port,
  database: data.database,
});

module.exports = db;
