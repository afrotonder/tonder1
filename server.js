// var express  = require('express');
// var app      = express();
// // var morgan = require('morgan');
// // var bodyParser = require('body-parser');
// var cors = require('cors');

// // app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
// app.use(bodyParser.json());
// app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(express.static('www'));
// app.set('port', process.env.PORT || 5000);
// app.listen(app.get('port'), function () {
//   console.log('Express server listening on port ' + app.get('port'));
// });



const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(__dirname + '/dist/<app-name>'));
app.use(express.static('www'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/<app-name>/index.html'));});
app.listen(process.env.PORT || 8080);
