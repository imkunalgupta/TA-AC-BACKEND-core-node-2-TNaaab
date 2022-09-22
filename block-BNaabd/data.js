var http = require('http');
var qs = require('querystring');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var dataFormat = req.headers['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'POST' && dataFormat === 'application/json') {
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if (
      req.method === 'POST' &&
      dataFormat === 'application/x-www-form-urlencoded'
    ) {
      var parsedQueryData = qs.parse(store);
      res.end(JSON.stringify(parsedQueryData));
    }
  });
}
server.listen(7000, () => {
  console.log('server listeining on port 7k');
});
