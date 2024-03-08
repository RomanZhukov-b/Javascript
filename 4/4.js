"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

 // в отдельную переменную вынес умышленно, чтобы код был универсальным.

console.log('\nwith for and array')
const arr = [];
for (i = 1; i <= 20; i++) {
    arr.push('*');
    console.log(arr);
}

console.log('\nwith while and string')
const str = '*';
const j = 1;
while (j <= cnt) {
    console.log(str);
    str += '*';
    j++;
}
