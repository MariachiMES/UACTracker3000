const router = require("express").Router();
const { CaseManager, UAC, Sponsor } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

router.get("/new-user", async (req, res) => {
  res.render("signUp");
});

//GET ONE UAC, RENDER TO DASHBOARD
router.get("/dashboard/:id", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const singleUACinfo = await UAC.findByPk(req.params.id);

    const uac = singleUACinfo.get({ plain: true });
    console.log("UAC INFO", uac);

    res.render("dashboard", {
      uac,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get ONE UAC, RENDER TO ADDRESS VERIFY
router.get("/address/:id", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const singleAddress = await UAC.findByPk(req.params.id);
    const address = singleAddress.get({ plain: true });
    console.log(address);

    res.render("address", {
      address,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOG USER IN
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
//RENDER LOGIN PAGE
router.get("/", (req, res) => {
  res.render("login");
});
//Delete ONE UAC
router.delete("/:uac_id", (req, res) => {
  //deletes one UAC
  UAC.destroy({
    where: {
      uac_id: req.params.uac_id,
    },
  })
    .then((deletedUAC) => {
      res.json(deletedUAC);
    })
    .catch((err) => res.json(err));
});

// GET all UAC's and CM's, RENDER TO TABLE VIEW including COUNT submitted, approved, remanded for ALL cases
router.get("/table", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const dbUACdata = await UAC.findAll({
      include: [{ all: true, nested: true }],
      attributes: {
        include: [
          [
            sequelize.literal(
              "(SELECT COUNT(submitted) FROM uac WHERE uac.submitted LIKE '%/%')"
            ),
            "totalSubmitted",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(uacname) FROM uac WHERE uac.intake LIKE '%/%' AND uac.discharged NOT LIKE '%/%')"
            ),
            "totaluacs",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(approved) FROM uac WHERE uac.approved LIKE '%/%')"
            ),
            "totalApproved",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(remanded) FROM uac WHERE uac.remanded LIKE '%/%')"
            ),
            "totalRemanded",
          ],
        ],
      },
    });
    console.log();
    const cmDbData = await CaseManager.findAll({
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));
    console.log(cmSelector);
    res.render("table", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
    });
    console.log(uacTable, cmSelector);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//renders all to discharged
router.get("/discharged", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const dbUACdata = await UAC.findAll({
      order: sequelize.literal("ORDER BY casemanager.username DESC"),
      include: [{ all: true, nested: true }],
      attributes: {
        include: [
          [
            sequelize.literal(
              "(SELECT COUNT(discharged) FROM uac WHERE uac.discharged LIKE '%/%')"
            ),
            "totalDischarged",
          ],
        ],
      },
    });
    console.log();
    const cmDbData = await CaseManager.findAll({
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));
    console.log(cmSelector);
    res.render("discharged", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
    });
    console.log(uacTable, cmSelector);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
