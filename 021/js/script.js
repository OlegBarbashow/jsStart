"use strict";

const arr = [1, 22, 3, 4, 13, 84, 11];

arr.pop();

//console.log(arr);

arr.push(10);

//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

arr.forEach(function (value, index, array) {
    console.log(`Index ${index} - value: ${value}`);
});

const str = 'green, yellow, bleck, red, pink';
const colorsArr = str.split(', ');
console.log(colorsArr.join('-'));
console.log(arr.sort(function (a, b) {
    return a - b;
}));