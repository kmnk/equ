(function() {
  var TYPE, find, _;

  _ = require('underscore');

  TYPE = require('../type').TYPE;

  find = function($equ) {
    var calls, functionCalls;
    calls = [];
    functionCalls = $equ.find('CallExpression').nodes;
    _.each(functionCalls, function(node) {
      var _id;
      if (node.callee.type === TYPE.MEMBER_EXPRESSION) {
        _id = node.callee.property;
      } else {
        _id = node.callee;
      }
      return calls.push({
        type: node.type,
        id: _id,
        args: node["arguments"],
        callee: node.callee,
        loc: node.loc
      });
    });
    return calls;
  };

  module.exports = {
    find: find
  };

}).call(this);
