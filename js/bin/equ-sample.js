(function() {
  var Printer, findFunctionCall, findFunctionDefinition, getParameters, printer, readAndParse, _;

  _ = require('underscore');

  printer = require('../lib/printer');

  Printer = new printer.Printer({
    color: false
  });

  printer.info('# sample print');

  Printer.log('log message without color');

  Printer.info('info message without color');

  Printer.error('error message without color');

  Printer.warn('warn message without color');

  printer.log('log message');

  printer.info('info message');

  printer.error('error message');

  printer.warn('warn message');

  printer.info('# sample parse');

  getParameters = require('../lib/parameter').getParameters;

  readAndParse = require('../equ').readAndParse;

  printer.info('## equ');

  _.each(getParameters(), function(path) {
    var $equ;
    $equ = readAndParse(path);
    printer.log($equ.find('.declarations'));
    return printer.log($equ.find('Identifier'));
  });

  printer.info('## token');

  _.each(getParameters(), function(path) {
    var $equ, $token;
    $equ = readAndParse(path);
    $token = $equ.token();
    return printer.log($token.find('Keyword'));
  });

  printer.info('# finders');

  printer.info('## functionDefinition');

  findFunctionDefinition = require('../lib/finder/functiondefinition').find;

  _.each(getParameters(), function(path) {
    var functionDefinitions;
    functionDefinitions = findFunctionDefinition(readAndParse(path));
    return _.each(functionDefinitions, function(definition) {
      return printer.log(definition);
    });
  });

  printer.info('## functionCall');

  findFunctionDefinition = require('../lib/finder/functiondefinition').find;

  findFunctionCall = require('../lib/finder/functioncall').find;

  _.each(getParameters(), function(path) {
    var functionCalls;
    functionCalls = findFunctionCall(readAndParse(path));
    return _.each(functionCalls, function(call) {
      return printer.log(call);
    });
  });

}).call(this);
