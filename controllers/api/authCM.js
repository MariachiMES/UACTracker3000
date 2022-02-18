const router = require("express").Router();
const { authCM } = require("../../models");

router.post("/", async (req, res) => {
  console.log("Create new uac", req.body);
  const cmData = await authCM.create(req.body);
  console.log(cmData);

  res.sendStatus(200);
});

module.exports = router;
