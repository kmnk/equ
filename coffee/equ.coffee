equ = require './lib/equ'
token = require './lib/token'
{parse} = require './lib/parser'

module.exports =
  equ: equ.equ
  isEqu: equ.isEqu
  token: token.token
  isToken: token.isToken
  parse: (code) -> equ.equ parse code
