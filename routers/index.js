const express = require("express");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const csv = require("csvtojson");
const { dataEntry } = require("../services/dataEnry");
const { Policy } = require("../models/Policy");
const { User } = require("../models/User");

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    const fileBuffer = req.file.buffer;

    let bufData = fileBuffer.toString();

    let data = await csv().fromString(bufData);

    console.log(data);
    let count = 0;
    for (let i in data) {
      await dataEntry(data[i]);
      count += 1;
      console.log("Counter :- ", count);
    }
    return res.send(data);
  } catch (error) {
    return res.send(400, error.message);
  }
});

router.post("/find-policy-by-email", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    let policy = await Policy.find({ user_id: user._id });

    return res.send(policy);
  } catch (error) {
    return res.send(400, error.message);
  }
});

router.post("/aggregate", async (req, res, next) => {
  try {
    const aggregatedPolicies = await Policy.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$userDetails",
      },
      {
        $group: {
          _id: "$_id",
          policies: { $push: "$$ROOT" },
        },
      },
    ]);

    res.send(aggregatedPolicies);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
