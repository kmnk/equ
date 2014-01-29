(function() {
  var Printer, ast, findFunctionCall, findFunctionDefinition, getParameters, parse, printer, read, token, _;

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

  read = require('../lib/reader').read;

  parse = require('../lib/parser').parse;

  ast = require('../lib/ast').ast;

  token = require('../lib/token').token;

  printer.info('## ast');

  _.each(getParameters(), function(path) {
    var $ast;
    $ast = ast(parse(read(path)));
    printer.log($ast.find('.declarations'));
    return printer.log($ast.find('Identifier'));
  });

  printer.info('## token');

  _.each(getParameters(), function(path) {
    var $token;
    $token = token(parse(read(path)));
    return printer.log($token.find('Keyword'));
  });

  printer.info('# finders');

  printer.info('## functionDefinition');

  findFunctionDefinition = require('../lib/finder/functiondefinition').find;

  _.each(getParameters(), function(path) {
    var functionDefinitions;
    functionDefinitions = findFunctionDefinition(ast(parse(read(path))));
    return _.each(functionDefinitions, function(definition) {
      return printer.log(definition);
    });
  });

  printer.info('## functionCall');

  findFunctionDefinition = require('../lib/finder/functiondefinition').find;

  findFunctionCall = require('../lib/finder/functioncall').find;

  _.each(getParameters(), function(path) {
    var functionCalls;
    functionCalls = findFunctionCall(ast(parse(read(path))));
    return _.each(functionCalls, function(call) {
      return printer.log(call);
    });
  });

}).call(this);
