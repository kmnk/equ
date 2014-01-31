equ = require './lib/equ'
token = require './lib/token'
{read} = require './lib/reader'
{parse} = require './lib/parser'

module.exports =
  equ: equ.equ
  isEqu: equ.isEqu
  token: token.token
  isToken: token.isToken
  readAndParse: (path) -> equ.equ parse read path
  parse: (code) -> equ.equ parse code
