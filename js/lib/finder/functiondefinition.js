(function() {
  var find, _;

  _ = require('underscore');

  find = function($equ) {
    var definitions, functionAssignments, functionDeclarations;
    definitions = [];
    functionAssignments = $equ.find('AssignmentExpression').has('[right:"FunctionExpression"]').nodes;
    _.each(functionAssignments, function(node) {
      return definitions.push({
        type: node.type,
        id: node.left,
        params: node.right.params,
        body: node.right.body,
        loc: node.loc
      });
    });
    functionDeclarations = $equ.find('FunctionDeclaration').nodes;
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
