var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hallo Express" });
});

router.get("/aaa", function (req, res, next) {
  res.send("something");
});

module.exports = router;
