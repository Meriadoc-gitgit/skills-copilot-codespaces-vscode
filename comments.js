// Create web server
// Create a web server that listens on port 3000 and serves up the comments.js file.

// Use the fs module to read the comments.js file and serve it up as the response.
// Remember to set the Content-Type header on the response to text/javascript.

// When you visit http://localhost:3000 in your browser, you should see the contents of comments.js displayed in the browser.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/javascript'
  });
  fs.createReadStream('./comments.js').pipe(res);
});

server.listen(3000);
console.log('Server listening on port 3000');