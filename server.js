const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const parallel = require('run-parallel')
const session = require("express-session");

// const LastFM = require("last-fm");
// const lastfm = new LastFM('750edfe3fb22652664ad82d8e4e9cd8b', { userAgent: 'MyApp/1.0.0 (http://example.com)' })

