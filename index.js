require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  return res.send(200, { message: "Welcome to Insure mind." });
});

app.listen(process.env.PORT, (req, res, next) => {
  console.log(`Server is running on PORT :- ${process.env.PORT}`);
});
