const http = require('http');
const fs = require('fs');
const connect = require('connect');
const serveStatic = require('serve-static');

connect().use(serveStatic("/Users/mr.anderson/github/dressBot/Tests"))
  .listen(10000, () => console.log('Server running on 10000'))
