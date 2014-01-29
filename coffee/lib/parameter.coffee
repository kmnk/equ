_ = require 'underscore'

module.exports = getParameters: () -> _.rest process.argv, 2
