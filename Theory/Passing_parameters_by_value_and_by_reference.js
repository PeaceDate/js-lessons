"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);



const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Ссылка на обькт а не копия

copy.a = 10;

console.log(copy);
console.log(obj);


// 1

function copyObj(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


// 2

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);


//3

const ooldArray = ['a', 'b', 'c'];
const newArray = ooldArray.slice();

newArray[1] = 'Hello';

console.log(newArray);
console.log(ooldArray);


// Оператор разворота ES6 ES8

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


//4

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// 5

const array = ['a', 'b', 'c'];
const newAarray = [...array];

console.log(newAarray);

// 6

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);