const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.albums = require("./Album.model.js")(sequelize, Sequelize);
db.tracks = require("./Track.model.js")(sequelize, Sequelize);

db.albums.hasMany(db.tracks, {
  as: 'track'
});
db.tracks.belongsTo(db.albums, {
  foreignKey: 'albumId', as: 'album',
});

module.exports = db;