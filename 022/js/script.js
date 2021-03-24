"use strict";

// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(a);
// console.log(b);
//
//
// const obj = {
//     a: 5,
//     b: 1
// };
//
// const copy = obj;
//
// copy.name = 'eeeee';
//
// copy.a = 10;
//
// console.log(copy);
// console.log(obj);
//
// const newObj = {};
// copyMyObject(copy, newObj);
// console.log(newObj);

function copyMyObject(objToCopy) {
    let newObj = {};
    for (let key in objToCopy) {
        newObj[key] = objToCopy[key];
    }
    return newObj;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

// const newNumbers = copyMyObject(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
//
//
// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 12,
    j: 14
};

// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

const oldArr = ['a', 'v', 'd'];
const newArr = oldArr.slice();

newArr[0] = '333333';
console.log(oldArr);

const video = ['youtube', 'vimeo'],
    blogs = ['livejournal', 'wordpress'],
    internet = [...blogs, ...video];

//console.log(internet);

function myLog(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

myLog(...num);







