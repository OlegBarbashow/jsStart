"use strict";
let arr = [1, 4, 6];
//console.log(arr);

const soldier = {
    health: 200,
    armor: 50,
    sayHi: function() {
        console.log("Hi man!");
    }
};

const john = {
    health: 100
}

// john.__proto__ = soldier;
// console.log(john.armor);
// console.log(john);
// john.sayHi();

Object.setPrototypeOf(john, soldier);

const nick = Object.create(soldier)
// console.log(john.armor);
// console.log(john);
// john.sayHi();

console.log(nick.armor);
console.log(nick);
nick.sayHi();