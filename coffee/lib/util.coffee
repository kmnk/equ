_ = require 'underscore'

isNode = (obj) ->
  unless _.isObject obj         then return false
  if     _.isUndefined obj.type then return false
  true

module.exports =
  isNode: isNode
