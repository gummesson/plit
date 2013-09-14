#!/usr/bin/env node

/* Modules */

var Plit = require('../lib/app');

/* CLI */

var argv = process.argv.slice(2),
    args = argv[0];

if (argv.length === 0) {
  console.log('No arguments were provided!');
} else {
  if (args === '--help' || args === '-h') {
    Plit.help();
  } else {
    Plit.init(args);
  }
}
