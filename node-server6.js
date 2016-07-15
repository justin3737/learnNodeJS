var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req, res, next){
    console.log(req.url, req.socket.address().address);
    next();
});

app.use(function(req, res, next){
    var filepath = __dirname + req.url;
    fs.stat(filepath, function(err, stats){
        if (!err && stats.isFile()) {
            serveFile();
        } else {
            next();
        }
    });

    function serveFile() {
        var rs = fs.createReadStream(filepath);
        rs.pipe(res);
    }
});

var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port, function(){
     console.log(server.address().port);
});