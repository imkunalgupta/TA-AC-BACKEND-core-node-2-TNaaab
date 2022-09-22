var http = require('http');
var qs = require('querystring');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var dataFormat = req.headers['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });

  req.on('end', () => {
    if (dataFormat === 'application/json') {
      var jsonData = JSON.parse(store);
      res.setHeader('content-Type', 'text/html');
      res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`);
    }
    if (dataFormat === 'application/x-www-form-urlencoded') {
      var parsedQueryData = qs.parse(store);
      res.setHeader('content-Type', 'text/html');
      res.end(
        `<h2>${parsedQueryData.name}</h2><p>${parsedQueryData.email}</p>`
      );
    }
  });
}

server.listen(5000, () => {
  console.log('Running on server 3000');
});
