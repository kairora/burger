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

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let cond = "id = " + req.params.id;
    let devoured = req.body.devoured
    console.log("condition", cond);
  
    burger.updateOne(devoured, cond, function(result) {
        console.log(devoured + " is the dev state")
        console.log(result)
        if (result.changedRows == 0) {
            return res.status(500).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;
  