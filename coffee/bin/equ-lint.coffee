_ = require 'underscore'

{getParameters} = require '../lib/parameter'
{lint} = require '../lib/lint'

{readAndParse} = require '../equ'

paths = getParameters()

_.each paths, (path) -> lint readAndParse(path), path
