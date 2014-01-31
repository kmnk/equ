(function() {
  var isNode, _;

  _ = require('underscore');

  isNode = function(obj) {
    if (!_.isObject(obj)) {
      return false;
    }
    if (_.isUndefined(obj.type)) {
      return false;
    }
    return true;
  };

  module.exports = {
    isNode: isNode
  };

}).call(this);
