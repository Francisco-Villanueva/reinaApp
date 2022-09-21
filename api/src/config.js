const { config } = require("dotenv");
config();

module.exports = {
  data: {
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
};
