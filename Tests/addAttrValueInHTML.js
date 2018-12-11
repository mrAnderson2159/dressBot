var page = require('webpage').create();
var fs = require('fs');
var URL = "http://localhost:10000/form.html"

page.open(URL, function(status) {

  if (status !== 'success') {
    console.log('Unable to access network');
  } else {

    var html = page.content.split('\n').filter(function(x) { return x !== '' })
      .map(function(x) {
        if ((/</i).test(x)) {
          return x.slice(x.indexOf('<'), x.length)
        } else {
          return x
        }
      })

    var array = []
    for (var i = 0; i < html.length; i++) {
      if (((/input+/i).test(html[i])) && !((/submit+/i).test(html[i])))
        array.push(html[i])
    }
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].slice(0, array[i].indexOf('>'))
        .concat(' value="putHere"')
        .concat(array[i].slice(array[i].indexOf('>'), array[i].length))
    }
    var el;
    for (var i = 0; i < html.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (html[i] === array[j].replace(' value="putHere"', '')) {
          html[i] = array[j]
        }
      }
    }
    var script = '\n<script type="text/javascript">document.getElementById'
    script += "('submit').click()</script>"
    html = html.join('\n')
    html = html.slice(0, html.indexOf('</form>') + 7)
      .concat(script)
      .concat(html.slice(html.indexOf('</form>') + 7, html.length))
  }
  fs.write('newHTML.html', html)
  phantom.exit()
})
