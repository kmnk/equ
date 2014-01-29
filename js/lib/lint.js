(function() {
  var LINT_DIRECTORY_PATH, lint, printer, readdir, _, _locToOneline;

  _ = require('underscore');

  readdir = require('./reader').readdir;

  printer = require('./printer');

  LINT_DIRECTORY_PATH = 'js/lint/';

  lint = function(node, path) {
    var lintPaths, results;
    printer.log("review " + path);
    lintPaths = readdir(LINT_DIRECTORY_PATH);
    results = _.flatten(_.map(lintPaths, function(lintPath) {
      if (!lintPath.match(/\.js$/)) {
        return;
      }
      lint = require("../lint/" + lintPath).lint;
      return lint(node, path);
    }));
    return _.each(results, function(result) {
      var level, messages;
      if (!result) {
        return;
      }
      messages = [result.message];
      level = result.level ? result.level : 'info';
      messages.unshift("" + (_locToOneline(result.loc)) + ":");
      return printer[level](messages.join(' '));
    });
  };

  _locToOneline = function(loc) {
    var end, start;
    if (!loc) {
      return "L0~L0";
    }
    start = loc.start;
    end = loc.end;
    return "L" + start.line + "~L" + end.line;
  };

  module.exports = {
    lint: lint
  };

}).call(this);
