_ = require 'underscore'

find = ($equ) ->
  definitions = []

  functionAssignments = $equ.find('AssignmentExpression').has('[right:"FunctionExpression"]').nodes
  _.each functionAssignments, (node) ->
    definitions.push
      type:   node.type
      id:     node.left
      params: node.right.params
      body:   node.right.body
      loc:    node.loc

  functionDeclarations = $equ.find('FunctionDeclaration').nodes
  _.each functionDeclarations, (node) ->
    definitions.push
      type:   node.type
      id:     node.id
      params: node.params
      body:   node.body
      loc:    node.loc

  definitions

module.exports = find: find
