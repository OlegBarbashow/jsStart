'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button'),
    // height = box.clientHeight,
    // width = box.clientWidth;

    // height = box.offsetHeight,
    // width = box.offsetWidth;

    height = box.scrollHeight,
    width = box.scrollWidth;

btn.addEventListener('click', () => {
   // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);

});

// console.log(width, height);
// console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.blockSize);