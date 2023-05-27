module.exports = app => {
  const messages = require("../controllers/message.controller.js");

  var router = require("express").Router();
  // Create a new Cat
  router.post("/", messages.create);

  // Retrieve all Cats
  router.get("/", messages.findAll);

  // Retrieve a single Cat with id
  router.get("/:id", messages.findOne);

  app.use("/api/messages", router);
};
