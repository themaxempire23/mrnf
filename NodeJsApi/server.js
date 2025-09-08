const { createServer } = require('node:http'); //in build http module wich allows me to create server and client

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200; // to indicate a succesful response
  res.setHeader('Content-Type', 'text/plain');
  res.end('My Node Server, is up and running!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
