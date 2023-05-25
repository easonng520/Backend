module.exports = app => {
  const contact = require("../controllers/contact.controller.js");
  var router = require("express").Router();
  // Create a new Cat
  router.post("/", contact.create);
  // Retrieve all Cats
  router.get("/", contact.findAll);
  app.use("/api/contact", router);
};
