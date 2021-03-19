"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
}

// console.log(options.name);
// console.log(options['name']);
//
// //delete options.name;
// console.log(options);
//
// let number = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Key: ${i} -> value: ${options[key][i]}`);
//             number++;
//         }
//     } else {
//         console.log(`Key: ${key} -> value: ${options[key]}`);
//         number++;
//     }
// }
//
// console.log(options['colors']['border']);
// console.log(number);

console.log(Object.keys(options).length);

options.makeTest();

const {name} = options;

console.log(name);