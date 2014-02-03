_ = require 'underscore'

token = require './token'
type = require './type'
{read} = require './reader'
{parse} = require './parser'
{visit} = require './visitor'
{isSelected} = require './selector'
util = require './util'

CLASS_NAME = 'Equ'

class Equ
  constructor: (@nodes) ->

  find: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@nodes, (node) ->
      _nodes = []
      visit node,
        (node, param) ->
          if isSelected node, selector then _nodes.push node
        {}
      _nodes
    ), true

  has: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@nodes, (node) ->
      _nodes = []
      if isSelected node, selector then _nodes.push node
      return _nodes
    ), true

  filter: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@nodes, (node) ->
      _nodes = []
      unless isSelected node, selector then _nodes.push node
      return _nodes
    ), true

  first: (selector) ->
    return _.first @find(selector).nodes

  get: (i=0) -> if @nodes.length > 0 then @nodes[i] else return

  attrs: (key) -> _.compact _.map @nodes, (node) -> node[key]
  attr: (key) -> if @nodes.length > 0 then @nodes[0][key] else return

  token: () -> if _.first(@nodes).tokens then token.token _.first(@nodes).tokens

isEqu = (obj) ->
  unless _.isObject obj  then return false
  unless obj.constructor then return false
  if obj.constructor.name is CLASS_NAME then return true
  false

_create = (nodes) ->
  if isEqu nodes then return nodes
  unless _.isArray nodes then nodes = [nodes]
  unless _.every(nodes, (node) -> util.isNode node) then throw 'invalid node'
  new Equ nodes

module.exports =
  equ: (nodes) -> _create nodes
  isEqu: isEqu
  readAndParse: (path) -> _create parse read path
  parse: (code) -> _create parse code
  token: token.token
  isToken: token.isToken
  TYPE: type.TYPE
