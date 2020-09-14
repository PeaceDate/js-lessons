console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +" - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

/* Постфиксная форма записи. Сначала возвращает старое значение а после увеличивает или уменьшает 
    incr++;
    decr--;
*/

/* Префексная форма записи. Увеличивает и уменьшает сразу
    ++incr; 
    --decr;
*/

console.log(++incr);
console.log(--decr);

console.log(5%2); // Остаток при делении 

console.log(2*4 == 8); // Сравнивение. Только по значению
console.log(2*4 === 8); // Строгое стравнивение. По типу данных

// Логический оператор И &&. Возвращает true только когда все выражения правдивы
const isChecked = true,
      isClose = true;
console.log(isChecked && isClose); 

// Логический оператор Или ||. Возвращает true когда хотя бы один из аргументов правда
const isCheckedNew = true,
      isCloseNew = false;
console.log(isCheckedNew || isCloseNew); 

// Оператор отрицания. Обращает ложь в правду и наоборот
const isCheckedNo = false,
      isCloseNo = false;
console.log(isCheckedNo || !isCloseNo);

// Порядок выполнения операторов

console.log(2 + 2 * 2 === 8);