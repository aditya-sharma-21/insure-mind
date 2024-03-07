const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  zip_code: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;
