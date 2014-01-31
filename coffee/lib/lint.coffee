_ = require 'underscore'

{readdir} = require './reader'
printer = require './printer'

LINT_DIRECTORY_PATH = 'js/lint/'

lint = ($equ, path) ->
  printer.log "review #{path}"

  lintPaths = readdir LINT_DIRECTORY_PATH

  results = _.flatten _.map lintPaths, (lintPath) ->
    unless lintPath.match ///\.js$/// then return
    {lint} = require "../lint/#{lintPath}"
    lint $equ, path

  _.each results, (result) ->
    unless result then return
    messages = [result.message]
    level = if result.level then result.level else 'info'
    messages.unshift "#{_locToOneline result.loc}:"
    printer[level] messages.join ' '

_locToOneline = (loc) ->
  unless loc then return "L0~L0"
  start = loc.start
  end   = loc.end
  "L#{start.line}~L#{end.line}"

module.exports = lint: lint
