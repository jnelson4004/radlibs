// Sets up a router to handle user-related routes, 
// such as register, login, profile, etc., and 
// exports the router for use in other parts of the app.
const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;