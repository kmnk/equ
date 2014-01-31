(function() {
  var Ast, CLASS_NAME, isAst, isSelected, token, util, visit, _, _create;

  _ = require('underscore');

  token = require('./token').token;

  visit = require('./visitor').visit;

  isSelected = require('./selector').isSelected;

  util = require('./util');

  CLASS_NAME = 'Ast';

  Ast = (function() {
    function Ast(nodes) {
      this.nodes = nodes;
    }

    Ast.prototype.find = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.nodes, function(node) {
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

    Ast.prototype.has = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.nodes, function(node) {
        var _nodes;
        _nodes = [];
        if (isSelected(node, selector)) {
          _nodes.push(node);
        }
        return _nodes;
      }), true));
    };

    Ast.prototype.filter = function(selector) {
      if (!selector) {
        return this;
      }
      return _create(_.flatten(_.map(this.nodes, function(node) {
        var _nodes;
        _nodes = [];
        if (!isSelected(node, selector)) {
          _nodes.push(node);
        }
        return _nodes;
      }), true));
    };

    Ast.prototype.first = function(selector) {
      return _.first(this.find(selector).nodes);
    };

    Ast.prototype.get = function(i) {
      if (i == null) {
        i = 0;
      }
      if (this.nodes.length > 0) {
        return this.nodes[i];
      } else {

      }
    };

    Ast.prototype.attrs = function(key) {
      return _.compact(_.map(this.nodes, function(node) {
        return node[key];
      }));
    };

    Ast.prototype.attr = function(key) {
      if (this.nodes.length > 0) {
        return this.nodes[0][key];
      } else {

      }
    };

    return Ast;

  })();

  isAst = function(obj) {
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

  _create = function(nodes) {
    if (isAst(nodes)) {
      return nodes;
    }
    if (!_.isArray(nodes)) {
      nodes = [nodes];
    }
    if (!_.every(nodes, function(node) {
      return util.isNode(node);
    })) {
      throw 'invalid node';
    }
    return new Ast(nodes);
  };

  module.exports = {
    ast: function(nodes) {
      return _create(nodes);
    },
    token: function(tokens) {
      return token(tokens);
    },
    isAst: isAst
  };

}).call(this);
