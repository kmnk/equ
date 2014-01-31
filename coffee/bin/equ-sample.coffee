_ = require 'underscore'

# sample print
printer = require '../lib/printer'
Printer = new printer.Printer color: false
printer.info '# sample print'
Printer.log   'log message without color'
Printer.info  'info message without color'
Printer.error 'error message without color'
Printer.warn  'warn message without color'
printer.log   'log message'
printer.info  'info message'
printer.error 'error message'
printer.warn  'warn message'

# sample parse
printer.info '# sample parse'
{getParameters} = require '../lib/parameter'
{readAndParse} = require '../equ'

## equ
printer.info '## equ'
_.each getParameters(), (path) ->
  $equ = readAndParse path
  printer.log $equ.find('.declarations')
  printer.log $equ.find('Identifier')

## token
printer.info '## token'
_.each getParameters(), (path) ->
  $equ = readAndParse path
  $token = $equ.token()
  printer.log $token.find('Keyword')

# finders
printer.info '# finders'

## functionDefinition
printer.info '## functionDefinition'
findFunctionDefinition = require('../lib/finder/functiondefinition').find
_.each getParameters(), (path) ->
  functionDefinitions = findFunctionDefinition readAndParse path
  _.each functionDefinitions, (definition) -> printer.log definition

## functionCall
printer.info '## functionCall'
findFunctionDefinition = require('../lib/finder/functiondefinition').find
findFunctionCall = require('../lib/finder/functioncall').find
_.each getParameters(), (path) ->
  functionCalls = findFunctionCall readAndParse path
  _.each functionCalls, (call) -> printer.log call
