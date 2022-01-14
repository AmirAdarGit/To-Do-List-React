require("dotenv").config();

const express = require("express");
const { GoogleAuth } = require("google-auth-library");
const router = express.Router();

const client = new GoogleAuth(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const defaultPort = process.env.PORT;
console.log(process.env.PORT);
console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
app.use(express.json()); // read the request payload
app.use("/", router);

router.post("/api/google-login", async (req, res) => {
  res.status(201).send("creat user");
});

router.get("/", async (req, res) => {
  res.send("Hello World!  sss");
});

app.listen(defaultPort, () => {
  console.log(`Example app listening at http://localhost:${defaultPort}`);
});
