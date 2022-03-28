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

router.get("/error", (req, res) => {
  res.render("error", {
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
    const casemanager = cmDbData.map((cmData) => cmData.get({ plain: true }));

    const logged_in_user = await CaseManager.findOne({
      where: { email: req.session.email },
      include: [{ all: true, nested: true }],
    });
    const is_team_lead = logged_in_user.dataValues.is_team_lead;

    // if (!me) {
    res.render("caseload", {
      is_team_lead,
      uacTable,
      casemanager,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      caseload: req.body.UACs,
      logged_in: req.session.logged_in,
    });
    // }
    // {
    //   res.redirect("/table");
    // }
  } catch (err) {
    console.log(err);
    res.redirect("/error");
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

    res.render("dashboard", {
      cmCaseload,
      uac,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/error");
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
    res.redirect("/error");
  }
});
//Single Case Manager Admin View
router.get("/casemanager/:id", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/");
    }
    const logged_in_user = await CaseManager.findOne(
      {
        where: {
          email: req.session.email,
        },
      },
      {
        include: [{ all: true, nested: true }],
      }
    );
    console.log(
      `This user is a team lead: ${logged_in_user.dataValues.is_team_lead}`
    );
    const is_team_lead = logged_in_user.dataValues.is_team_lead;
    if (!is_team_lead) {
      res.redirect("/caseload");
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

    const cmDbData = await CaseManager.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
    const allCMs = await CaseManager.findAll({
      where: { is_team_lead: true },
      include: [{ all: true, nested: true }],
    });

    const teamLeads = allCMs.map((teamLeadData) =>
      teamLeadData.get({ plain: true })
    );

    const uacTable = dbUACdata.map((uacData) =>
      uacData.get({ plain: true, nested: true })
    );
    const casemanager = cmDbData.get({ plain: true, nested: true });

    res.render("casemanager", {
      teamLeads,
      uacTable,
      casemanager,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      caseload: req.body.UACs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("this is the error: " + err);
    res.redirect("/error");
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
    const logged_in_user = await CaseManager.findOne(
      {
        where: {
          email: req.session.email,
        },
      },
      {
        include: [{ all: true, nested: true }],
      }
    );
    console.log(
      `This user is a team lead: ${logged_in_user.dataValues.is_team_lead}`
    );
    const me = logged_in_user.dataValues.is_team_lead;
    if (!me) {
      res.redirect("/caseload");
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
    console.log(me);
    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));

    res.render("table", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/error");
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
    res.render("discharged", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/error");
  }
});

module.exports = router;
