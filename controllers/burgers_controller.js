const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    if(req.body.burger_name != "") {
        burger.insertOne(req.body.burger_name.toString().trim(), function(result) {
            res.redirect("/");
        });
    }
});
  
router.put("/:id", function(req, res) {
    burger.updateOne(req.params.id, () => {
      res.redirect("/")
    });
});

module.exports = router;
  