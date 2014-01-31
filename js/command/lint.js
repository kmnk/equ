(function() {
  var getParameters, lint, parse, paths, read, _;

  _ = require('underscore');

  getParameters = require('../lib/parameter').getParameters;

  read = require('../lib/reader').read;

  lint = require('../lib/lint').lint;

  parse = require('../equ').parse;

  paths = getParameters();

  _.each(paths, function(path) {
    return lint(parse(read(path)), path);
  });

}).call(this);
