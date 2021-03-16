"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
    console.log(num);
}

showFirstMessage("First function");
console.log(num);

console.log(culc(3, 3));

function culc(a, b) {
    return (a + b)
}

let logger = function(name) {
    console.log(name);
};

logger("Dima");

let superCalc = (a, b) => {
    return (a + b);
};

console.log(superCalc(12, 12));