const db = require("../database/connection");

const CompAlbum = {};

CompAlbum.allOfColor = () => {
  return db.any(`SELECT * FROM compalbums WHERE color_name = ${color_name}`);
};

CompAlbum.all = () => {
  return db.any(`SELECT * FROM compalbums`);
}

module.exports = CompAlbum;