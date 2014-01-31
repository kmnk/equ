equ = require './lib/equ'
token = require './lib/token'
type = require './lib/type'
{read} = require './lib/reader'
{parse} = require './lib/parser'

module.exports =
  equ: equ.equ
  isEqu: equ.isEqu
  token: token.token
  isToken: token.isToken
  TYPE: type.TYPE
  readAndParse: (path) -> equ.equ parse read path
  parse: (code) -> equ.equ parse code
