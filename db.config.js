module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "sUmmer@1237$",
  DB: "albumDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
