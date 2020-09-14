//* Класификация типов данных в JS 

/** Простые типы
    1. Числа 1, 2, 3  Ограничение по работе с числами, не может быть больше чем 2 в 53 степени
    2. Строки 'string', 'name'
    3. Логический тип boolean true/false
    4. null - не сушествует
    5. undefined - сушествует но значение у него никакого нет 
    6. Symbol
    7. BigInt - Тип данных который отображает большие числа
*/

/** Объекты
 * Спец.объекты
    1. Массивы []
    2. Функции functions
    3. Объект даты
    4. Регулярные выражения
    5. Ощибки
* Обычные объекты
 */

//* Простые типы Практика
let number = 4;
let double = 4.6;

console.log(4/0); // Infinity - бесконечность
console.log(-4/0); // -Infinity - -бесконечность

console.log('string' * 9); // Nan - not a number

const person = "Alex";

const bool = true; // true or false

console.log(something); // null

let und;
console.log(und);

//* Объекты Практика 

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);