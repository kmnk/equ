(function() {
  var fs, read, readdir;

  fs = require('fs');

  read = function(path) {
    var bytes, data, fd, stat;
    stat = fs.statSync(path);
    fd = fs.openSync(path, 'r');
    bytes = fs.readSync(fd, stat.size, 0, 'ascii');
    data = bytes[0];
    fs.closeSync(fd);
    return data;
  };

  readdir = function(path) {
    return fs.readdirSync(path);
  };

  module.exports = {
    read: read,
    readdir: readdir
  };

}).call(this);
