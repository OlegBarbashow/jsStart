"use strict";

const btn = document.querySelector('button');
// btn.onclick = function() {
//     alert('Hi');
// };

// btn.addEventListener('click', function() {
//     alert('Hi555');
// });
//
// btn.addEventListener('click', () => {
//    alert('hi hi');
// });
//
// btn.addEventListener('mouseenter', (e) => {
//     e.target.style.backgroundColor = 'blue';
// });

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//       e.target.removeEventListener('click', deleteElement);
//   }
// };
//
// btn.addEventListener('click', deleteElement);

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

const overlay = document.querySelector('.overlay');

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
});

const btns = document.querySelectorAll('button');

btns.forEach((item) => {
    item.addEventListener('click', e => {
       console.log(e.target);
    }, {once: true});
});





