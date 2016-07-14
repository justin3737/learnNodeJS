var http = require('http');
var handler = require('./common/handler');

var routes = {};
routes['/'] = {'GET': handler.hello};
routes['/form/'] = {
                    'GET' : handler.formGet,
                    'POST': handler.formPost
                };


http.createServer(function(req, res){
    if (routes[req.url][req.method]) {
        routes[req.url][req.method](req, res);
    } else {
        handler.fourOFour(req, res);
    }
}).listen(8080);