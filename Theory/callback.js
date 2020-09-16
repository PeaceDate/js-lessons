"use strict";

function learnJS (lang, callback) {
    console.log(`I leanr: ${lang} `);
    callback ();
}

function done () {
    console.log('I do this!');
}

learnJS('JavaScript', done);