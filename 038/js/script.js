// "use strict";
// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');
//
//     function hideTabContent() {
//         tabsContent.forEach((item) => {
//            item.style.display = 'none';
//         });
//
//         tabs.forEach((item) => {
//             item.classList.remove('tabheader__item_active');
//         })
//     }
//
//     function showTabContent(i = 0) {
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');
//     }
//
//     tabsParent.addEventListener('click', (event) =>{
//        const target = event.target;
//
//        if (target && target.matches('div.tabheader__item')) {
//            tabs.forEach((item, i) => {
//               if (item == target) {
//                   hideTabContent();
//                   showTabContent(i);
//               }
//            });
//        }
//     });
//     hideTabContent();
//     showTabContent();
// });

"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
           item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.matches('div.tabheader__item')) {
            tabs.forEach((item, index) => {
               if (item == target) {
                   hideTabContent();
                   showTabContent(index);
               }
            });
        }
    });
});