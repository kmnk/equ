_ = require 'underscore'

util = require './util'

oneline = (data) ->
  unless _.isObject data then return "#{data}"
  switch
    when util.isNode data
      _onelineNode data
    else
      "#{data}"

_onelineNode = (node) ->
  messages = []

  # type
  messages.push "TYPE:{#{oneline node.type}}"

  # value
  if value = node.value then messages.push "VALUE:{#{oneline value}}"
  if name  = node.name  then messages.push "NAME:{#{oneline name}}"

  # location
  if loc = node.loc
    messages.push "START:{L:#{loc.start.line} C:#{loc.start.column}}"
    messages.push "END:{L:#{loc.end.line} C:#{loc.end.column}}"

  # other attributes
  attrs = []
  _.each node, (val, key) ->
    if key is 'type' then return
    if key is 'name' then return
    if key is 'value' then return
    if key is 'loc' then return
    attrs.push key
  if attrs.length > 0 then messages.push "ATTRS:[#{attrs.join ','}]"

  messages.join ' '

module.exports =
  oneline: oneline
