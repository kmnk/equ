(function() {
  var esparse, parse;

  esparse = require('esprima').parse;

  parse = function(code) {
    return esparse(code, {
      loc: true,
      tokens: true
    });
  };

  module.exports = {
    parse: parse
  };

}).call(this);
