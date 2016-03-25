var express = require('express');
var app = express();

app.use(express.static('client'));

var indexController = require('./server/controllers/index');
app.use(indexController);

var server = app.listen(9250, function() {
  console.log('App server started.');
});
