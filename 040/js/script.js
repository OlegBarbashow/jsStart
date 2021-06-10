"use strict";

document.addEventListener('DOMContentLoaded', () => {
   const now = new Date();

   // const now = new Date('1988-11-22');

   // const now = new Date(1988,11,22);



   console.log(now.getFullYear());
   console.log(now.getDate());
   console.log(now.getDay());
   console.log(now.getUTCHours());
   console.log(now.getTimezoneOffset());
   console.log(now.getTime());

   console.log(now.setDate(1));


   console.log(now);
});