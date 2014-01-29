_ = require 'underscore'

{getParameters} = require '../lib/parameter'
{read} = require '../lib/reader'
{parse} = require '../lib/parser'
{lint} = require '../lib/lint'

paths = getParameters()

_.each paths, (path) -> lint parse(read path), path
