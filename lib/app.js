/* Modules */

var os = require('os'),
    exec = require('child_process').exec;

/* App */

var App = {};

App.formatUrl = function(size) {
  return 'http://placehold.it/' + size;
};

App.getCopyCommand = function() {
  var platform = os.platform();
  if (platform === 'win32') {
    return 'clip';
  } else if (platform === 'linux') {
    return 'xclip -selection clipboard';
  } else {
    return 'pbcopy';
  }
};

App.sendToClipboard = function(url, cmd) {
  exec('echo ' + url + '|' + cmd, function(err) {
    if (err) { throw err; }
    console.log('The URL was sent to the clipboard!');
  });
};

App.init = function(size) {
  var url = App.formatUrl(size),
      cmd = App.getCopyCommand();
  App.sendToClipboard(url, cmd);
};

/* Exports */

var Plit = {
  init: App.init,
  version: require('./version'),
  help: require('./help')
};

module.exports = Plit;
