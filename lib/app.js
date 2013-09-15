/* Modules */

var os = require('os'),
    exec = require('child_process').exec;

/* App */

var App = {};

App.formatUrl = function(size) {
  return 'http://placehold.it/' + size;
};

App.OS = os.platform();

App.getClipboardCommand = function() {
  if (App.OS === 'win32') {
    return 'clip';
  } else if (App.OS === 'linux') {
    return 'xclip -selection clipboard';
  } else {
    return 'pbcopy';
  }
};

App.sendToClipboard = function(url, cmd) {
  var clip = 'echo ' + url + '|' + cmd;
  exec(clip, function(err) {
    if (err) { throw err; }
    console.log('The URL was sent to the clipboard!');
  });
};

App.init = function(size) {
  var url = App.formatUrl(size),
      cmd = App.getClipboardCommand();
  App.sendToClipboard(url, cmd);
};

/* Exports */

var Plit = {
  init: App.init,
  version: require('./version'),
  help: require('./help')
};

module.exports = Plit;
