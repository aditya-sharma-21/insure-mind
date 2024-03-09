const express = require("express");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const csv = require("csvtojson");
const { dataEntry } = require("../services/dataEnry");

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res, next) => {
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
});

module.exports = router;
