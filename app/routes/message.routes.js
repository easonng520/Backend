module.exports = app => {
  const messages = require("../controllers/message.controller.js");

  var router = require("express").Router();
  // Create a new Message
  router.post("/", messages.create);

  // Retrieve all Messages
  router.get("/", messages.findAll);

  // Update a Message with id
  router.put("/:id", messages.update);

  app.use("/api/messages", router);
};
