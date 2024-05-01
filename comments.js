//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function(req, res) {
    //Parse the request URL
    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;
    var query = url_parts.query;

    if (path == '/comment') {
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
            });
            req.on('end', function() {
                var params = querystring.parse(body);
                comments.push(params.comment);
                res.end('Comment added');
            });
        } else {
            res.end(JSON.stringify(comments));
        }
    } else {
        fs.readFile('comments.html', function(err, data) {
            res.end(data);
        });
    }
});

server.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
