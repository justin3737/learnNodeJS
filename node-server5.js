var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log(req.url, req.socket.address().address);
    next();
});

var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port, function(){
     console.log(server.address().port);
});