// Allows you to create modular, mountable route handlers
const router = require('express').Router();

// Contains route handlers for the home page routes
const homeRoutes = require ('./homeRoutes');

// Any routes defined in homeRoutes is acessible
// from the root URL
router.use('/', homeRoutes);

// exports the router module so it can be used
// in other parts of the app
module.exports = router;