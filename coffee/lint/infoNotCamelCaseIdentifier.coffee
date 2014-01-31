_ = require 'underscore'

lint = ($equ, path) ->
  identifiers = $equ.find('Identifier').nodes
  _.map _.filter(identifiers, (node) ->
    ///^.+_///.test(node.name) and ///[a-z]///.test(node.name)
  ),
  (node) ->
    level:   'info'
    message: "Should define identifier '#{node.name}' in camel case."
    loc:     node.loc

module.exports = lint: lint
