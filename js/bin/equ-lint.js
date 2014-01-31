(function() {
  var getParameters, lint, paths, readAndParse, _;

  _ = require('underscore');

  getParameters = require('../lib/parameter').getParameters;

  lint = require('../lib/lint').lint;

  readAndParse = require('../equ').readAndParse;

  paths = getParameters();

  _.each(paths, function(path) {
    return lint(readAndParse(path), path);
  });

}).call(this);
