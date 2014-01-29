{TYPE} = require './type'

_strToFunciton = (selector) ->
  _selector = selector.toUpperCase()
  switch
    when _selector is 'ALL'
      (node) -> true

    when _selector is '.PROGRAMS'
      (node) -> node.type is TYPE.PROGRAM

    when _selector is '.STATEMENTS'
      (node) -> ///.+Statement$///.test node.type

    when _selector is '.DECLARATIONS'
      (node) -> ///.+Declarat(?:ion|or)$///.test node.type

    when _selector is '.EXPRESSIONS'
      (node) -> ///.+Expression$///.test node.type

    when _selector is '.PATTERNS'
      (node) -> ///.+Pattern$///.test node.type

    when _selector is '.CLAUSES'
      (node) -> ///^(?:SwitchCase|CatchClause)$///.test node.type

    when _selector is '.MISCELLANEOUS'
      (node) -> ///^(?:Identifier|Literal)$///.test node.type

    when _selector is '.OTHERS'
      others = [
        TYPE.BOOLEAN
        TYPE.KEYWORD
        TYPE.NULL
        TYPE.NUMERIC
        TYPE.PROPERTY
        TYPE.PUNCTUATOR
        TYPE.REGULAR_EXPRESSION
        TYPE.STRING
      ].join '|'
      regexp = new RegExp "^(?:#{others})$"
      (node) -> regexp.test node.type

    when matches = ///^\[([^=]+)=['"]([^\]]+)['"]\]$///.exec selector
      keys = matches[1].split '.'
      val = matches[2]
      (node) ->
        _node = node
        for key in keys
          unless _node[key] then return false
          _node = _node[key]
        _node is val

    when matches = ///^\[([^=]+):['"]([^\]]+)['"]\]$///.exec selector
      keys = matches[1].split '.'
      val = matches[2]
      (node) ->
        _node = node
        for key in keys
          unless _node[key] then return false
          _node = _node[key]
        isSelected _node, val

    else
      (node) -> node.type is selector

isSelected = (node, selector) ->
  _isSelected = _strToFunciton selector
  return _isSelected node

module.exports = isSelected: isSelected
