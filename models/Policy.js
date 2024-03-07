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
    type: Schema.Types.ObjectId,
    ref: "LOB",
    require: true,
  },
  //   collection_id: {
  //     name: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  //   company_collection_id: {
  //     name: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  user_id: {
    name: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Policy = mongoose.model("Policy", PolicySchema);

module.exports.Policy = Policy;
