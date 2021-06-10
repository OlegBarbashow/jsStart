"use strict";

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

// log('bear', 'milk', 'banana', 'water');

function calcOrDouble(number, basis = 2) {
    return number * basis;
}

console.log(calcOrDouble(4, 4));
console.log(calcOrDouble(4));