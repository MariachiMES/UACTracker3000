const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const newUacRoutes = require("./newUacRoutes");
const editUAC = require("./editUACRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/uac", newUacRoutes);
router.use("/edit", editUAC);
module.exports = router;
