const { Agent } = require("../models/Agent");
const { Carrier } = require("../models/Carrier");
const { LOB } = require("../models/LOB");
const { Policy } = require("../models/Policy");
const { User } = require("../models/User");
const { UserAccount } = require("../models/UserAccount");

async function dataEntry(data) {
  let user = await User.findOne({ email: data.email });

  if (!user) {
    user = await User.create({
      first_name: data.first_name,
      dob: data.dob,
      address: data.address,
      phone_number: data.phone_number,
      state: data.state,
      zip: data.zip,
      email: data.email,
      gender: data.gender,
      userType: data.userType,
    });

    user.save();
  }

  let user_account = await UserAccount.findOne({
    account_name: data.account_name,
  });

  if (!user_account) {
    user_account = await UserAccount.create({
      account_name: data.account_name,
    });

    user_account.save();
  }

  let lob = await LOB.findOne({ category_name: data.category_name });

  if (!lob) {
    lob = await LOB.create({
      category_name: data.category_name,
    });

    lob.save();
  }

  let agent = await Agent.findOne({ agent_name: data.agent });

  if (!agent) {
    agent = await Agent.create({
      agent_name: data.agent,
    });

    agent.save();
  }

  let carrier = await Carrier.findOne({ company_name: data.company_name });

  if (!carrier) {
    carrier = await Carrier.create({
      company_name: data.company_name,
    });

    carrier.save();
  }

  let policy = await Policy.findOne({ policy_number: data.policy_number });

  if (!policy) {
    policy = await Policy.create({
      policy_number: data.policy_number,
      policy_start_date: data.policy_start_date,
      policy_end_date: data.policy_end_date,
      policy_category: data.category_name,
      collection_id: agent._id,
      company_collection_id: carrier._id,
      user_id: user._id,
    });

    policy.save();
  }
}

module.exports = {
  dataEntry,
};
