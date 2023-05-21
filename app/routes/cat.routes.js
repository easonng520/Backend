module.exports = app => {
  const cats = require("../controllers/cat.controller.js");

  var router = require("express").Router();

  // Create a new Cat
  router.post("/", cats.create);

  // Retrieve all Cats
  router.get("/", cats.findAll);

    // Retrieve all Cats Centre
  router.get("/centre", cats.findCentre);

    // Retrieve all Cats Breed
  router.get("/breed", cats.findBreed);

   // Retrieve all Cats Favourite
  router.get("/favourite", cats.findFavourite);

  // Retrieve all published Cats
  router.get("/published", cats.findAllPublished);

  // Retrieve a single Cat with id
  router.get("/:id", cats.findOne);

  // Update a Cat with id
  router.put("/:id", cats.update);

  // Delete a Cat with id
  router.delete("/:id", cats.delete);

  // Delete all Cats
  router.delete("/", cats.deleteAll);

  app.use("/api/cats", router);
};
