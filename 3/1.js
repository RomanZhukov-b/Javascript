"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/
const number = +prompt("Ввидите число");
function findСube(number) {
    return Math.pow(number, 3);
}
console.log(findСube(number, 3));