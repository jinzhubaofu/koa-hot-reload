/**
 * @file index
 * @author leon<ludafa@outlook.com>
 */

const {createServer} = require('http');
const {getHandler} = require('./server');

let handler = getHandler();
let server = createServer();

server.addListener('request', handler);
server.listen(3000, () => console.log('server started: http://0.0.0.0:3000'));

if (module.hot) {
  module.hot.accept('./server', () => {
    const {getHandler} = require('./server');
    server.removeListener('request', handler);
    handler = getHandler();
    server.addListener('request', handler);
  });
}
