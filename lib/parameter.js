(function() {
  var _;

  _ = require('underscore');

  module.exports = {
    getParameters: function() {
      return _.rest(process.argv, 2);
    }
  };

}).call(this);
