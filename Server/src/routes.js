express = require("express");
const db = require("./app");

const router = express.Router();
const UsersInfo = require("./controller");

console.log("on router");

let users = new UsersInfo();

// Database connection
router.get("/create-table", (req, res) => {
  let sql = "CREATE DATABASE my-sql-to-do-list";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(201).send("Created Database");
      console.log(result);
    }
  });
});

router.post("/api/google-login", (req, res) => users.post(req, res));

module.exports = router;
