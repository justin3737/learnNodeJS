var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var morgan = require('morgan');

app.use(morgan('short'));
app.use(express.static(__dirname));

app.use(function(req, res, next){
    res.type('text/plain');
    res.end('Hello World!');
});

var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port, function(){
     console.log(server.address().port);
});