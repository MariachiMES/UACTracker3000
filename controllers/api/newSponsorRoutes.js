const router = require("express").Router();
const { Sponsor } = require("../../models");

router.post("/", async (req, res) => {
  console.log("Create new Sponsor", req.body);
  //   try {
  const sponsorData = await Sponsor.create(req.body);
  console.log(sponsorData);
  // const sponsorData = await Sponsor.create(req.body);
  // console.log(sponsorData);

  //     console.log("uac data: ", userData);
  //     req.session.save(() => {
  //       req.session.user_id = userData.user_id;
  //       req.session.logged_in = true;
  //       req.session.username = userData.username;
  //       req.session.email = userData.email;

  res.sendStatus(200);
  //     });
  //   } catch (err) {
  //     console.log("Err", err);
  //     res.status(400).json(err);

  //   }
});

module.exports = router;
