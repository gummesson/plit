#!/usr/bin/env node

/* Modules */

var Plit = require('../lib/app');

/* CLI */

var argv = process.argv.slice(2),
    args = argv[0],
    num = /^\d+.*/;

if (argv.length === 0) {
  console.log('No arguments were provided!');
} else {
  if (args.match(num)) {
    Plit.init(args);
  } else if (args === '--version' || args === '-v') {
    Plit.version();
  }  else {
    Plit.help();
  }
}
