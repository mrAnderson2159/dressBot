const http = require('http');
const tMap = require('through2-map')
//const connect = require('connect');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  req.pipe(tMap(chunk => chunk.toString().split('&')
    .map(x => x.slice(0, x.indexOf('=')).concat(' = ')
      .concat(x.slice(x.indexOf('=') + 1, x.length)))
    .join('\n'))).pipe(res)
}).listen(8000)
