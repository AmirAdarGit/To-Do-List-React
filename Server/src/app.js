require("dotenv").config();
var cors = require("cors");
const express = require("express");
var router = require("./routes");
const mysql = require("mysql");

// var db = mysql.createConnection({
//   host: "localhost:5432",
//   user: "root",
//   password: "amirA123",
//   database: "postgres",
// });

// db.connect((err) => {
//   if (err) {
//     console.log("asdfasdfasfdasfasdfssfaffasas...");

//     throw err;
//   }
//   console.log("Database Connected...");
// });

var app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json()); // read the request payload
app.use("/", router);

console.log("on app");

module.exports.app = app;
// module.exports.db = db;
