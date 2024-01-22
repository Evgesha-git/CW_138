let num = 2.3;
let num2 = 33;

let a = 'abrakabra';
let A = 235;

console.log(a);

/**
 * Операторы
 * Математические: * / - + % **
 * Присваивания: =
 * Сравнения: > < == != === !== >= <=
 * Логические: (! - не) (|| - или) (&& - и)
 * Комбинированные: += -= *= **= %= ||= &&= 
 */

console.log(9 % 4); // 9 / 4 => (8 / 4) + 1

// let str = prompt('Введите строку');

// let f = str || 'Ничего не введено'; // || - ложные знаяения: 0 "" null undefined
// let f = str ?? 'Ничего не введено'; // ?? - оператор нулевого слияния: null undefined
// let f = 'Ничего не введено' && str && null; // ?? - оператор нулевого слияния


// console.log(f);


let num3 = 45;

num3 += 20; // num3 = num3 + 20

/* Не будет работать!!
let str2 = 'gadsfjhasdj'

[].forEach.call('8234682', (num) => console.log(num));

*/

let m = 234;

m = m + '2';

console.log(m);

let str2 = '2342.12.3sadfsda';

console.log(Number(str2)); // NaN - not a number
console.log(parseInt(str2));
console.log(parseFloat(str2));
console.log(+str2);

let n = 2346;

console.log(String(n));
console.log(n.toString(2)); // Параметр 2 - 36
console.log(n + ''); // Костыль

/**
 * Как вывести информацию пользователю
 * console.log | warn | error
 * prompt, aler, confirm
 * document.write
 */

/**
 * prompt => string | null
 * aler => void
 * confirm => boolean
 */

/**
 * undefined - мусор
 * null - ничего
 */