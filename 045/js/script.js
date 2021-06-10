"use script";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);
ivan.hello();
// const alex = new User('Alex', 17);
// console.log(ivan);
// console.log(alex);
//
// ivan.hello();

User.prototype.exit = function() {
    console.log(`User with name - ${this.name} was exit`);
}

ivan.exit();