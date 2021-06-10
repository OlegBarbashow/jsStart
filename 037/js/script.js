// "use strict";
//
// document.addEventListener('DOMContentLoaded', () => {
//     const btns = document.querySelectorAll('button');
//     const btnBlock = document.querySelector('.btn-block');
//     // console.log(btns[0].classList.length);
//     // console.log(btns[0].classList.item(0));
//     // console.log(btns[0].classList.add('red'));
//     // console.log(btns[0].classList.remove('blue'));
//     // console.log(btns[2].classList.toggle('some'));
//     // console.log(btns[0].classList.contains('red'));
//
//     // btns[0].addEventListener('click', () => {
//     //     if (!btns[1].classList.contains('red')) {
//     //         btns[1].classList.add('red');
//     //     } else {
//     //         btns[1].classList.remove('red');
//     //     }
//     // });
//
//     btnBlock.addEventListener('click', (event) => {
//        const target = event.target;
//
//        if (target && target.tagName == 'BUTTON') {
//            target.classList.toggle('red');
//        }
//     });
//
//     const btn = document.createElement('button');
//     btnBlock.append(btn);
// });

//////////////////////////////////////////////////////////////////////////////
"use strict";
document.addEventListener('DOMContentLoaded', () => {
   const btns = document.querySelectorAll('button'),
       wrapper = document.querySelector('.btn-block');
   // console.log(btns[0].classList.length);
   //
   // for (let i = 0; i < btns[0].classList.length; i++) {
   //    console.log(btns[0].classList.item(i));
   // }
   //
   // btns[0].classList.add('red');
   // btns[0].classList.remove('blue');
   // btns[0].classList.toggle('blue');
   // btns[1].classList.toggle('red');
   //
   // if (btns[1].classList.contains('red')) {
   //    console.log('red');
   // };

   // btns[0].addEventListener('click',() => {
   //    if (btns[1].classList.contains('red')) {
   //       btns[1].classList.remove('red');
   //    } else {
   //       btns[1].classList.add('red');
   //    }
   // });

   wrapper.addEventListener('click', (e) => {
      if (e.target && e.target.nodeName == 'BUTTON' && e.target.matches('button')) {
         e.target.classList.toggle('red');
      }
   });

   const btn = document.createElement('button');
   btn.classList.add('red');
   wrapper.append(btn);
});