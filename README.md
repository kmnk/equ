# equ

*Equ* is Esprima wrapper for static analyzing ECMAScript.


## INSTALL

    git clone git@github.com:kmnk/equ.git
    npm install


## USAGE

### SAMPLE

    $ ./equ sample sample/common.js


### LINT

Lint with "coffee/lint/\*.coffee".

    $ ./equ lint sample/common.js
    $ ./equ lint sample/bad.js


## LIBRARY USAGE

Please read "coffee/command/sample.coffee" source code.

### Equ

    {read} = require 'lib/reader'
    {parse} = require 'lib/parser'
    {equ} = require 'lib/equ'
    scriptPath = 'sample/common.js'
    $equ = equ parse read scriptPath

#### $equ.find(selector)

Search and pickup nodes recursively by selector, and return Equ object.


#### $equ.has(selector)

Pickup nodes by selector, and return Equ object.


#### $equ.filter(selector)

Filter out nodes by selector, and return Equ object.


#### $equ.first(selector)

Pickup a node by selector.


#### $equ.get(index)

Pickup a node by index.


#### $equ.attrs(key)

Pickup attributes of all nodes by key.


#### $equ.attr(key)

Pickup a attribute of first node by key.


### Token

    {read} = require 'lib/reader'
    {parse} = require 'lib/parser'
    {token} = require 'lib/equ'
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
