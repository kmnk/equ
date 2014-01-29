# ast

*Ast* is Esprima wrapper for static analyzing ECMAScript.


## INSTALL

    git clone git@github.com:kmnk/ast.git
    npm install


## USAGE

### SAMPLE

    $ ./ast sample sample/common.js


### LINT

Lint with "coffee/lint/\*.coffee".

    $ ./ast lint sample/common.js
    $ ./ast lint sample/bad.js


## LIBRARY USAGE

Please read "coffee/command/sample.coffee" source code.

### Ast

    {read} = require 'lib/reader'
    {parse} = require 'lib/parser'
    {ast} = require 'lib/ast'
    scriptPath = 'sample/common.js'
    $ast = ast parse read scriptPath

#### $ast.find(selector)

Search and pickup nodes recursively by selector, and return Ast object.


#### $ast.has(selector)

Pickup nodes by selector, and return Ast object.


#### $ast.filter(selector)

Filter out nodes by selector, and return Ast object.


#### $ast.first(selector)

Pickup a node by selector.


#### $ast.get(index)

Pickup a node by index.


#### $ast.attrs(key)

Pickup attributes of all nodes by key.


#### $ast.attr(key)

Pickup a attribute of first node by key.


### Token

    {read} = require 'lib/reader'
    {parse} = require 'lib/parser'
    {token} = require 'lib/token'
    scriptPath = 'sample/common.js'
    $token = token parse read scriptPath

#### $token.find(selector)

Search and pickup nodes recursively by selector, and return Token object.


#### $token.has(selector)

Pickup nodes by selector, and return Token object.


#### $token.filter(selector)

Filter out nodes by selector, and return Token object.


#### $token.first(selector)

Pickup a node by selector.


#### $token.get(index)

Pickup a node by index.


#### $token.attrs(key)

Pickup attributes of all nodes by key.


## SETUP FOR DEVELOPMENT

Execute below command before write coffee script.

    $ grunt


## SEEALSO

* [Parser API][parserapi]


## REQUIREMENTS

* [Node.js][node]
* [grunt-cli][gruntcli]


[node]: http://nodejs.org/ "Node.js"
[gruntcli]: https://github.com/gruntjs/grunt-cli "grunt-cli"
[parserapi]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API "Parser API"
