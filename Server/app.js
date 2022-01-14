require("dotenv").config();
var cors = require("cors");

const express = require("express");
const { GoogleAuth } = require("google-auth-library");
const router = express.Router();

const client = new GoogleAuth(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const port = process.env.PORT;

var app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json()); // read the request payload
app.use("/", router);

const users = [];

const updateAnsInsert = (users, userData) => {
  const index = users.findIndex((user) => user.email == userData.email);
  console.log("the index", index);
  if (index >= 0) {
    console.log("Updating an existing user");
    users[index] = userData;
  } else {
    console.log("Create new user");
    users.push(userData);
  }
  console.log(users);
};

router.post("/api/google-login", async (req, res) => {
  updateAnsInsert(users, req.body.userData);
  res.status(201).send("live");

  // TODO: return 200 to existing user and 201 for new user(create user)
});

router.get("/", async (req, res) => {
  res.send("Hello World!  sss");
  console.log("the users are: ");
  console.log(users);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
module.exports = app;
