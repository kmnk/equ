(function () {
    foo = 'bar';

    function baz (a, b, c) {
        if (a) { return { my_message : 'true',  result : b }; }
        else   { return { my_message : 'false', result : c, }; }
    }

    console.log(baz(true,  'fuga', 'piyo'));
    console.log(baz(false, 'fuga', 'piyo'))
}());
