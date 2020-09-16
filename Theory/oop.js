"use strict";

// Прототипно ориентированое програмирование

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; Устаревщая запись того что снизу

// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();