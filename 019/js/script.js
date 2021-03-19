"use strict";

function first(some, callback) {
    setTimeout(function () {
        console.log(1);
    }, 1500);
    callback();
}

function second() {
    console.log(2);
}

first('rere', second);
//second();

function learnJS(lang, callback) {
    console.log(`I learn - ${lang}`);
    callback();
}

learnJS('JS', function () {
    console.log("I less this lesson");
});

function wrightSomething() {
    console.log("I less the lesson");
}

learnJS('JS', wrightSomething);