const router = require("express").Router();
const { CaseManager, authCM } = require("../../models");

//signup new user
router.post("/", async (req, res) => {
  console.log("Create new user");
  try {
    const userData = await authCM.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res.status(401).json({ message: "This email is not an authorized user" });

      return;
    }

    const newCMData = await CaseManager.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("Userdata - ", newCMData);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = newCMData.user_id;
      req.session.username = newCMData.username;
      req.session.email = newCMData.email;

      res.status(200).json(newCMData);
    });
  } catch (err) {
    console.log("Err", err);
    res.status(400).json(err);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  console.log("Login", req.body);
  try {
    const userData = await CaseManager.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(401)
        .json({ message: "Incorrect email or password, please try again" });

      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(401)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.username = userData.username;
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("logging-out");
    });
  } else {
    console.log(res, "post logout else");
    res.status(404).end();
  }
});

module.exports = router;
