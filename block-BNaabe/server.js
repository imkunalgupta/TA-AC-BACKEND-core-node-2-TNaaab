//Q.1.Ans

// var path = require('path');
// var absoluteServerPath = __filename;
// var absoluteappjsPath = __dirname + '/app.js';
// var relativeIndexhtmlPath = './index.html';
// var absoluteindexhtmlPath = path.join(__dirname, '/index.html');
// console.log(
//   absoluteServerPath,
//   absoluteappjsPath,
//   relativeIndexhtmlPath,
//   absoluteindexhtmlPath
// );

//Q.2.Ans

// var http = require('http');
// var qs = require('querystring');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   if (req.method === 'POST' && req.url === '/') {
//     var store = '';
//     req
//       .on('data', (chunk) => {
//         store += chunk;
//       })
//       .on('end', () => {
//         res.statusCode = 201;
//         res.end(store);
//       });
//   }
// }

// server.listen(5000, () => {
//   console.log('Server listening port on 5k');
// });

//Q.3.Ans

// var http = require('http');
// var qs = require('querystring');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   if (req.method === 'POST' && req.url === '/') {
//     var store = '';
//     req
//       .on('data', (chunk) => {
//         store += chunk;
//       })
//       .on('end', () => {
//         res.statusCode = 201;
//         var parsedData = qs.parse(store);
//         res.end(JSON.stringify(parsedData));
//       });
//   }
// }

// server.listen(5000, () => {
//   console.log('Server listening port on 5k');
// });

//Q.4.Ans

var http = require('http');
var qs = require('querystring');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var store = '';
  console.log(req.headers['content-type']);
  req
    .on('data', (chunk) => {
      store += chunk;
    })
    .on('end', () => {
      res.statusCode = 201;
      if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        var formData = qs.parse(store);
        res.end(JSON.stringify(formData));
      }
      if (req.headers['content-type'] === 'application/json') {
        res.end(store);
      }
    });
}

server.listen(9000, () => {
  console.log('Server listening port on 5k');
});
