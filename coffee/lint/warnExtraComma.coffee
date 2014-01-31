_ = require 'underscore'

{token} = require '../lib/equ'

lint = ($equ, path) ->
  _.map _pickExtraCommas($equ), (extraComma) ->
    level:   'warn'
    message: 'Should not put extra comma.'
    loc:     extraComma.loc

_pickExtraCommas = ($equ) ->
  extraCommas = []

  $token = $equ.token()

  for i in [0..$token.tokens.length-1]
    unless $token.get(i).value is ',' then continue
    if $token.get(i+1).value   is '}' then extraCommas.push $token.get(i)
    if $token.get(i+1).value   is ']' then extraCommas.push $token.get(i)

  extraCommas

module.exports = lint: lint
