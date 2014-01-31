(function() {
  var isNode, seek, visit, _;

  _ = require('underscore');

  seek = require('./seeker').seek;

  isNode = require('./util').isNode;

  visit = function(node, callback, param) {
    if (!isNode(node)) {
      return;
    }
    callback(node, param);
    return seek(node, function(_node) {
      var _param;
      _param = _.clone(param);
      if (!_.isUndefined(_param.depth)) {
        ++_param.depth;
      }
      return visit(_node, callback, _param);
    }, param);
  };

  module.exports = {
    visit: visit
  };

}).call(this);
