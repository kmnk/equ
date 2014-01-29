(function() {
  var ast, lint, _;

  _ = require('underscore');

  ast = require('../lib/ast').ast;

  lint = function(node, path) {
    var identifiers;
    identifiers = ast(node).find('Identifier').nodes;
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
