_ = require 'underscore'

{getParameters} = require '../lib/parameter'
{read} = require '../lib/reader'
{lint} = require '../lib/lint'

{parse} = require '../equ'

paths = getParameters()

_.each paths, (path) -> lint parse(read path), path
