var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime-types'); // Ajoutez ceci
var port = 8000;

http.createServer(function (req, res) {
    var requestPath = url.parse(req.url).pathname;
    var filePath;

    if (requestPath.startsWith('/build')) {
        filePath = path.join(__dirname, '..', requestPath);
    } else if (requestPath === '/') {
        filePath = path.join(__dirname, '../index.html'); // Serve index.html for root path
    } else {
        filePath = path.join(__dirname, '../build', requestPath);
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.error('Error reading file:', err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file');
        } else {
            var contentType = mime.contentType(path.extname(filePath)) || 'application/octet-stream';
            console.log('File loaded:', filePath); // Log the loaded file
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        }
    });
}).listen(port);

console.log("Node Server running at:");
console.log("   > Local: http://localhost:" + port);
