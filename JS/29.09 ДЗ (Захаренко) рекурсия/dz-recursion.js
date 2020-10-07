// Во всех заданиях обязательно использовать рекурсию. 

// 1. Написать функцию возведения числа в степень. 
// let x = prompt("введите число", 2);
// let n = prompt("Введите степень", 3);
// document.write(exponentiation(x, n));
// function exponentiation(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return exponentiation(x, n - 1) * x;
//     }
// }

// 2. Написать функцию поиска наибольшего общего делителя. 

// function NOD (x, y) {
// 	if (y > x) return NOD(y, x);
// 	if (y == 0) return x;
// 	return NOD(y, x % y);
// }
// console.log(NOD(45, 0));

// 3. Написать функцию для поиска максимальной цифры в числе.

function getMaxNum(number) {
    let lastNum = number % 10;

    if (!max || ) {
        max = lastNum
    }
}

// 4. Написать функцию, которая определяет простое ли переданное число. 
function simpleNum(x, i) {
    i = i || (x - 1);
    if (i == 1) {
        return "число простое";
    }
    if ((x % i) == 0) {
        return "число не простое";
    } else {
       return simpleNum(x, i -1)
    }
}


// function simpleNum(x) {
//     if (x > 1) return

// }

// Простое число делится только на 1 и на самого себя.