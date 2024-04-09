const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log('hello')
  });

router.get("/", apiRoutes, async (req, res) => {
    console.log("eat my jorts")
  });


router.use('/', apiRoutes);

module.exports = router;