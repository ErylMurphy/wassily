const db = require("../database/connection");

const Compalbum = {};

Compalbum.allOfColor = () => {
  return db.any(`SELECT * FROM compalbums WHERE color_name = ${color_name}`);
};

module.exports = Compalbum;