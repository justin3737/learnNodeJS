var querystring = require('querystring');

function hello (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
};

function formGet(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<!DOCTYPE html>' +
            '<body>' +
            '<form action="/form/" method="post">' +
            'Favorite food: <input type="text" name="food">' +
            '<input type="submit" value="Submit">' +
            '</form>' +
            '</html>');
}

function formPost(req, res) {
    var data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function(){
        var formData = querystring.parse(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<!DOCTYPE html>' +
            '<body>' +
            '<div>Your faorite food is ' +
            formData['food'] + '.</div>' +
            '</body>' +
            '</html>');
    });
}

function fourOFour (req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 not found');
}

exports.hello = hello;
exports.formGet = formGet;
exports.formPost = formPost;
exports.fourOFour = fourOFour;

