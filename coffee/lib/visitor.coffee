_ = require 'underscore'

{seek} = require './seeker'
{isNode} = require './util'

visit = (node, callback, param) ->
  unless isNode node then return

  callback node, param

  seek node,
    (_node) ->
      _param = _.clone param
      if !_.isUndefined _param.depth then ++_param.depth
      visit(_node, callback, _param)
    param

module.exports = visit: visit
