const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAccount = new Schema({
  account_name: {
    type: String,
    require: true,
  },
});

const UserAgent = mongoose.model("UserAgent", userAccount);

module.exports.UserAgent = UserAgent;
