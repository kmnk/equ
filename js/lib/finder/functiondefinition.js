(function() {
  var ast, find, _;

  _ = require('underscore');

  ast = require('../ast').ast;

  find = function(node) {
    var $ast, definitions, functionAssignments, functionDeclarations;
    $ast = ast(node);
    definitions = [];
    functionAssignments = $ast.find('AssignmentExpression').has('[right:"FunctionExpression"]').nodes;
    _.each(functionAssignments, function(node) {
      return definitions.push({
        type: node.type,
        id: node.left,
        params: node.right.params,
        body: node.right.body,
        loc: node.loc
      });
    });
    functionDeclarations = $ast.find('FunctionDeclaration').nodes;
    _.each(functionDeclarations, function(node) {
      return definitions.push({
        type: node.type,
        id: node.id,
        params: node.params,
        body: node.body,
        loc: node.loc
      });
    });
    return definitions;
  };

  module.exports = {
    find: find
  };

}).call(this);
