//Q.1.Ans

var path = require('path');
var absoluteServerPath = __filename;
var absoluteappjsPath = __dirname + '/app.js';
var relativeIndexhtmlPath = './index.html';
var absoluteindexhtmlPath = path.join(__dirname + '/index.html');
console.log(
  absoluteServerPath,
  absoluteappjsPath,
  relativeIndexhtmlPath,
  absoluteindexhtmlPath
);

//Q.2.Ans

// var http = require('http');
// var qs = require('querystring');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   var store = '';
//   req.on('data', (chunk) => {
//     store += chunk;
//   });
//   req.on('end', () => {
//     if (req.method === 'POST' && req.url === '/') {
//       res.statusCode = 201;
//       res.setHeader('content-type', 'application/json');
//       res.end(store);
//     }
//   });
// }
// server.listen(5000, () => {
//   console.log('Server listening port on 5k');
// });

//Q.3.Ans

// var http = require('http');
// var qs = require('querystring');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   var store = '';
//   req.on('data', (chunk) => {
//     store += chunk;
//   });
//   req.on('end', () => {
//     if (req.method === 'POST' && req.url === '/') {
//       res.statusCode = 201;
//       res.setHeader('content-type', 'application/x-www-form-urlencoded');
//       var parsedFormData = qs.parse(store);
//       res.end(JSON.stringify(parsedFormData));
//     }
//   });
// }
// server.listen(5000, () => {
//   console.log('Server listening port on 5k');
// });

//Q.4.Ans

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
    if (req.method === 'POST' && req.url === '/json') {
      console.log(store);
      res.setHeader('content-type', 'application/json');
      res.end(store);
    }
    if (req.method === 'POST' && req.url === '/form') {
      console.log(store);
      var formData = qs.parse(store);
      res.end(JSON.stringify(formData));
    }
  });
}
server.listen(9000, () => {
  console.log('server listeining on port 9k');
});
