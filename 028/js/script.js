"use strict";
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
const btn1 = document.getElementsByTagName('button')[0];

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item =>{
   console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);