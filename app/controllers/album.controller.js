const db = require("../models");
const Album = db.albums;
const Op = db.Sequelize.Op;
const fs = require("fs");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.query.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const album = {
    title: req.query.title,
    description: req.query.description,
    artist: req.query.artist,
    fileType:req.file != undefined ? req.file.mimetype: null,
    fileName:req.file != undefined ? req.file.originalname: null,
    data:req.file != undefined ? fs.readFileSync(
      __basedir + "/resources/static/assets/uploads/" + req.file.filename): null,
      releasedYear: req.query.releasedYear,
      artistId: req.query.artistId !=undefined ? parseInt(req.query.artistId) : null
  };
  // Save Tutorial in the database
  Album.create(album)
    .then(data => {
    
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Album."
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Album.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving albums."
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Album.findByPk(id)
    .then(data => {
    
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Album with id=${id}.`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Album with id=" + id
      });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

  const album = {
    title: req.query.title!=undefined ? req.query.title:null,
    description: req.query.description!=undefined ? req.query.description:null,
    artist:req.query.artist!=undefined ? req.query.artist:null,
    fileType:req.file != undefined ? req.file.mimetype: null,
    fileName:req.file != undefined ? req.file.originalname: null,
    data:req.file != undefined ? fs.readFileSync(
      __basedir + "/resources/static/assets/uploads/" + req.file.filename): null

  };
  const id = req.params.id;
  Album.update(album, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Album was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Album with id=${id}. Maybe Album was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Album with id=" + id
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Album.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Album was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Album with id=${id}. Maybe Album was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Album with id=" + id
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Album.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Albums were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all albums."
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Album.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving albums."
      });
    });
};

// Retrieve all albums from the database with given artist id.
exports.findAllWithArtist = (req, res) => {
  const artistId = req.params.artistId;
  
  Album.findAll({ where: {artistId : artistId} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving albums."
      });
    });
};