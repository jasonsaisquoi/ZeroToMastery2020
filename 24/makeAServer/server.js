const http = require('http');

const server = http.createServer((req, res) => {
  console.log('headers', req.headers);
  console.log('method', req.method);
  console.log('url', req.url);

  const user = {
    name: 'Juhani',
    hobby: 'Collecting rocks'
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

server.listen(3000);