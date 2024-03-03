"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(num1, num2) {
    return num1 + num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function difference(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        return 0;
    }
    else if (num1 > num2) {
        return num1 - num2;
    }
    else {
        return num2 - num1;
    }
}

console.log(sum(2, 6));
console.log(multiplication(10, 4));
console.log(division(20, 4));
console.log(difference(0));
console.log(difference(40, 25));
console.log(difference(25, 40));