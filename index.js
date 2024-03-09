require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routers/index");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.log("Error :- ", err.message);
  });

const app = express();

app.use(bodyParser.json());

app.use("/api", router);

app.use("/", (req, res, next) => {
  return res.send(200, { message: "Welcome to Insure mind." });
});

app.listen(process.env.PORT, (req, res, next) => {
  console.log(`Server is running on PORT :- ${process.env.PORT}`);
});
