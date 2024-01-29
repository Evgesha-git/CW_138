/**
 * for
 * {
 *  for of
 *  for in
 * }
 * while
 * do .. while
 */

// while (false) {
//     console.log('1');
// }

// do {
//     console.log('2');
// } while (false);

// let i = -10;

// console.log(i);

// for (let i = 0; i < 5; i++){
//     console.log('i = ' + i);
// }

// console.log(i);

// let a = 5;
// console.log(a); // 5
// console.log(a++); // 5
// console.log(a); // 6
// console.log(++a); // 7

// let a = 0;

// console.time("time_1");
// for (let i = 0; i < 100; i++) {
//     a += i;
// }
// console.timeEnd("time_1");

// let b = 0;
// console.time("time_2");
// let i = 0;
// while (i < 100) {
//     b += i;
//     i++;
// }
// console.timeEnd("time_2");

// console.log(a, b);

// for (let i = 0; i < "abracadabra".length; i++) {
//     console.log("abracadabra"[i]);
// }

// calculate

// let rez = 0;
// let num = null;

// while (true) {
//     num = num || prompt("Введите число"); // num == '' num == NaN
//     if (num === "" || isNaN(num)) break;
//     let op = prompt("Введите операцию: / * + - =");

//     if (op !== "/" || op !== "*" || op !== "-" || op !== "+" || op !== "=") continue;
//     if (op === "=") break;
//     num = Number(num);

//     switch (op) {
//         case "/":
//             rez /= num;
//             break;
//         case "*":
//             rez *= num;
//             break;
//         case "-":
//             rez -= num;
//             break;
//         case "+":
//             rez += num;
//             break;
//     }
//     num = null;
// }

// console.log(rez);


// Таблица умножения

// for (let i = 0; i < 11; i++){
//     document.write('<hr>');
//     for (let j = 0; j < 11; j++){
//         document.write(i + ' * ' + j + ' = ' + i * j + ' <br>');
//     }
// }

// for (let key in 'abracadabra'){
//     console.log(key);
// }

// for (let val of 'abracadabra'){
//     console.log(val);
// }

let arr = [1, 2, 3, 4];
//        [0, 1, 2, 3]
// let arr = new Array(1000).fill(99);

// arr[100] = 'lol';

console.log(arr.length); // last index + 1

/**
 * push
 * pop
 * shift
 * unshift
 */

console.time("time_1");
arr.push(5);
console.log(arr);
let num = arr.pop();
console.log(num);
console.log(arr);
console.timeEnd("time_1");
console.time('time_2');
arr.unshift(0);
console.log(arr);
let num2 = arr.shift();
console.log(num2);
console.log(arr);
console.timeEnd('time_2');

arr.length = 2;
console.log(arr);

let numbers = [1, 2, 32, 12, 324, 1, 2, 3, 344, 0, 2];

let index1 = numbers.indexOf(4);
let index2 = numbers.lastIndexOf(4);
let bool = numbers.includes(2);

let buffer = 0;
let n = 2;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === n) {
        buffer += 1;
    }
}

console.log(buffer);
console.log(index1, index2, bool);

/**
 * slice
 * splice
 */

let s1 = numbers.slice(4);// index start, index end
console.log(s1);
console.log(numbers);

let s2 = numbers.splice(6); //start index, count
console.log(s2);
console.log(numbers);
