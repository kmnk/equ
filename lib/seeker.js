(function() {
  var TYPE, seek, _;

  _ = require('underscore');

  TYPE = require('./type').TYPE;

  seek = function(node, callback, param) {
    var names;
    if (_.isUndefined(node)) {
      return;
    }
    if (_.isNull(node)) {
      return;
    }
    if (_.isUndefined(node.type)) {
      return;
    }
    names = [];
    switch (node.type) {
      case TYPE.PROGRAM:
        names = ['body'];
        break;
      case TYPE.EMPTY_STATEMENT:
        names = [];
        break;
      case TYPE.BLOCK_STATEMENT:
        names = ['body'];
        break;
      case TYPE.EXPRESSION_STATEMENT:
        names = ['expression'];
        break;
      case TYPE.IF_STATEMENT:
        names = ['test', 'consequent', 'alternate'];
        break;
      case TYPE.LABELED_STATEMENT:
        names = ['label', 'body', 'alternate'];
        break;
      case TYPE.BREAK_STATEMENT:
        names = ['label'];
        break;
      case TYPE.WITH_STATEMENT:
        names = ['object', 'body'];
        break;
      case TYPE.SWITCH_STATEMENT:
        names = ['discriminant', 'cases', 'lexial'];
        break;
      case TYPE.RETURN_STATEMENT:
        names = ['argument'];
        break;
      case TYPE.THROW_STATEMENT:
        names = ['argument'];
        break;
      case TYPE.TRY_STATEMENT:
        names = ['block', 'handler', 'guardedHandlers', 'finalizer'];
        break;
      case TYPE.WHILE_STATEMENT:
        names = ['test', 'body'];
        break;
      case TYPE.DO_WHILE_STATEMENT:
        names = ['body', 'test'];
        break;
      case TYPE.FOR_STATEMENT:
        names = ['init', 'test', 'update', 'body'];
        break;
      case TYPE.FOR_IN_STATEMENT:
        names = ['left', 'right', 'body', 'each'];
        break;
      case TYPE.FOR_OF_STATEMENT:
        names = ['left', 'right', 'body'];
        break;
      case TYPE.LET_STATEMENT:
        names = ['head', 'body'];
        break;
      case TYPE.DEBUGGER_STATEMENT:
        names = [];
        break;
      case TYPE.FUNCTION_DECLARATION:
        names = ['id', 'params', 'defaults', 'rest', 'body', 'generator', 'expression'];
        break;
      case TYPE.VARIABLE_DECLARATION:
        names = ['declarations', 'kind'];
        break;
      case TYPE.VARIABLE_DECLARATOR:
        names = ['id', 'init'];
        break;
      case TYPE.THIS_EXPRESSION:
        names = [];
        break;
      case TYPE.ARRAY_EXPRESSION:
        names = ['elements'];
        break;
      case TYPE.OBJECT_EXPRESSION:
        names = ['properties'];
        break;
      case TYPE.FUNCTION_EXPRESSION:
        names = ['id', 'params', 'defaults', 'rest', 'body', 'generator', 'expression'];
        break;
      case TYPE.ARROW_EXPRESSION:
        names = ['params', 'defaults', 'rest', 'body', 'generator', 'expression'];
        break;
      case TYPE.SEQUENCE_EXPRESSION:
        names = ['expressions'];
        break;
      case TYPE.UNARY_EXPRESSION:
        names = ['operator', 'prefix', 'argument'];
        break;
      case TYPE.BINARY_EXPRESSION:
        names = ['operator', 'left', 'right'];
        break;
      case TYPE.ASSIGNMENT_EXPRESSION:
        names = ['operator', 'left', 'right'];
        break;
      case TYPE.UPDATE_EXPRESSION:
        names = ['operator', 'argument', 'prefix'];
        break;
      case TYPE.LOGICAL_EXPRESSION:
        names = ['operator', 'left', 'right'];
        break;
      case TYPE.CONDITIONAL_EXPRESSION:
        names = ['test', 'alternate', 'consequent'];
        break;
      case TYPE.NEW_EXPRESSION:
        names = ['callee', 'arguments'];
        break;
      case TYPE.CALL_EXPRESSION:
        names = ['callee', 'arguments'];
        break;
      case TYPE.MEMBER_EXPRESSION:
        names = ['object', 'property', 'computed'];
        break;
      case TYPE.LET_EXPRESSION:
        names = ['head', 'body'];
        break;
      case TYPE.OBJECT_PATTERN:
        names = ['properties'];
        break;
      case TYPE.ARRAY_PATTERN:
        names = ['elements'];
        break;
      case TYPE.SWITCH_CASE:
        names = ['test', 'consequent'];
        break;
      case TYPE.CATCH_CLAUSE:
        names = ['param', 'guard', 'body'];
        break;
      case TYPE.IDENTIFIER:
        names = ['name'];
        break;
      case TYPE.LITERAL:
        names = ['value'];
        break;
      case TYPE.PROPERTY:
        names = ['key', 'value', 'kind'];
        break;
      case TYPE.BOOLEAN:
      case TYPE.KEYWORD:
      case TYPE.NULL:
      case TYPE.NUMERIC:
      case TYPE.PROPERTY:
      case TYPE.PUNCTUATOR:
      case TYPE.REGULAR_EXPRESSION:
      case TYPE.STRING:
        names = [];
        break;
      default:
        throw "" + node.type + " case is unimplemented";
    }
    return _.each(names, function(name) {
      if (_.isArray(node[name])) {
        return _.each(node[name], function(_node) {
          return callback(_node, param);
        });
      } else {
        return callback(node[name], param);
      }
    });
  };

  module.exports = {
    seek: seek
  };

}).call(this);
