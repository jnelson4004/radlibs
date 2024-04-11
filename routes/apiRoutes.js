const router = require('express').Router();


router.post('/', async (req, res) => {
  console.log('hello');
  });

router.get("/", async (req, res) => {
  res.render("login");
    console.log("eat my jorts");
  });

  router.get("/radlib", async (req, res) => {
    res.render("radlib");
    console.log("i'm in your area");
  });

  router.get("/login", async (req, res) => {
    res.render("login");
    console.log("i am going to sell your information");
  });

  router.get("/createaccount", async (req, res) => {
    res.render("createaccount");
    console.log("holy crap")
  });




module.exports = router;