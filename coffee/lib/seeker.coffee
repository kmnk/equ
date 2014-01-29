_ = require 'underscore'

{TYPE} = require './type'

seek = (node, callback, param) ->
  if _.isUndefined node then return
  if _.isNull node      then return

  if _.isUndefined node.type then return

  names = []
  switch node.type
    # Programs
    when TYPE.PROGRAM then names = ['body']

    # Statements
    when TYPE.EMPTY_STATEMENT      then names = []
    when TYPE.BLOCK_STATEMENT      then names = ['body']
    when TYPE.EXPRESSION_STATEMENT then names = ['expression']
    when TYPE.IF_STATEMENT         then names = ['test', 'consequent', 'alternate']
    when TYPE.LABELED_STATEMENT    then names = ['label', 'body', 'alternate']
    when TYPE.BREAK_STATEMENT      then names = ['label']
    when TYPE.WITH_STATEMENT       then names = ['object', 'body']
    when TYPE.SWITCH_STATEMENT     then names = ['discriminant', 'cases', 'lexial']
    when TYPE.RETURN_STATEMENT     then names = ['argument']
    when TYPE.THROW_STATEMENT      then names = ['argument']
    when TYPE.TRY_STATEMENT        then names = ['block', 'handler', 'guardedHandlers', 'finalizer']
    when TYPE.WHILE_STATEMENT      then names = ['test', 'body']
    when TYPE.DO_WHILE_STATEMENT   then names = ['body', 'test']
    when TYPE.FOR_STATEMENT        then names = ['init', 'test', 'update', 'body']
    when TYPE.FOR_IN_STATEMENT     then names = ['left', 'right', 'body', 'each']
    when TYPE.FOR_OF_STATEMENT     then names = ['left', 'right', 'body']
    when TYPE.LET_STATEMENT        then names = ['head', 'body']
    when TYPE.DEBUGGER_STATEMENT   then names = []

    # Declarations
    when TYPE.FUNCTION_DECLARATION then names = ['id', 'params', 'defaults', 'rest', 'body', 'generator', 'expression']
    when TYPE.VARIABLE_DECLARATION then names = ['declarations', 'kind']
    when TYPE.VARIABLE_DECLARATOR  then names = ['id', 'init']

    # Expressions
    when TYPE.THIS_EXPRESSION        then names = []
    when TYPE.ARRAY_EXPRESSION       then names = ['elements']
    when TYPE.OBJECT_EXPRESSION      then names = ['properties']
    when TYPE.FUNCTION_EXPRESSION    then names = ['id', 'params', 'defaults', 'rest', 'body', 'generator', 'expression']
    when TYPE.ARROW_EXPRESSION       then names = ['params', 'defaults', 'rest', 'body', 'generator', 'expression']
    when TYPE.SEQUENCE_EXPRESSION    then names = ['expressions']
    when TYPE.UNARY_EXPRESSION       then names = ['operator', 'prefix', 'argument']
    when TYPE.BINARY_EXPRESSION      then names = ['operator', 'left', 'right']
    when TYPE.ASSIGNMENT_EXPRESSION  then names = ['operator', 'left', 'right']
    when TYPE.UPDATE_EXPRESSION      then names = ['operator', 'argument', 'prefix']
    when TYPE.LOGICAL_EXPRESSION     then names = ['operator', 'left', 'right']
    when TYPE.CONDITIONAL_EXPRESSION then names = ['test', 'alternate', 'consequent']
    when TYPE.NEW_EXPRESSION         then names = ['callee', 'arguments']
    when TYPE.CALL_EXPRESSION        then names = ['callee', 'arguments']
    when TYPE.MEMBER_EXPRESSION      then names = ['object', 'property', 'computed']
    when TYPE.LET_EXPRESSION         then names = ['head', 'body']

    # Patterns
    when TYPE.OBJECT_PATTERN then names = ['properties']
    when TYPE.ARRAY_PATTERN  then names = ['elements']

    # Clauses
    when TYPE.SWITCH_CASE  then names = ['test', 'consequent']
    when TYPE.CATCH_CLAUSE then names = ['param', 'guard', 'body']

    # Miscellaneous
    when TYPE.IDENTIFIER then names = ['name']
    when TYPE.LITERAL    then names = ['value']

    # Property
    when TYPE.PROPERTY then names = ['key', 'value', 'kind']

    # Others
    when TYPE.BOOLEAN, TYPE.KEYWORD, TYPE.NULL, TYPE.NUMERIC, TYPE.PROPERTY, TYPE.PUNCTUATOR, TYPE.REGULAR_EXPRESSION, TYPE.STRING
      names = []

    else throw "#{node.type} case is unimplemented"

  _.each names, (name) ->
    if _.isArray node[name]
      _.each node[name], (_node) -> callback _node, param
    else
      callback node[name], param

module.exports = seek: seek
