"use strict";
//////////////////////////
let  num = 50;
//////////////////////////
// while (num < 55) {
//     console.log(num);
//     num++;
//}
///////////////////////////
// do {
//     console.log(num);
//     num++;
// } while (num < 55);
///////////////////////////
// for (let i = 0; i < 8; i++) {
//     console.log(num);
//     num++;
// }
/////////////////////////////
for (let i = 0; i < 8; i++) {
    if (i > 3) {
        break;
    }
    if (i == 2) {
        continue;
    }

    console.log(i);
}