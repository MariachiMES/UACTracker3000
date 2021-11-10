const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const newUacRoutes = require("./newUacRoutes");
const editUAC = require("./editUACRoutes");
const newSponsorRoutes = require("./newSponsorRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/uac", newUacRoutes);
router.use("/edit", editUAC);
router.use("/sponsor", newSponsorRoutes);
module.exports = router;
