const http = require('http');
const port = 80;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('🚀 Hello from Cloud Hosted Node.js App!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
