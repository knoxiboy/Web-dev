const { createServer } = require('node:http');
const { readFileSync } = require('node:fs'); //or const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text\html');
  res.end('<h1> Hello World </h1>\n' +
    '<p> This is a simple Node.js server. </p>\n' +
    '<p> You can use this as a starting point for your web applications. </p>\n' +
    '<p> Enjoy coding! </p>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
