# equ

*Equ* is Esprima wrapper for static analyzing ECMAScript.


## INSTALL

    npm install equ


## USAGE

    var readAndParse = require('equ').readAndParse,
        SCRIPT_PATH = '/path/to/anyscript.js',
        $equ = readAndParse(SCRIPT_PATH)
    ;

    // where is console.log
    console.log(
        $equ.find('CallExpression')
            .has('[callee.object.name="console"]')
            .has('[callee.property.name="log"]')
            .attrs('loc')
    );


## SEEALSO

* [Parser API][parserapi]


## REQUIREMENTS

* [Esprima][esprima]


[esprima]: https://npmjs.org/package/esprima "Esprima"
[parserapi]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API "Parser API"
