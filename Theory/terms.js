"use strict";

if (4 == 9) {
    console.log('OK');
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much!')
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); // Тернарный оператор - в работе учавствует три аргумента.

const num2 = 51;

switch (num2) {
    case 49: 
        console.log('No!');
        break;
    case 100:
        console.log('No!');
        break;
    case 50:
        console.log('Yes!');
        break;
    default:
        console.log('Fuck');
        break;
}