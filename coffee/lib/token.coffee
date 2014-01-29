_ = require 'underscore'

{TYPE} = require './type'
{visit} = require './visitor'
{isSelected} = require './selector'
util = require './util'

CLASS_NAME = 'Token'

class Token
  constructor: (@tokens) ->

  find: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@tokens, (node) ->
      _nodes = []
      visit node,
        (node, param) ->
          if isSelected node, selector then _nodes.push node
        {}
      _nodes
    ), true

  has: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@tokens, (node) ->
      _nodes = []
      if isSelected node, selector then _nodes.push node
      return _nodes
    ), true

  filter: (selector) ->
    unless selector then return @

    _create _.flatten _.map(@tokens, (node) ->
      _nodes = []
      unless isSelected node, selector then _nodes.push node
      return _nodes
    ), true

  first: (selector) ->
    return _.first @find(selector).nodes

  get: (i=0) -> if @tokens.length > 0 then @tokens[i] else return

  attrs: (key) -> _.compact _.map @tokens, (node) -> node[key]
  attr: (key) -> if @tokens.length > 0 then @tokens[0][key] else return

isToken = (obj) ->
  unless _.isObject obj  then return false
  unless obj.constructor then return false
  if obj.constructor.name is CLASS_NAME then return true
  false

_create = (tokens) ->
  if util.isNode(tokens) and tokens.type is TYPE.PROGRAM then tokens = tokens.tokens
  if isToken tokens then return tokens
  unless _.isArray tokens then tokens = [tokens]
  unless _.every(tokens, (node) -> util.isNode node) then throw 'invalid node'
  new Token tokens

module.exports =
  token: (tokens) -> _create tokens
  isToken: isToken
