esparse = require('esprima').parse

parse = (code) -> esparse code,
  loc: true
#  range: true
#  raw: true
  tokens: true
#  comment: true
#  tolerant: true

module.exports = parse: parse
