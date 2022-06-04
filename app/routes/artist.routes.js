module.exports = app => {
  const artists = require("../controllers/artist.controller.js");
  const upload = require("../middleware/upload");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/",upload.single("file"), artists.create);
  // Retrieve all Tutorials
  router.get("/", artists.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", artists.findOne);
  // Update a Tutorial with id
  router.put("/:id",upload.single("file"), artists.update);
  // Delete a Tutorial with id
  router.delete("/:id", artists.delete);
  // Delete all Tutorials
  router.delete("/", artists.deleteAll);
  app.use('/api/artists+', router);
};