const router = require("express").Router();
const { CaseManager, UAC, Sponsor } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/dashboard", async (req, res) => {
//   res.render("dashboard");
// });

// router.get("/dashboard", async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const projectData = await CaseManager.findAll({
//       include: [
//         {
//           model: CaseManager,
//           attributes: ["name"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("dashboard", {
//       projects,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
router.get("/dashboard/:id", async (req, res) => {
  try {
    const singleUACinfo = await UAC.findByPk(req.params.id);

    const uac = singleUACinfo.get({ plain: true });

    res.render("dashboard", {
      uac,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/dashboard/:id", async (req, res) => {
//   try {
//     const singleUACData = await UAC.findByPk(req.params.id, {
//       include: [{ all: true, nested: true }],
//     });

//     const singleUAC = singleUACData.get({ plain: true });

//     res.render("dashboard", {
//       singleUAC,
//     });
//     console.log(singleUAC);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get("/profile", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await CaseManager.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: CaseManager }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("profile", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.get("/table", (req, res) => {
//   // if (req.session.logged_in) {
//   res.render("table", {
//     model: UAC,
//     attributes: ["a_number", "case_manager"],
//   });
//   // }
// });

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/", (req, res) => {
  res.render("login");
});

// GET all UAC's and CM's for table
router.get("/table", async (req, res) => {
  try {
    const dbUACdata = await UAC.findAll({
      include: [{ all: true, nested: true }],
    });
    const cmDbData = await CaseManager.findAll({
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));
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

// //GET all CM names for assignment
// router.get("/table", async (req, res) => {
//   try {
//     const cmDbData = await CaseManager.findAll({
//       include: [{ all: true, nested: true }],
//     });

//     const cmDropDown = cmDbData.map((cmData) => cmData.get({ plain: true }));

//     res.render("table", {
//       cmDropDown,
//     });
//     console.log(cmDropDown);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
