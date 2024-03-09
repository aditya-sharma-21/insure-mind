const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
  account_name: {
    type: String,
    require: true,
  },
});

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

module.exports.UserAccount = UserAccount;
