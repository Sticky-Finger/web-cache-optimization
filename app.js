
const http = require('http');
const url = require('url');
const PORT = 8080;

let server = http.createServer(function(request, response) {
    const pathname = url.parse(request.url).pathname;
    response.write(pathname);
    response.end();
});

server.listen(PORT);
console.log('Server running at port : ' + PORT);