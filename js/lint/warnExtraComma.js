(function() {
  var lint, token, _, _pickExtraCommas;

  _ = require('underscore');

  token = require('../lib/equ').token;

  lint = function(node, path) {
    return _.map(_pickExtraCommas(node), function(extraComma) {
      return {
        level: 'warn',
        message: 'Should not put extra comma.',
        loc: extraComma.loc
      };
    });
  };

  _pickExtraCommas = function(node) {
    var $token, extraCommas, i, _i, _ref;
    extraCommas = [];
    $token = token(node);
    for (i = _i = 0, _ref = $token.tokens.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      if ($token.get(i).value !== ',') {
        continue;
      }
      if ($token.get(i + 1).value === '}') {
        extraCommas.push($token.get(i));
      }
      if ($token.get(i + 1).value === ']') {
        extraCommas.push($token.get(i));
      }
    }
    return extraCommas;
  };

  module.exports = {
    lint: lint
  };

}).call(this);
