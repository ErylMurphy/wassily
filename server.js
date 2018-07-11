const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const parallel = require('run-parallel');
const session = require("express-session");

const color   = require('dominant-color'),
    imgPath = './path/to/your/image.jpg'

color(imgPath, function(err, color){
  // hex color by default
  console.log(color) // '5b6c6e'
})

color(imgPath, {format: 'rgb'}, function(err, color){
  console.log(color) // ['91', '108', '110']
})