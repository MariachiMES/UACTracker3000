const router = require("express").Router();
const { CaseManager } = require("../../models");

//CREATE new user
router.post("/", async (req, res) => {
  console.log("Create new user");
  try {
    const userData = await CaseManager.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("Userdata - ", userData);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = userData.user_id;
      req.session.username = userData.username;
      req.session.email = userData.email;

      res.status(200).json(userData);
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
      console.log("it's not working, david");
    });
  } else {
    console.log(res, "user route else");
    res.status(404).end();
  }
});

module.exports = router;
