var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//routes
var index = require('./routes/index.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
  var port= server.address().port;
  console.log('Listening on port ', port);
});
