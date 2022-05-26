module.exports = app => {
    const artists = require("../controllers/artist.controller.js");
    var router = require("express").Router();
    // Create a new Lesson for a Tutorial
    router.post("/:albumId/tracks/", tracks.create);
    // Retrieve all Lessons for a Tutorial
    router.get("/:albumId/tracks/", tracks.findAll);
    // Retrieve all published Lessons for a Tutorial
    router.get("/:albumId/tracks/published", tracks.findAllPublished);
    // Retrieve a single Lesson with id
    router.get("/:albumId/tracks/:id", tracks.findOne);
    // Update a Lesson with id
    router.put("/:albumId/tracks/:id", tracks.update);
    // Delete a Lesson with id
    router.delete("/:albumId/tracks/:id", tracks.delete);
    // Delete all Lessons
    router.delete("/:albumId/tracks/:id", tracks.deleteAll);
    app.use('/api/albums', router);
  };