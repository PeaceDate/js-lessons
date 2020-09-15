"use strict";

// Function Declaration создается до началла выполнения скрипта, можно выхвать перед объявлением
function showFirstMessage () {
    
}

// Function Expration создается только тогда когда доходит поток кода, можно вызвать только после объявления
const func = function () {

};

// Стрелочная фуккция Не имеет своего контекста (this) () =>
const calc = (a, b) => {
    return a + b;
};

/* Функция объявляется, то она содержит описание функции и замыкание. 
Замыкание — это коллекция всех переменных из области видимости во время создания функции.
*/

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);

