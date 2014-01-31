(function() {
  var CLASS_NAME, TYPE, Token, isSelected, isToken, util, visit, _, _create;

  _ = require('underscore');

  TYPE = require('./type').TYPE;

  visit = require('./visitor').visit;

  isSelected = require('./selector').isSelected;

  util = require('./util');

  CLASS_NAME = 'Token';

  Token = (function() {
    function Token(tokens) {
      this.tokens = tokens;
    }

    Token.prototype.find = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.tokens, function(node) {
        var _nodes;
        _nodes = [];
        visit(node, function(node, param) {
          if (isSelected(node, selector)) {
            return _nodes.push(node);
          }
        }, {});
        return _nodes;
      }), true));
    };

    Token.prototype.has = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.tokens, function(node) {
        var _nodes;
        _nodes = [];
        if (isSelected(node, selector)) {
          _nodes.push(node);
        }
        return _nodes;
      }), true));
    };

    Token.prototype.filter = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.tokens, function(node) {
        var _nodes;
        _nodes = [];
        if (!isSelected(node, selector)) {
          _nodes.push(node);
        }
        return _nodes;
      }), true));
    };

    Token.prototype.first = function(selector) {
      return _.first(this.find(selector).nodes);
    };

    Token.prototype.get = function(i) {
      if (i == null) {
        i = 0;
      }
      if (this.tokens.length > 0) {
        return this.tokens[i];
      } else {

      }
    };

    Token.prototype.attrs = function(key) {
      return _.compact(_.map(this.tokens, function(node) {
        return node[key];
      }));
    };

    Token.prototype.attr = function(key) {
      if (this.tokens.length > 0) {
        return this.tokens[0][key];
      } else {

      }
    };

    return Token;

  })();

  isToken = function(obj) {
    if (!_.isObject(obj)) {
      return false;
    }
    if (!obj.constructor) {
      return false;
    }
    if (obj.constructor.name === CLASS_NAME) {
      return true;
    }
    return false;
  };

  _create = function(tokens) {
    if (util.isNode(tokens) && tokens.type === TYPE.PROGRAM) {
      tokens = tokens.tokens;
    }
    if (isToken(tokens)) {
      return tokens;
    }
    if (!_.isArray(tokens)) {
      tokens = [tokens];
    }
    if (!_.every(tokens, function(node) {
      return util.isNode(node);
    })) {
      throw 'invalid node';
    }
    return new Token(tokens);
  };

  module.exports = {
    token: function(tokens) {
      return _create(tokens);
    },
    isToken: isToken
  };

}).call(this);
