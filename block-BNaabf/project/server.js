var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var store = '';
  req
    .on('data', (chunk) => {
      store += chunk;
    })
    .on('end', () => {
      if (req.url === '/form' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./form.html').pipe(res);
      }
      if (req.url === '/form' && req.method === 'POST') {
        var parseData = qs.parse(store);
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>${parseData.name}</h2>`);
        res.write(`<h3>${parseData.email}</h3>`);
        res.write(`<p>${parseData.age}</p>`);
        res.end();
      }
    });
}

server.listen(5678, () => {
  console.log('Server listening on the port 5678');
});
