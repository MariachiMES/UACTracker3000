const router = require("express").Router();
const { CaseManager, UAC, Sponsor } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

router.get("/new-user", async (req, res) => {
  res.render("signUp");
});

//GET ONE SPONSOR

router.get("dashboard/:sponsor_id", async (req, res) => {
  try {
    const singleSponsor = await Sponsor.findByPk(req.params.sponsor_id);
    const sponsor = singleSponsor.get({ plain: true });

    res.render("sponsortab", {
      sponsor,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET ONE UAC, RENDER TO DASHBOARD
router.get("/dashboard/:id", async (req, res) => {
  try {
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

//GET ONE UAC AND RENDER TO SPONSOR TAB//
router.get("/sponsortab/:id", async (req, res) => {
  try {
    const singleUACinfo = await UAC.findByPk(req.params.id);

    const uac = singleUACinfo.get({ plain: true });
    console.log("UAC INFO", uac);

    res.render("sponsortab", {
      uac,
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
    res.redirect("/profile");
    return;
  }

  res.render("login");
});
//RENDER LOGIN PAGE
router.get("/", (req, res) => {
  res.render("login");
});
// COUNT submitted
// router.get("/table", async (req, res) => {
//   try {
//     const submittedCases = await UAC.findAll({
//       attributes: [
//         "submitted",
//         [sequelize.fn("COUNT", sequelize.col("submitted")), "n_submitted"],
//       ],
//     });
//     const casesSubmitted = submittedCases.map((submittedData) =>
//       submittedData.get({ plain: true })
//     );
//     console.log(casesSubmitted);
//     res.render("table", {
//       submittedCases,
//     });
//     console.log(submittedCases);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// //COUNTS approvals
// router.get("/table", async (req, res) => {
//   try {
//     const approvedCases = await UAC.findAll({
//       attributes: [
//         "approved",
//         [sequelize.fn("COUNT", sequelize.col("approved")), "n_approved"],
//       ],
//     });
//     const casesApproved = approvedCases.map((approvedData) =>
//       approvedData.get({ plain: true })
//     );
//     console.log(casesApproved);
//     res.render("table", {
//       submittedCases,
//     });
//     console.log(approvedCases);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/table", async (req, res) => {
//   try {
//     const remandedCases = await UAC.findAll({
//       attributes: [
//         "remanded",
//         [sequelize.fn("COUNT", sequelize.col("remanded")), "n_remanded"],
//       ],
//     });
//     const casesRemanded = remandedCases.map((remandedData) =>
//       remandedData.get({ plain: true })
//     );
//     console.log(casesRemanded);
//     res.render("table", {
//       remandedCases,
//     });
//     console.log(remandedCases);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET all UAC's and CM's, RENDER TO TABLE VIEW
router.get("/table", async (req, res) => {
  try {
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
              "(SELECT COUNT(uacname) FROM uac WHERE uac.uacname IS NOT NULL)"
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

module.exports = router;
