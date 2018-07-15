const express = require('express');
const app = express();
const CompAlbum = require('./models/Compalbum');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const parallel = require('run-parallel');
const session = require("express-session");

// const color   = require('dominant-color'),
//     imgPath = './path/to/your/image.jpg'

// color(imgPath, function(err, color){
//   // hex color by default
//   console.log(color) // '5b6c6e'
// })

// color(imgPath, {format: 'rgb'}, function(err, color){
//   console.log(color) // ['91', '108', '110']
// })

const PORT = process.env.PORT || 3001;


app.get("/", (request, response) => {
  response.send(`hello world`);
});

// app.get('/compalbums.json', (request, response) => {
//   Compalbum.allOfColor()
//   .then(compalbums => {
//     console.log(compalbums)
//     response.json(compalbums)
//   });
// });

app.get('/compalbums.json', (request, response) => {
  CompAlbum.all()
    .then(compalbums => {
      console.log(compalbums)
      response.json(compalbums)
    });
});

app.listen(PORT, () => {
console.log(`Express web server listening on port ${PORT}`);
});