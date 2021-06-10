"use strict";

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    // script.defer = true;
    document.head.append(script);
}

loadScript('js/third.js');
loadScript('js/test.js');