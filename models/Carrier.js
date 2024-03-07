const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carrierSchema = new Schema({
  company_name: {
    type: String,
    require: true,
  },
});

const Carrier = mongoose.model("Carrier", carrierSchema);

module.exports.Carrier = Carrier;
