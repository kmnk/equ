fs = require 'fs'

read = (path) ->
  stat  = fs.statSync path
  fd    = fs.openSync path, 'r'
  bytes = fs.readSync fd, stat.size, 0, 'ascii'
  data  = bytes[0]
  fs.closeSync fd
  data

readdir = (path) ->
  fs.readdirSync path

module.exports =
  read: read
  readdir: readdir
