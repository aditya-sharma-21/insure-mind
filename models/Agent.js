const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agentSchema = new Schema({
  agent_name: {
    type: String,
    require: true,
  },
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports.Agent = Agent;
