const fs = require('fs');
const parseInfo = require('./parseInfo.js');
const exec = require('child_process').exec
const textscript = exec('open newHTML.html')

const info = parseInfo('./fileInfo')

const htmlIdParser = (el) => {
  const one = el.slice(el.indexOf('id="') + 4, el.length)
  return one.slice(0, one.indexOf('"'))
}

let html = fs.readFileSync('./newHTML.html').toString().split('\n')
for (let i = 0; i < html.length; i++) {
  if ((/putHere/i).test(html[i])) {
    html[i] = html[i].replace('putHere', info[htmlIdParser(html[i])])
  }
}
html = html.join('\n')
console.log(html);

textscript.stdout.on('data', data => setTimeout(console.log(data), 2000))
