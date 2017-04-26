var express = require('express');
var path = require('path');
var app = express();

var port = 8008;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', function(req, res) {
  res.sendFile('index');
})

app.listen(port, function() {
  console.log(`Connected to port ${port}`);
})