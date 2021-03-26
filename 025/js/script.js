"use strict";
debugger;
function hello() {
    console.log("Hello world");
}

hello();

function hi() {
    console.log("Say hi");
}

hi();

const arr = [11, 34, 63, 10],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);