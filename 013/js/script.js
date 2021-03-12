'use strict';
////////////////////////////////////////////
// if (4 == 5) {
//     console.log("All Ok!!!");
// } else {
//     console.log("Error");
// }
/////////////////////////////////////////////
const num = 50;
////////////////////////////////////////////
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('So match');
// } else {
//     console.log('Ok');
// }
//////////////////////////////////////////////
//(num === 50) ? console.log('All ok') : console.log('Error');
//////////////////////////////////////////////
switch (num) {
    case 49:
        console.log('I need more');
        break;
    case 50:
        console.log('I like it');
        break;
    default:
        console.log('Houston we have problems')
}