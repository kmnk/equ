(function() {
  var equ, parse, read, token;

  equ = require('./lib/equ');

  token = require('./lib/token');

  read = require('./lib/reader').read;

  parse = require('./lib/parser').parse;

  module.exports = {
    equ: equ.equ,
    isEqu: equ.isEqu,
    token: token.token,
    isToken: token.isToken,
    readAndParse: function(path) {
      return equ.equ(parse(read(path)));
    },
    parse: function(code) {
      return equ.equ(parse(code));
    }
  };

}).call(this);
