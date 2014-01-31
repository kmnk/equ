(function() {
  var lint, _;

  _ = require('underscore');

  lint = function($equ, path) {
    var identifiers;
    identifiers = $equ.find('Identifier').nodes;
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
