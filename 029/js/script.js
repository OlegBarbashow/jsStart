"use strict";
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');


console.dir(box);

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = "background-color: 'green'; width: 500px";

btns[1].style.borderRadius = '100%';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'yellow';
}

hearts.forEach(heart =>{
   heart.style.backgroundColor = 'black';
});

const div = document.createElement('div');
const text = document.createTextNode('Some text');

div.classList.add('black');
//
// document.body.append(div);
//
wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);
//
// hearts[0].after(div);
//
// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(div);

// circles[1].replaceWith(hearts[1]);
// wrapper.replaceChild(circles[1],hearts[1]);

// div.innerHTML = '<h1>Hi man!!!</h1>';

div.insertAdjacentHTML('beforebegin', '<h2>beforebegin</h2>');
div.insertAdjacentHTML('beforeend', '<h2>beforeend</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>afterbegin</h2>');
div.insertAdjacentHTML('afterend', '<h2>afterend</h2>');