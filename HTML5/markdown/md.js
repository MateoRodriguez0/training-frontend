var converter = new showdown.Converter();
var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
         'because:\n\n' +
         ' - it\'s easy to use\n' +
         ' - it\'s extensible\n' +
         ' - works in the server and in the browser';
var html = converter.makeHtml(md);
document.getElementById('content').innerHTML = html;

console.log(document.getElementById('content'))