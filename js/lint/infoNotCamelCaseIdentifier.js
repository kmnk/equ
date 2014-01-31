(function() {
  var equ, lint, _;

  _ = require('underscore');

  equ = require('../lib/equ').equ;

  lint = function(node, path) {
    var identifiers;
    identifiers = equ(node).find('Identifier').nodes;
    return _.map(_.filter(identifiers, function(node) {
      return /^.+_/.test(node.name) && /[a-z]/.test(node.name);
    }), function(node) {
      return {
        level: 'info',
        message: "Should define identifier '" + node.name + "' in camel case.",
        loc: node.loc
      };
    });
  };

  module.exports = {
    lint: lint
  };

}).call(this);
