// let summ = 0;
// let iter = 0;

// while (true) {
//     let num = prompt('Введите число, 0 или пустую троку');

//     if (num === '' || Number(num) === 0) break;
//     if (isNaN(num)) {
//         alert('Введено не число, повторите ввод');
//         continue;
//     }

//     summ += Number(num);
//     iter += 1;
// }

// console.log('Сумма: ' + summ);
// console.log('Средне арифметическое: ' + summ / iter);

// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let buf = '';
// let min = Infinity;
// let max = -Infinity;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//         buf += str[i]
//     } else {
//         if (min > Number(buf)) min = Number(buf);
//         if (max < Number(buf)) max = Number(buf);
//         buf = '';
//     }
// }

// console.log(min, max);

// let arr = str.split(' ').map(item => +item);
// console.log(Math.min(...arr), Math.max(...arr));

// let n = prompt('Введите число');
// let l = n.length;
// let summ = 0;
// let rev = '';

// for (let i = 0; i < n.length; i++){
//     summ += +n[i]; //Number(n[i])
// }
// for (let i = n.length - 1; i > 0; i--){
//     rev += n[i];
// }

// console.log('Исходное число: ' + n + ', цифр числе: ' + l + ', сумма: ' + summ + ', обратный порядок: ' + rev);

/**
 * push
 * pop
 * shift
 * unshift
 * indexOf
 * lastIndexOf
 * fill
 * slice
 * splice
 *
 */

// let arr = [12, 22, 11, 4, 1, 32, 123, 54, 667, 90, 9, 111];

// arr.sort(function (a, b) {
//     return b - a;
// });

// console.log(arr);

// const arr2 = [];

// arr2[0] = arr;

// arr2[2] = 0;

// console.log(arr2);

// let a = 5;
// let b = 10;

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// let matrix = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (j === matrix[i].length - 1) {
//             document.write("<strong>" + matrix[i][j] + "</strong>");
//         } else {
//             document.write(matrix[i][j]); // matrix[i] => ([0, 1, 2])[j]
//         }
//     }
//     document.write("<br/>");
// }

// let arr3 = [, , , , , , , 3, 4, 5, , , ,];
// let count = 0;

// for (let i = 0; i < arr3.length; i++) {
//     if (!arr3[i]){
//         count++
//     }
// }

// console.log(count);

// let arr4 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let rez = new Array(arr4.length).fill([]);

// for (let i = 0; i < arr4[0].length; i++) {
//     for (let j = 0; j < arr4.length; j++){
//         rez[i][j] = arr4[j][i];
//     }
// }

// console.log(rez);

// let t1 = [1, 2, 3];
// let t2 = t1;

// console.log(t2);
// t1.push(4);
// console.log(t2);

// console.log(f2(1000, 23424));

// function functionName (a, b) {
//     console.log(a + b);
// }

// function f2 (a, b) {
//     return a + b;
// }

// const f3 = function(){
//     return 'Hello world';
// }

// console.log(f3());


//IIFE

// (function (){
//     let functionVariable = 35;
//     console.log(functionVariable);
// })();


// const f4 = function(str){

//     const f = function(newStr) {
//         str = newStr;
//     }

//     return [str, f];
// }

// const [userName, setUserName] = f4('Test');

// console.log(userName);

// function isTrue (num) {
//     if (num >= 0) return true;
//     else return false;
// }

// function getRandimNum (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function getArray (n, min, max) {
//     let arr = [];
//     for (let i = 0; i < n; i++){
//         let num = getRandimNum(min, max);
//         arr.push(num);
//     }
//     return arr;
// }

// let arr = getArray(1000, -100, 100);
// let numPos = [], numNeg = [];

// for (let i = 0; i < arr.length; i++){
//     if (isTrue(arr[i])) {
//         numPos.push(arr[i]);
//     } else {
//         numNeg.push(arr[i]);
//     }
// }

// console.log(numPos);
// console.log(numNeg);
//(0 .. 1)

let arr = [];
let l = 1000, min = -100, max = 100
for (let i = 0; i < 1000; i++) {
    let num = Math.floor(Math.random() * (max - min) + min);
    arr.push(num);
}

let numPos = [], numNeg = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 0) {
        numPos.push(arr[i]);
    } else {
        numNeg.push(arr[i]);
    }
}

console.log(numPos);
console.log(numNeg);