//var connectionString = 'mongodb://127.0.0.1:27017/test';
//var mongoose = require("mongoose");
//mongoose.connect(connectionString);
/*
if(process.env.MLAB_USERNAME) {
  connectionString = process.env.MLAB_USERNAME + ":" +
  process.env.MLAB_PASSWORD + "@" +
  process.env.MLAB_HOST + ':' +
  process.env.MLAB_PORT + '/' +
  process.env.MLAB_APP_NAME;
}*/
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
require("./assignment/app.js")(app);
require ("./test/app.js")(app);


var port = process.env.PORT || 3000;

app.listen(port);