
var express = require('express')

var burger = require('../models/burger')

//Create the router for the app, and export the router at the end of your file.

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all().then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, response) {
  burger.create(req.body.burger_name).then(function(result) {
  	response.json({ id: result.insertId });
  });
});

router.put("/api/burger", function(req, res) {
  burger.update(req.body.id, true).then(function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
