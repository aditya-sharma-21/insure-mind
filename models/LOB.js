const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LOBSchema = new Schema({
  category_name: {
    type: String,
    require: true,
  },
});

const LOB = mongoose.model("LOB", LOBSchema);

module.exports.LOB = LOB;
