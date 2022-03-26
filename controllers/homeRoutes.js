const router = require("express").Router();
const { CaseManager, UAC, Sponsor } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

router.get("/new-user", async (req, res) => {
  res.render("signUp");
});
router.get("/unauthorized", (req, res) => {
  res.render("unauthorized", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
  });
});

//render the caseload to a page
router.get("/caseload", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const dbUACdata = await UAC.findAll({
      order: [["user_id", "ASC"]],
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
    const cmDbData = await CaseManager.findAll({
      where: { email: req.session.email },
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmCaseload = cmDbData.map((cmData) => cmData.get({ plain: true }));
    // console.log(
    //   "HELLO",
    //   cmCaseload,
    //   `the name for the uac is ${cmCaseload[0].UACs[0].uacname}`
    // );
    res.render("caseload", {
      uacTable,
      cmCaseload,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      caseload: req.body.UACs,
      logged_in: req.session.logged_in,
    });

    // console.log(
    //   "this is the UAC info",
    //   uacTable,
    //   `this is the case manager info with the objects that are weird: ${cmCaseload}`
    // );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//GET ONE UAC, RENDER TO DASHBOARD
router.get("/dashboard/:id", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const singleUACinfo = await UAC.findByPk(req.params.id);
    const cmDbData = await CaseManager.findAll({
      where: { email: req.session.email },
      include: [{ all: true, nested: true }],
    });

    const cmCaseload = cmDbData.map((cmData) => cmData.get({ plain: true }));

    const uac = singleUACinfo.get({ plain: true });
    console.log("UAC INFO", uac);

    res.render("dashboard", {
      cmCaseload,
      uac,
      logged_in: req.session.logged_in,
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
    // console.log(address);

    res.render("address", {
      address,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//Single Case Manager Admin View
router.get("/casemanager/:id", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const dbUACdata = await UAC.findAll({
      order: [["user_id", "ASC"]],
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
    console.log(req.params.id);
    const cmDbData = await CaseManager.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) =>
      uacData.get({ plain: true, nested: true })
    );
    const casemanager = cmDbData.get({ plain: true, nested: true });
    console.log(casemanager, casemanager.email); // console.log(
    //   "HELLO",
    //   cmCaseload,
    //   `the name for the uac is ${cmCaseload[0].UACs[0].uacname}`
    // );
    res.render("casemanager", {
      uacTable,
      casemanager,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      caseload: req.body.UACs,
      logged_in: req.session.logged_in,
    });

    // console.log(
    //   "this is the UAC info",
    //   uacTable,
    //   `this is the case manager info with the objects that are weird: ${cmCaseload}`
    // );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//LOG USER IN
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
  });
});
//RENDER LOGIN PAGE
router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/caseload");
    return;
  }
  res.render("login", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
  });
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
      order: [["user_id", "ASC"]],
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
    const cmDbData = await CaseManager.findAll({
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));
    // console.log(
    //   "HELLO",
    //   cmSelector,
    //   `the name for the uac is ${cmSelector[0].UACs[0].uacname}`
    // );
    res.render("table", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      logged_in: req.session.logged_in,
    });

    console.log(
      "this is the UAC info",
      uacTable,
      `this is the case manager info with the objects that are weird: ${cmSelector}`
    );
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
      logged_in: req.session.logged_in,
    });

    console.log(uacTable, cmSelector);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
