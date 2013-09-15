/* Modules */

var os = require('os'),
    exec = require('child_process').exec;

/* App */

var Plit = {};

Plit.help = require('./help');
Plit.version = require('./version');

Plit.formatUrl = function(size) {
  return 'http://placehold.it/' + size;
};

Plit.getCopyCommand = function() {
  var platform = os.platform();
  if (platform === 'win32') {
    return 'clip';
  } else if (platform === 'linux') {
    return 'xclip -selection clipboard';
  } else {
    return 'pbcopy';
  }
};

Plit.sendToClipboard = function(url, cmd) {
  exec('echo ' + url + '|' + cmd, function(err) {
    if (err) { throw err; }
    console.log('The URL was sent to the clipboard!');
  });
};

Plit.init = function(size) {
  var url = Plit.formatUrl(size),
      cmd = Plit.getCopyCommand();
  Plit.sendToClipboard(url, cmd);
};

module.exports = Plit;
