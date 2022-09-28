const server = require("./app");
const { conn } = require("./db");

conn.sync({ force: false }).then(() => {
  server.listen(4000, () => {
    console.log("%s server runnin on port 4000");
  });
});
