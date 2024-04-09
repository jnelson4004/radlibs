const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log('hello')
  });

router.get("/", async (req, res) => {
  res.render('login');
    console.log("eat my jorts")
  });




module.exports = router;