(function () {
    var foo = 'bar';

    function baz (a, b, c) {
        if (a) { return { myMessage : 'true',  result : b }; }
        else   { return { myMessage : 'false', result : c }; }
    }

    console.log(baz(true,  'fuga', 'piyo'));
    console.log(baz(false, 'fuga', 'piyo'));
}());
