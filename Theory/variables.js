"use strict"; // Директива. Мы говорим нашему скриптовому файлу что мы работаем в современном режиме

//* Переменные


let number = 5; // Изменяемая переменная
const leftBorderWidth = 1; // Константа. Значение поменять не можем

// 1

number = 10;
console.log(number);

/**Ощибка При попытке изменить константу
    leftBorderWidth = 10;
    console.log(leftBorderWidth);
*/

/**2 
    Как таковых констант в JS не существует!
*/
const obj = {
    a:50
};

obj.a = 10;
console.log(obj);
// Прямых констант в JS нет !!!

/** 3
Не используется по причине того что видна и вызывается еще до ее объявления. Всплытие переменной (Hoistic)

console.log(name); // Undefined
var name = "Andrey"; // Устаревший вариант изменяемой переменной
*/

/**4
Такие переменные как let и const видны только в блоке ограничиными фигурными скобками
*/

{
    let result = 50;
}

console.log(result);

{
    var anotherResult = 10;
}

console.log(anotherResult);