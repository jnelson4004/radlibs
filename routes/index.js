const router = require('express').Router();

const apiRoutes = require("./apiRoutes.js");

router.use('/', apiRoutes);

module.exports = router;