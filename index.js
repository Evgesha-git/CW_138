// const makeArray = function(min, max) {
//     let arr = [];
    
//     if (min < max) {
//         for (let i = min; i <= max; i++){
//             arr.push(i);
//         }
//     } else {
//         for (let i = min; i >= max; i--){
//             arr.push(i);
//         }
//     }

//     return arr;
// }

// const showArray = function(arr){
//     console.log(arr);
// }

// showArray(makeArray(40, 10));

// const pyramid = (h, marker = null) => {
//     for (let i = 1; i <= h; i++){
//         let s = '';
//         for (let j = 0; j < i; j++){
//             s += marker ? marker : i;
//             /**
//              * if (marker){
//              *  s += marker
//              * } else {
//              *  s += i
//              * }
//              */
//         }

//         document.write(s + '<br>');
//     }
// }

// const fib = num => num <= 1 ? num : fib(num - 1) + fib(num - 2);

// const fibArr = function () {
//     let rez = [];
//     let n = 0;
//     while (1) {
//         let numFib = fib(n);
//         n++;
//         if (numFib <= 1000) {
//             rez.push(numFib);
//         } else {
//             break;
//         }
//     }

//     return rez;
// }

// console.log(fibArr());

// const bCard = function (name, seconName, lastName, group) {
//     let title = 'Домашняя работа: «Функции»';
//     let subTitle = 'Выполнил: студент гр. ' + group;
//     let fio = `${name} ${seconName} ${lastName}`;

//     let maxLength = Math.max(title.length, subTitle.length, fio.length);

//     const f = (str, num) => {
//         for (let i = str.length; i < num; i++){
//             str += ' '
//         }
//         return `* ${str} *`;
//     }

//     title = f(title, maxLength);
//     subTitle = f(subTitle, maxLength);
//     fio = f(fio, maxLength);

//     let rm = ('*').repeat(maxLength + 4);

//     console.log(`${rm}\n${title}\n${subTitle}\n${fio}\n${rm}`);
// }

// bCard('Иван', 'Иванов', 'Иванович', 'FE_138');

// let s = 'abracadabra';
// console.log(s);
// s[0] = 'A';
// s = s.replace('a', 'A');
// console.log(s);

// const toUpperFirst = str => str[0].toUpperCase() + str.slice(1);

// console.log(toUpperFirst('string'));

// console.log(('abcd').at(-1));

// let index = ('A').charAt();

// console.log(String.fromCharCode(index + 4));

// /**
//  * @param {string} email 
//  */
// function isEmail (email) {
//     let regExp = new RegExp('^[a-z]{1}[a-z0-9\-_\.]{1,}@[a-z]{1}[a-z0-9]+\.[a-z]{2,12}', 'g');
//     let regExp2 = /^[a-z]{1}[a-z0-9\-_\.]{1,}@[a-z]{1}[a-z0-9]+\.[a-z]{2,12}/g;

//     return [regExp.test(email), regExp2.test(email)];
// }

// console.log(isEmail('a234sdf-sf@mail.ru'));
// console.log(isEmail('2erf@gmail2.test'));
// console.log(isEmail('sdfs23!@mail.ru'));

/**
 * * - элемент может встречяаться в строке неограниченное количество раз и 0 раз
 * + сопоставление один и более раз /a+/ a, aa, aaa, aaaa, ... b
 * ? - 0 или 1 раз
 */

/**
 * ^[a-z]{1}[a-z0-9\-_\.]{1,}@[a-z]{1}[a-z0-9]+\.[a-z]{2,12}
 * ^ - начало строки
 * [a-z]{1} - любой символ из диавпазона a..z только 1 раз
 * [a-z0-9\-_\.]{1,} | [a-z0-9]+ - либой символ из диапозона 1 и более раз
 * [a-z]{2,12} - символ из диапазона от 2 до 12 включений
 * \ - символ экранирования
 */

// /**
//  * 
//  * @param {string} str 
//  */
// const testRegExp = (str) => {
//     const regTest = /([A-Za-z]+)\s([a-z\s]+,)/g;
//     const group = regTest.exec(str);
//     return group;
// }

// console.log(testRegExp('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptas!'));

let date = new Date('01 01, 70 0:00:00 ');
console.log(date);
let newDate = date.getTime() + 8000;
date.setTime(newDate);
console.log(date);

console.log(Date.now());
