(function() {
  var CLASS_NAME, Equ, isEqu, isSelected, parse, read, token, type, util, visit, _, _create;

  _ = require('underscore');

  token = require('./token');

  type = require('./type');

  read = require('./reader').read;

  parse = require('./parser').parse;

  visit = require('./visitor').visit;

  isSelected = require('./selector').isSelected;

  util = require('./util');

  CLASS_NAME = 'Equ';

  Equ = (function() {
    function Equ(nodes) {
      this.nodes = nodes;
    }

    Equ.prototype.find = function(selector) {
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

    Equ.prototype.has = function(selector) {
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

    Equ.prototype.filter = function(selector) {
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

    Equ.prototype.first = function(selector) {
      return _.first(this.find(selector).nodes);
    };

    Equ.prototype.get = function(i) {
      if (i == null) {
        i = 0;
      }
      if (this.nodes.length > 0) {
        return this.nodes[i];
      } else {

      }
    };

    Equ.prototype.attrs = function(key) {
      return _.compact(_.map(this.nodes, function(node) {
        return node[key];
      }));
    };

    Equ.prototype.attr = function(key) {
      if (this.nodes.length > 0) {
        return this.nodes[0][key];
      } else {

      }
    };

    Equ.prototype.token = function() {
      return token.token(this.nodes);
    };

    return Equ;

  })();

  isEqu = function(obj) {
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
    if (isEqu(nodes)) {
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
    return new Equ(nodes);
  };

  module.exports = {
    equ: function(nodes) {
      return _create(nodes);
    },
    isEqu: isEqu,
    readAndParse: function(path) {
      return _create(parse(read(path)));
    },
    parse: function(code) {
      return _create(parse(code));
    },
    token: token.token,
    isToken: token.isToken,
    TYPE: type.TYPE
  };

}).call(this);
