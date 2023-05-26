module.exports = app => {
  const favourites = require("../controllers/favourites.controller.js");
  var router = require("express").Router();

  // Update a Cat with id
  router.put("/:id", favourites.update);
app.use("/api/favourites", router);
};
