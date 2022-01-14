// var { app } = require("./server");
var { app } = require("./app");
express = require("express");

const port = process.env.PORT;
const router = express.Router();

app.use("/", router);

console.log("hereeeeeeee");

router.post("/api/google-login", async (req, res) => {
  updateAnsInsert(users, req.body.userData);
  res.status(201).send("creat user");
});

router.get("/", async (req, res) => {
  res.send("Hello World!  sss");
  console.log("the users are: ");
  console.log(users);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
