"use strict";
document.addEventListener('DOMContentLoaded', () => {
//     // const timerId = setTimeout(logger, 2000, 'text');
//
//     const btn = document.querySelector('.btn');
//
//     function animation() {
//         const elem = document.querySelector('.box');
//         let pos = 0;
//
//         let animationId = setInterval(frame, 10);
//
//         function frame() {
//             if (pos == 300) {
//                 clearInterval(animationId);
//             } else {
//                 pos++;
//                 elem.style.top = `${pos}px`;
//                 elem.style.left = `${pos}px`;
//             }
//         }
//     }
//
//
//     btn.addEventListener('click', animation);
//
//     // let timerId,
//     //     i = 0;
//     //     btn.addEventListener('click', () => {
//     //     timerId = setInterval(logger, 2000, 'next');
//     // });
//     //
//     // function logger(text) {
//     //     if (i == 2) {
//     //         clearInterval(timerId);
//     //     }
//     //     console.log(text);
//     //     i++;
//     // }
    // //
// //
// // let m = 0;
// // let id = setTimeout(function log() {
// //    console.log('hihihih');
// //    id = setTimeout(log, 500);
// //    if (m === 10) {
// //        clearInterval(id);
// //    }
// //    m++;
// // }, 500);

// const timerId = setTimeout((timerName)=>{
//     console.log(timerName)
// }, 2000, 'first timer');
//
// let timerId2,
//     i = 0,
//     isStop = false;
//
// function logger() {
//     if (i == 3 || isStop) {
//         clearInterval(timerId2);
//     }
//     console.log('logger is here');
//     i++;
// }
//
//
//
// const btn = document.querySelector('button.btn');
// const btnStop = document.querySelector('button.btnStop');
// btnStop.addEventListener('click', () => {
//    isStop = true;
// });
//
// btn.addEventListener('click', () => {
//     // timerId2 = setTimeout(logger, 3000);
//     timerId2 = setInterval(logger, 2000);
// });
//     // clearInterval(timerId2);
//
//     let i = 0;
//     let id = setTimeout(function log() {
//         console.log('hello');
//         i++;
//         if (i > 5) {
//             clearInterval(id);
//         }
//         id = setTimeout(log, 500);
//     }, 500);

    const btn = document.querySelector('button.btn');

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 50);
        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    btn.addEventListener('click',myAnimation);

});
