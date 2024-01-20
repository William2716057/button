'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    // Path to the requested resource
    var filePath = '.' + req.url;

    // If request is for '/', serve index.html
    if (filePath === './') {
        filePath = './index.html';
    }

    // Read content of file
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // If not found, send 404 response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            // Determine content type based on file extension
            var contentType = 'text/html';
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            }

            // Serve content of file with appropriate content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}).listen(port);



