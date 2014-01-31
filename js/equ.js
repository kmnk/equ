(function() {
  var equ, parse, token;

  equ = require('./lib/equ');

  token = require('./lib/token');

  parse = require('./lib/parser').parse;

  module.exports = {
    equ: equ.equ,
    isEqu: equ.isEqu,
    token: token.token,
    isToken: token.isToken,
    parse: function(code) {
      return equ.equ(parse(code));
    }
  };

}).call(this);
