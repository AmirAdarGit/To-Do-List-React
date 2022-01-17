var { app } = require("./app");

const port = 4000;

console.log("on server");

const server = app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

module.exports = server;
