"use strict";

const arr = [4, 7, 1, 2, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// console.log(arr.length);

arr.forEach (function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


// arr.pop(); // Удаление последнего элемента массива
// arr.push(10); // Добавление элемента в конец массива

// Перебор элементов массива

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

const str = "ajhfsdhgs, jdhgdkddf, ckjglksg, bsdjg, dhglkdsg, eijoewjg";
const products = str.split(", ");
products.sort();
console.log(products.join("; "));