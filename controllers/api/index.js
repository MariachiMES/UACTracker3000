const router = require("express").Router();
const userRoutes = require("./userRoutes");
const newUacRoutes = require("./newUacRoutes");
const editUAC = require("./editUACRoutes");
const editSponsorRoutes = require("./editSponsorRoutes");
const editTaskRoutes = require("./editTaskRoutes");
const editRRRoutes = require("./editRRRoutes");
const editStatusRoutes = require("./editStatusRoutes");
const deleteUACRoute = require("./deleteUAC");
const authCM = require("./authCM");
const smartyStreets = require("./smartyStreets");
const roles = require("./roles");
const teamlead = require("./teamlead");

router.use("/users", userRoutes);
router.use("/uac", newUacRoutes);
router.use("/edit", editUAC);
router.use("/edit", editTaskRoutes);
router.use("/edit", editSponsorRoutes);
router.use("/edit", editRRRoutes);
router.use("/edit", editStatusRoutes);
router.use("/delete", deleteUACRoute);
router.use("/cm", authCM);
router.use("/smartystreets", smartyStreets);
router.use("/edit", roles);
router.use("/edit", teamlead);

module.exports = router;
