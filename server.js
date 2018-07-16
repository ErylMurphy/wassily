require('dotenv').config()
const express = require('express');
const app = express();
const CompAlbum = require('./models/Compalbum');
const bodyParser = require("body-parser");
require('../../TopAlbums/TopAlbums.js');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const bcrypt = require('bcrypt');
const parallel = require('run-parallel');
const session = require("express-session");

const PORT = process.env.PORT || 3001;

console.log(process.env.API_KEY);

app.get("/", (request, response) => {
  response.send(`hello world`);
});


app.get('/compalbums.json', (request, response) => {
  CompAlbum.all()
  .then(compalbums => {
    console.log(compalbums)
    response.json(compalbums)
  });
});

app.get('/compalbums/color_name.json', (request, response) => {
  Compalbum.allOfColor(request.params.color_name)
  .then(compalbums => {
    console.log(compalbums)
    response.json(compalbums)
  });
});

app.listen(PORT, () => {
console.log(`Express web server listening on port ${PORT}`);
});