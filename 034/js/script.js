//  touchstart
//  touchmove
//  touchend
//  touchenter
//  touchleave
//  touchcancel

document.addEventListener('DOMContentLoaded', () =>{
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
      e.preventDefault();

      console.log('touchstart');
      console.log(e.touches);
   });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('touchmove');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('touchend');
    });
});