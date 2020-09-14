// Работа с пользователями 

alert("Hello");

const result = confirm("Are you here?");

console.log(result);

const answer = prompt("Are you 18?", "18");
console.log(typeof(answer));
//! Вся информация приходящаа от пользователя или элемента на странице будет в типе данных string

// Преобразование в число
const anotherAnswer = +prompt("Are you 18?", "18");
console.log(typeof(anotherAnswer));


// Массив
const answers  = [];

answers[0] = prompt("Как ваше Имя?", "");
answers[1] = prompt("Как ваше Фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers);