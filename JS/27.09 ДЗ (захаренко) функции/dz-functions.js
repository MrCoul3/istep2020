// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// let x = prompt();
// let y = prompt();
// function name(x, y) {
//     if (x < y) {
//         return -1;
//     } else if (x > y) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// 2. Написать функцию, которая вычисляет факториал переданного ей числа. 

// function fact(x) {
//     if (x === 0) {
//         return 1;
//     }
//     else {
//         return x * fact(x - 1);
//     }
// }
// alert(fact(prompt()));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149. 
// let x,
// y,
// z;
// function transform(x, y, z) {
//     x = prompt("Введите первое число", "1");
//     y = prompt("Введите второе число", "4");
//     z = prompt("Введите третье число", "9");
//     console.log(x + y + z);
//     return (x + y + z);
// }
// transform(x, y, z);

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. 
// let x,
// y,
// result;
// area(x, y);
// function area(x, y) {
//     x = prompt("Введите длину прямоугольника", "10");
//     y = prompt("Введите ширину прямоугольника", "5");
//     if ((x == 0) || (y == 0)) {
//         result = x * x + y * y;
//         console.log(result);
//         alert("Площадь квадрата = " + result);
//     }   else {
//         result = x * y;
//         console.log(result);
//         alert("Площадь прямоугольника = " + result);
//     }
//     return result;

// }

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей. 
// let x;

// perfectNum(x);
// function perfectNum(x) {
//     let sum = 0;
//     x = prompt();
//     for (let i =  1; i < x; i++) {
//         if ((x % i) == 0) {
//             sum += i;
//             console.log("Сумма = " + sum);
//         }
//     }
//     if (sum == x) {
//         alert("Число совершенное!")
//     } else {
//         alert("Число не совершенное")
//     }
// }

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// let min,
// max;
// minMaxPerfectNum(min, max);
// function minMaxPerfectNum(min, max) {
//     min = prompt("Введите минимальное значение диапазона", "5");
//     max = prompt("Введите максимальное значение диапазона", "500");
//     for (let x = min; x < max; x++) {
//         perfectNum(x);
        
//     }
// }

// function perfectNum(x) {
//     let sum = 0;
//     for (let i =  1; i < x; i++) {
//         if ((x % i) == 0) {
//             sum += i;
//         }
//     }
//     if (sum == x) {
//         console.log(sum);
//         document.write(sum + "<br>");
//     } 
// }

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
//     let hour;
//     let minute;
//     let result;
//     let second;
//     time(hour, minute, second);
// function time(hour, minute, second) {
//     hour = prompt("Введите часы", "00");
//     minute = prompt("Введите минуты", "00");
//     second = prompt("Введите секунды", "00");
//     if ((minute == 0) && (second == 0)) {
//         minute = "00";
//         second = "00";
//     } else if (minute == 0) {
//         minute = "00";
//     } else if (second == 0) {
//         second = "00";
//     }
        
//     result = (hour + ":" + minute + ":" + second);
//     document.write(result);
// }

// 8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. 
//     let hour;
//     let minute;
//     let result;
//     let second;
//     time(hour, minute, second);
// function time(hour, minute, second) {
//     hour = prompt("Введите часы", "00");
//     minute = prompt("Введите минуты", "00");
//     second = prompt("Введите секунды");
//     result = hour * 3600 + minute * 60 + second * 1;
//     document.write(result + " сек");
//     return result;
// }

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». 
let seconds = prompt("Введите количество секунд", "60");
let min;
let hour;
let result;
time(seconds);
function time(seconds) {
    if (seconds <= 59) {
        if (seconds < 10) seconds = '0' + seconds;
        result = ("00" + ":" + "00" + ":" + seconds);
    } else if (seconds > 59 && seconds <= 3599) {
        seconds = (seconds % 60);
        if (seconds < 10) seconds = '0' + seconds;
        min = parseInt(seconds / 60);
        if (min < 10) min = '0' + min;
        result = ("00" + ":" + min + ":" + seconds);
    } else {
        hour = parseInt(seconds / 3600);
        if (hour < 10) hour = '0' + hour;
        min = parseInt;
        if (min < 10) min = '0' + min;
        seconds = (seconds % 60);
        if (seconds < 10) seconds = '0' + seconds;
        result = (hour + ":" + min + ":" + seconds);
    }   
    document.write(result);
}