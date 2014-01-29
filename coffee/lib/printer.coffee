_ = require 'underscore'
{print} = require 'util'

{oneline} = require './normalizer'

RESET   = '\u001b[0m'

BLACK   = '\u001b[30m'
RED     = '\u001b[31m'
GREEN   = '\u001b[32m'
YELLOW  = '\u001b[33m'
BLUE    = '\u001b[34m'
MAGENTA = '\u001b[35m'
CYAN    = '\u001b[36m'
WHITE   = '\u001b[37m'

class Printer
  constructor: (param={}) ->
    @color   = if _.isUndefined param.color   then true  else param.color
    @oneline = if _.isUndefined param.oneline then false else param.oneline

  log:   (message) -> @_print message, WHITE
  info:  (message) -> @_print message, CYAN
  error: (message) -> @_print message, RED
  warn:  (message) -> @_print message, YELLOW

  _print: (message, color) ->
    if @oneline then message = oneline message

    if @color then print color

    console.log message

    if @color then print RESET

module.exports =
  Printer: Printer
  log:   (message) ->
    printer = new Printer
    printer.log message
  info:  (message) ->
    printer = new Printer
    printer.info message
  error: (message) ->
    printer = new Printer
    printer.error message
  warn:  (message) ->
    printer = new Printer
    printer.warn message
