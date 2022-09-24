var relativeIndex = '../client/index.js';
var path = require('path');
var absoluteIndex = path.join(__dirname, '..', 'client/index.js');
console.log(relativeIndex, absoluteIndex);
