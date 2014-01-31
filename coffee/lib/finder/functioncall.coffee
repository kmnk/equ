_ = require 'underscore'
{TYPE} = require '../type'

find = ($equ) ->
  calls = []

  functionCalls = $equ.find('CallExpression').nodes
  _.each functionCalls, (node) ->
    if node.callee.type is TYPE.MEMBER_EXPRESSION
      _id = node.callee.property
    else
      _id = node.callee
    calls.push
      type:   node.type
      id:     _id
      args:   node.arguments
      callee: node.callee
      loc:    node.loc

  calls

module.exports = find: find
