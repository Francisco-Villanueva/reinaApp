const server = require("./app");
const { conn } = require("./db");

conn.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT || 4000, () => {
    console.log("%s server runing on port 4000");
  });
});
