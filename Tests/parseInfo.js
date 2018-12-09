const fs = require('fs');

module.exports = (path) => {
  const fArr = fs.readFileSync(path).toString().split('\n')
  const obj = {};
  let x, y;
  for (let i = 0; i < fArr.length; i++) {
    if (fArr[i] !== '') {
      x = fArr[i].slice(0, fArr[i].indexOf(':'))
      y = fArr[i].slice(fArr[i].indexOf(':') + 1, fArr[i].length)
      y = (/^\s/i).test(y) ? y.replace(' ', '') : y
      obj[x] = y;
    }
  }
  return obj
}
