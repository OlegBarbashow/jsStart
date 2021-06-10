"use strict";

const person = {
    name: 'Hose',
    tel: '+394341245',
    writeName: function () {
        console.log(this.name);
    }
}

person.writeName();

console.log(JSON.parse(JSON.stringify(person)));
console.log(JSON.stringify(person));