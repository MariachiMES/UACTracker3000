const router = require("express").Router();
const { UAC } = require("../../models");

router.post("/", async (req, res) => {
  console.log("Create new uac", req.body);
  const uacData = await UAC.create(req.body);
  console.log(uacData);

  res.sendStatus(200);
});

module.exports = router;
