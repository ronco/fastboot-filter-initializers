/* jshint node: true */
'use strict';

var Funnel     = require('broccoli-funnel');
var path   = require('path');

function modeToExclude() {
  if (process.env.EMBER_CLI_FASTBOOT) {
    return 'browser';
  } else {
    return 'fastboot';
  }
}

module.exports = function(tree) {
  var mode = modeToExclude();
  return new Funnel(tree, {
    annotation: 'Funnel: Remove ' + mode + '-only initializers',
    exclude: [
      'initializers/' + mode + '/**/*',
      'instance-initializers/' + mode + '/**/*'
    ]
  });
};
