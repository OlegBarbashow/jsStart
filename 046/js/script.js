// // "use strict";
// //
// // function showThis(a, b) {
// //     console.log(this);
// //     function sum() {
// //         console.log(this);
// //         return a + b;
// //     }
// //     sum();
// // }
// //
// // // showThis();
// //
// // const obj = {
// //     a: 4,
// //     b: 5,
// //     sum: function () {
// //         // console.log(this);
// //         function sum() {
// //             console.log(this);
// //         }
// //         sum();
// //     }
// // }
// //
// // // obj.sum();
// //
// // function User(name, id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// //
// //     this.getThis = function() {
// //         console.log(this);
// //     }
// // }
// //
// // const ivan = new User('Ivan', 33);
// // // ivan.getThis();
// //
// // function sayName(username) {
// //     console.log(this)
// //     console.log(this.name);
// //     console.log(username);
// // }
// //
// // const user = {
// //     name: 'John'
// // };
// //
// // // sayName.call(user, 'Smith');
// // // sayName.apply(user, ['Smith']);
// //
// // function count(num) {
// //     return (this * num);
// // }
// //
// // const double = count.bind(2);
// // console.log(double(3));
//
// const btn = document.querySelector('button');
//
// btn.addEventListener('click', function(e) {
//     console.log(this);
//     console.log(e.target);
//     this.style.backgroundColor = 'red';
//
// })

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }
//
//         say();
//     }
// }
// obj.sayNumber();

const double = a => a * 2;

















