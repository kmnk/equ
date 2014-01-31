(function() {
  var TYPE, isSelected, _strToFunciton;

  TYPE = require('./type').TYPE;

  _strToFunciton = function(selector) {
    var keys, matches, others, regexp, val, _selector;
    _selector = selector.toUpperCase();
    switch (false) {
      case _selector !== 'ALL':
        return function(node) {
          return true;
        };
      case _selector !== '.PROGRAMS':
        return function(node) {
          return node.type === TYPE.PROGRAM;
        };
      case _selector !== '.STATEMENTS':
        return function(node) {
          return /.+Statement$/.test(node.type);
        };
      case _selector !== '.DECLARATIONS':
        return function(node) {
          return /.+Declarat(?:ion|or)$/.test(node.type);
        };
      case _selector !== '.EXPRESSIONS':
        return function(node) {
          return /.+Expression$/.test(node.type);
        };
      case _selector !== '.PATTERNS':
        return function(node) {
          return /.+Pattern$/.test(node.type);
        };
      case _selector !== '.CLAUSES':
        return function(node) {
          return /^(?:SwitchCase|CatchClause)$/.test(node.type);
        };
      case _selector !== '.MISCELLANEOUS':
        return function(node) {
          return /^(?:Identifier|Literal)$/.test(node.type);
        };
      case _selector !== '.OTHERS':
        others = [TYPE.BOOLEAN, TYPE.KEYWORD, TYPE.NULL, TYPE.NUMERIC, TYPE.PROPERTY, TYPE.PUNCTUATOR, TYPE.REGULAR_EXPRESSION, TYPE.STRING].join('|');
        regexp = new RegExp("^(?:" + others + ")$");
        return function(node) {
          return regexp.test(node.type);
        };
      case !(matches = /^\[([^=]+)=['"]([^\]]+)['"]\]$/.exec(selector)):
        keys = matches[1].split('.');
        val = matches[2];
        return function(node) {
          var key, _i, _len, _node;
          _node = node;
          for (_i = 0, _len = keys.length; _i < _len; _i++) {
            key = keys[_i];
            if (!_node[key]) {
              return false;
            }
            _node = _node[key];
          }
          return _node === val;
        };
      case !(matches = /^\[([^=]+):['"]([^\]]+)['"]\]$/.exec(selector)):
        keys = matches[1].split('.');
        val = matches[2];
        return function(node) {
          var key, _i, _len, _node;
          _node = node;
          for (_i = 0, _len = keys.length; _i < _len; _i++) {
            key = keys[_i];
            if (!_node[key]) {
              return false;
            }
            _node = _node[key];
          }
          return isSelected(_node, val);
        };
      default:
        return function(node) {
          return node.type === selector;
        };
    }
  };

  isSelected = function(node, selector) {
    var _isSelected;
    _isSelected = _strToFunciton(selector);
    return _isSelected(node);
  };

  module.exports = {
    isSelected: isSelected
  };

}).call(this);
