module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define("album", {
    
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    fileType: {
      type: Sequelize.STRING,
    },
    fileName: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },
    artistId: {
      type: Sequelize.INTEGER,
    }
  });
  return Album;
};