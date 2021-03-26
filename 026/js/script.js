"use strict";

// To string----------------------------------------------------------------
// 1) String()
console.log(typeof(String(null)));
console.log(String(56));

// 2)Конкатенация
console.log(typeof (444 + ""));

const num = 5;
console.log("http://someadress/" + num);

// To Number------------------------------------------------------------------
// 1) Number()
console.log(typeof Number('4'));

// 2)
console.log(typeof(+'4'));
let answ = +prompt('mess', 'def');

// 3) parseInt();
console.log(typeof parseInt('44px', 10));

// To Boolean
// 0, '', null, undefined, NaN
// 1)
let switcher = null;
if (switcher) {
    console.log("Working ...");
}

// 2) Boolean()
console.log(Boolean('4'));

// 3) !!"";
console.log(!!"444");

