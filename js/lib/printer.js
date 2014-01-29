(function() {
  var BLACK, BLUE, CYAN, GREEN, MAGENTA, Printer, RED, RESET, WHITE, YELLOW, oneline, print, _;

  _ = require('underscore');

  print = require('util').print;

  oneline = require('./normalizer').oneline;

  RESET = '\u001b[0m';

  BLACK = '\u001b[30m';

  RED = '\u001b[31m';

  GREEN = '\u001b[32m';

  YELLOW = '\u001b[33m';

  BLUE = '\u001b[34m';

  MAGENTA = '\u001b[35m';

  CYAN = '\u001b[36m';

  WHITE = '\u001b[37m';

  Printer = (function() {
    function Printer(param) {
      if (param == null) {
        param = {};
      }
      this.color = _.isUndefined(param.color) ? true : param.color;
      this.oneline = _.isUndefined(param.oneline) ? false : param.oneline;
    }

    Printer.prototype.log = function(message) {
      return this._print(message, WHITE);
    };

    Printer.prototype.info = function(message) {
      return this._print(message, CYAN);
    };

    Printer.prototype.error = function(message) {
      return this._print(message, RED);
    };

    Printer.prototype.warn = function(message) {
      return this._print(message, YELLOW);
    };

    Printer.prototype._print = function(message, color) {
      if (this.oneline) {
        message = oneline(message);
      }
      if (this.color) {
        print(color);
      }
      console.log(message);
      if (this.color) {
        return print(RESET);
      }
    };

    return Printer;

  })();

  module.exports = {
    Printer: Printer,
    log: function(message) {
      var printer;
      printer = new Printer;
      return printer.log(message);
    },
    info: function(message) {
      var printer;
      printer = new Printer;
      return printer.info(message);
    },
    error: function(message) {
      var printer;
      printer = new Printer;
      return printer.error(message);
    },
    warn: function(message) {
      var printer;
      printer = new Printer;
      return printer.warn(message);
    }
  };

}).call(this);
