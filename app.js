
const http = require('http');
const url = require('url');
const PORT = 8080;
const fs = require('fs');
const path = require('path');
const mime = require('./mime').types;

let server = http.createServer(function(request, response) {
    const pathname = url.parse(request.url).pathname;
    const realPath = 'assets' + pathname;
    let ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    const contentType = mime[ext] || 'text/plain';

    fs.exists(realPath, function (exists) {
      if (!exists) {
        response.writeHead(404, {
          'Content-Type': 'text/plain',
        });

        response.write('This request URL ' + pathname + ' was not found on this server');
        response.end();
      } else {
        fs.readFile(realPath, 'binary', function (err, file) {
          if (err) {
            response.writeHead(500, {
              'Content-Type': 'text/plain',
            });
            response.end();
          } else {
            response.writeHead(200, {
              'Content-Type': contentType,
            });
            response.write(file, 'binary');
            response.end();
          }
        });
      }
    });
});

server.listen(PORT);
console.log('Server running at port : ' + PORT);