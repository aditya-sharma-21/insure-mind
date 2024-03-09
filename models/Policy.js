const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
  policy_number: {
    type: String,
    require: true,
  },
  policy_start_date: {
    type: Date,
    require: true,
  },
  policy_end_date: {
    type: Date,
    require: true,
  },
  policy_category: {
    type: String,
    require: true,
  },
  collection_id: {
    type: Schema.Types.ObjectId,
    ref: "Agent",
  },
  company_collection_id: {
    type: Schema.Types.ObjectId,
    ref: "Carrier",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Policy = mongoose.model("Policy", PolicySchema);

module.exports.Policy = Policy;
