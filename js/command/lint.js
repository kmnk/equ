(function() {
  var getParameters, lint, parse, paths, read, _;

  _ = require('underscore');

  getParameters = require('../lib/parameter').getParameters;

  read = require('../lib/reader').read;

  parse = require('../lib/parser').parse;

  lint = require('../lib/lint').lint;

  paths = getParameters();

  _.each(paths, function(path) {
    return lint(parse(read(path)), path);
  });

}).call(this);
