module.exports = app => {
  const albums = require("../controllers/album.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", albums.create);
  // Retrieve all Tutorials
  router.get("/", albums.findAll);
  // Retrieve all published Tutorials
  router.get("/published", albums.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", albums.findOne);
  // Update a Tutorial with id
  router.put("/:id", albums.update);
  // Delete a Tutorial with id
  router.delete("/:id", albums.delete);
  // Delete all Tutorials
  router.delete("/", albums.deleteAll);
  app.use('/api/albums', router);
};