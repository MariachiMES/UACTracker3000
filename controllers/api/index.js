const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const newUacRoutes = require("./newUacRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/uac", newUacRoutes);
module.exports = router;
