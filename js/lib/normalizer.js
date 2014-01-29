(function() {
  var oneline, util, _, _onelineNode;

  _ = require('underscore');

  util = require('./util');

  oneline = function(data) {
    if (!_.isObject(data)) {
      return "" + data;
    }
    switch (false) {
      case !util.isNode(data):
        return _onelineNode(data);
      default:
        return "" + data;
    }
  };

  _onelineNode = function(node) {
    var attrs, loc, messages, name, value;
    messages = [];
    messages.push("TYPE:{" + (oneline(node.type)) + "}");
    if (value = node.value) {
      messages.push("VALUE:{" + (oneline(value)) + "}");
    }
    if (name = node.name) {
      messages.push("NAME:{" + (oneline(name)) + "}");
    }
    if (loc = node.loc) {
      messages.push("START:{L:" + loc.start.line + " C:" + loc.start.column + "}");
      messages.push("END:{L:" + loc.end.line + " C:" + loc.end.column + "}");
    }
    attrs = [];
    _.each(node, function(val, key) {
      if (key === 'type') {
        return;
      }
      if (key === 'name') {
        return;
      }
      if (key === 'value') {
        return;
      }
      if (key === 'loc') {
        return;
      }
      return attrs.push(key);
    });
    if (attrs.length > 0) {
      messages.push("ATTRS:[" + (attrs.join(',')) + "]");
    }
    return messages.join(' ');
  };

  module.exports = {
    oneline: oneline
  };

}).call(this);
