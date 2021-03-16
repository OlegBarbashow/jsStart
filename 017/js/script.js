"use strict";
const str = "Some string";
const arr = [1, 4, 6];
console.log(str.length);
console.log(arr.length);
console.log(str[0]);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf("str"));
console.log(str.indexOf("sss"));

const str2 = "Some new super string";
console.log(str2.slice(5, 9));
console.log(str2.slice(5));
console.log(str2.slice(-6, -1));
console.log(str2.substring(0, 4));
console.log(str2.substr(0, 4));

const num = "12.2px";
const num1 = 12.2;
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(Math.round(num1));