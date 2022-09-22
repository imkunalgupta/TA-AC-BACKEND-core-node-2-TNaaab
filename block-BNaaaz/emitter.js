var { EventEmitter } = require('events');
var myEmitter = new EventEmitter();

myEmitter.on('notice', (msg) => {
  console.log('event emitted' + msg);
});

myEmitter.emit('notice', 'Hello World');
myEmitter.on('notice', () => {
  console.log('event emitted');
});
