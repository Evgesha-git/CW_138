// let a = 8;
// let b = 3;

/**
 * a+2(x-b)=16; => x - b = 16 / (a + 2)  => x = (16 / (a + 2)) + b
b(x+15)=a+6x; => b * (x + 15) - 6x = a => bx + 15b - 6x = a => bx - 6x = a - 15b => x(b - 6) = a - 15b => x = (a - 15b) / (b - 6)
x+2x+ax+bx=23780. => x(1 + 2 + a + b) = 23780 => x = 237800 / (3 + a + b)
 */

// let x_1 = 16 / (a + 2) + b;
// let x_2 = (a - 15 * b) / (b - 6);
// let x_3 = 23780 / (3 + a + b);

// console.log(x_1);
// console.log(x_2);
// console.log(x_3);

let s = 2000000;
let p = 0.1;
let y = 5;

//s * ((p / 12) * (1 + (p / 12)) ** (y * 12)) / ((1 + (p / 12)) ** (y * 12) - 1)

// let pereplata = s - (s * (p * y));
// let pereplata = (s * ((p / 12) * (1 + p / 12) ** (y * 12))) / ((1 + p / 12) ** (y * 12) - 1);

// console.log(pereplata);

// let num = Number(prompt("Введите число")); // number | NaN

// console.time("time_1");
// if (isNaN(num)) {
//     console.log("Вы ввели не число");
// } else {
//     if (num % 2 === 0) {
//         console.log(num > 0 ? num ** 4 : num * 10); // ? :
//     } else if (num % 3 === 0) {
//         console.log(num ** 3);
//     } else {
//         console.log(num + 1);
//     }
// }
// console.timeEnd("time_1");
// console.time("time_2");
// let rez = isNaN(num) ? "Вы ввели не число" : num % 2 === 0 ? (num > 0 ? num ** 4 : num * 10) : num % 3 === 0 ? num ** 3 : num + 1;

// console.log(rez);
// console.timeEnd("time_2");

// {
//     if (isNaN(num)) return;
//     // .... тело
// }

// let key = +prompt();

// switch (key) {
//     case 1:
//         console.log("Это единица");
//     // break;
//     case 2:
//         console.log("Это двойка");
//     // break;
//     case 3:
//         console.log("Это тройка");
//     // break;
//     case 4:
//         console.log("Это четвёрка");
//     // break;
//     case 5:
//         console.log("Это пятёрка");
//     // break;
//     default:
//         console.log("Это что-то неизвестное");
// }

/**
 * Нужно написать условие для движения пешехода при различных сигналах светофора.
 * Если красный - стоим, делтый - приготовиться, зеленый - идем.
 */

let color = prompt("color");

console.time('time_3');
if (color === "red") {
    console.log("Стоим");
} else if (color === "yelow") {
    console.log("Готовимся");
} else {
    console.log("Идем");
}
console.timeEnd('time_3');

console.time('time_4');
switch (color) {
    case "red":
        console.log("Стоим");
        break;
    case "yelow":
        console.log("Готовимся");
        break;
    case "green":
        console.log("Идем");
        break;
    default:
        console.log("Некорректный ввод");
}
console.timeEnd('time_4');

let a = +prompt();
let b = +prompt();

if ((a > 0 && a < 10) || (b > -10 && b < 0)) { // a - true || b - false
    console.log(a, b);
} else {
    console.log('Условаие не сработало');
}

// !== != 

if (!a){ // !0 - true 
    console.log('!a = false' + a);
} else {
    console.log('!a = true' + a);
}



let day = 41;
let mont;

if (day >= 1 && day <= 31) {
    mont = 1;
} else if (day <= 32 && day <= 59) {
    mont = 2;
}

switch (mont) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break

    default:
        break;
}

/**
 * git init
 * git remote add origin <github repo>
 * git checkout -b wh_js_1
 * git add .
 * git commit -m 'hw 1 js'
 * git push origin hw_js_1
 */