var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var morgan = require('morgan');

app.use(morgan('short'));
app.use(express.static(__dirname));

var router1 = express.Router();
router1.get('/', function(req, res){
    res.type('text/plain');
    res.end('Hello router');
});

var router2 = express.Router();
router2.get('/kernal', function(req, res){
    res.type('text/plain');
    res.end('You are in system/kernal');
});
router2.get('/v', function(req, res){
    res.type('text/plain');
    res.end('You are in system/v');
});

app.use('/',router1);
app.use('/system',router2);

var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port, function(){
     console.log(server.address().port);
});