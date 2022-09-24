var http = require('http');
var fs = require('fs');
var url = require('url');
const usersPath = __dirname + '/users/';
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var parsedUrl = url.parse(req.parse, true);
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.url === '/users' && req.method === 'POST') {
      var username = JSON.parse(store).username;
      fs.open(usersPath + username + '.json', 'wx', (err, fd) => {
        if (err) return console.log(err);
        fs.writeFile(fd, store, (err) => {
          if (err) return console.log(err);
          fs.close(fd, () => {
            return res.end(`${username} created successfuly`);
          });
        });
      });
    }
  });
}
server.listen(3000, () => {
  console.log('Server listening on port 3k');
});
