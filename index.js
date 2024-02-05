// const arrNums = [];

// while (1) {
//     let num = prompt('Введите число');
//     if (num === '') break;
//     arrNums.push(+num);
// }

// console.log(arrNums);

// arrNums.sort(function(a, b){
//     return a - b;
// });

// console.log(arrNums);

// let a = [5, 9, 21, , , 9, 78, , , , 6];
// let count = 0;

// for (let i = 0; i < a.length; i++){
//     if (a[i] === undefined) count += 1;
// }

// console.log(count);

// let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4, 0, 13,2]; //[1,8,0,13,76,8,7,0,22,0,2,3,2]
// let fIndex = arr.indexOf(0);
// let lIndex = arr.lastIndexOf(0);
// let summ = 0;

// for (let i = fIndex; i < lIndex; i++){
//     summ += arr[i];
// }

// console.log(summ);

// let h = +prompt('Введите высоту пирамиды');

// for (let i = 1; i < h; i++){
//     let sp = '';
//     let p = '';

//     for (let j = 0; j < i * 2 - 1; j++){
//         p += '^';
//     }

//     for (let j = 0; j < h - i; j++){
//         sp += ' ';
//     }

//     document.write('<pre>' + sp + p + '</pre>');
//     document.write('<pre>' + (' ').repeat(h - i) + ('^').repeat(i * 2 - 1) + '</pre>');
// }

// IIFE

// const makeCounter = function () {
//     let counter = 0;

//     return function () {
//         return counter++;
//     }
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// function fib(num) {
//     if (num <= 1) return num;
//     else return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(100));

// const memoize = function (fn) {
//     let cache = {};
//     return function (...args) {
//         let n = args[0];
//         if (n in cache) {
//             return cache[n];
//         } else {
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     };
// };

// const fib2 = memoize(function (num) {
//     if (num <= 1) return num;
//     else return fib2(num - 1) + fib2(num - 2);
// });

// console.log(fib2(100));

// const f1 = function (...a) {
//     console.log(arguments);
//     return a;
// };

// const f2 = (...a) => {
//     return a;
// };

//() => operation

/**
 * Стрелочная функция не имеет arguments, this, super
 */

// const arF1 = () => false; // const arF1 = () => {return false};

// console.log(arF1());

// const arF2 = (x) => x ** x;

// console.log(arF2(5));

// const arF3 = (a, b) => a + b;

// console.log(arF3(5, 6));

// const a = function () {
//     console.log(this);
// };

// const b = () => console.log(this);

// let arr = [132, 23, 345, 23, 4, 23];

// arr.sort((a, b) => a - b);

// let newArr = arr.map((item, i) => item * i);

// console.log(newArr);

// function arrayMap (arr, fn){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(fn(arr[i], i, arr));
//     }
//     return newArr;
// }

// let na = arrayMap(arr, (item, i) => item * i);

// console.log(na);

let arr = [5, 9, 21, , , 9, 78, , , , 6];

let summ = arr.reduce((acc, item, i) => ({...acc, [i]: item}), {});// let summ = arr.reduce((acc, item, i) => Object.assign(acc, {[i]: item}), {});

console.log(summ);

function helloWorld(){

}

let a = helloWorld;

console.log(a.name);

let b = ([]).map.apply('abracadabra', [function(i){
    return i
}]);

console.log(b);

// let b = ('abracadabra').map(i => i);
// console.log(b);

let ps = document.getElementsByTagName('p');

console.log(ps);

let texts = ([]).map.call(ps, i => i.innerText);
console.log(texts);

let strMap = ([]).map.bind('abracadabra');

console.log(strMap(i => i.toUpperCase()));