module.exports = app => {
  const tracks = require("../controllers/track.controller.js");
  var router = require("express").Router();
  // Create a new Lesson for a Tutorial
  router.post("/albums/:albumId/tracks/", tracks.create);
  //get all tracks
  router.get("/tracks", tracks.findAll);
  // get tracks of particulat album
  router.get("/albums/:albumId/tracks/", tracks.findAllAlbum);
  // Retrieve all published Lessons for a Tutorial
  router.get("/albums/:albumId/tracks/published", tracks.findAllPublished);
  // Retrieve a single Lesson with id
  router.get("/albums/:albumId/tracks/:id", tracks.findOne);
  // Update a Lesson with id
  router.put("/albums/:albumId/tracks/:id", tracks.update);
  // Delete a Lesson with id
  router.delete("/albums/:albumId/tracks/:id", tracks.delete);
  // Delete all Lessons
  router.delete("/albums/:albumId/tracks/:id", tracks.deleteAll);
  app.use('/api', router);
};