// ДЗ 22.09 
// _______________________________________________________
// Вам необходимо самостоятельно решить, для какого задания
// какой цикл лучше использовать: WHILE, DO WHILE или FOR.
// _______________________________________________________
// _______________________________________________________
// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне. 
// let x = parseInt(prompt("Введите первое число из диапазона", "1"));
// let y = parseInt(prompt("Введите второе число из диапазона", "5"));
// let result = 0;
// while (x <= y) {
//     result += x;
//     x++;
// }
// document.write(result);
// _______________________________________________________
// _______________________________________________________
// 2. Запросить 2 числа и найти только наибольший общий
// делитель

// let x = parseInt(prompt("Введите первое число", "20"));
// let y = parseInt(prompt("Введите второе число", "10"));
// let min;
// if (x < y) {
//     min = x;
// } else {
//     min = y;
// }
// console.log("мниманльное число: " + min);
// while (min > 0) {
//     min--;
//     if ((x % min) == 0 && (y % min) == 0) {
//         document.write("наибольший общий делитель = " + min);
//         break ;
//     }
// }
// _______________________________________________________

// 3. Запросить у пользователя число и вывести все делители этого числа.
// let x = parseInt(prompt("Введите число", "20"));
// let del = x;

// for (let i = del; i > 0; i--) {
//     if ((x % i) == 0) {
//         document.write(i + "<br>");
//     }
// }
// _______________________________________________________

// 4. Определить количество цифр в введенном числе. 
// let n = prompt("Введите число", "100");
// function getDigitAmount(n) {
//     return n.length;
//   }
//   console.log(getDigitAmount(n));

// _______________________________________________________

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. 

// let x;
// let countPlus = 0;
// let countMinus = 0;
// let countEven = 0;
// let countOdd = 0,
// countZero = 0;
// for (let i = 1; i <= 10; i++) {
//     x = prompt("Введите 10 чисел");
//     if (x > 0) {
//         countPlus++;   
//     } else if (x < 0) {
//         countMinus++;
//     } else {
//         countZero++;
//     }

//     if ((x % 2) == 0) {
//     countEven++;
//     } else {
//     countOdd++;
//     }
// }
// document.write("Положительных: " + countPlus + "<br>"); 
// document.write("Отрицательных: " + countMinus + "<br>"); 
// document.write("Четных: " + countEven + "<br>"); 
// document.write("Нечетных: " + countOdd + "<br>"); 
// document.write("Нулей: " + countZero); 

// _______________________________________________________

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. 
// let x1;
// x1 = parseFloat(x1);
// let x2;
// x2 = parseFloat(x2);
// let sign;
// let result;
// let anotherOne;
// do {
//     x1 = prompt("Введите первое число", "1");
//     x1 = parseFloat(x1);
//     x2 = prompt("Введите второе число", "2");
//     x2 = parseFloat(x2);
//     sign = prompt("Введите знак", "+");
//     switch(sign) {
//     case "+":
//         alert(`Результат = ${x1 + x2}`);
//     break;
//     case "-":
//         alert(`Результат = ${x1 - x2}`);
//     break;
//     case "*":
//         alert('Результат = ' + x1 * x2);
//     break;
//     case "/":
//         if (x2 == 0) {
//             alert("Делить на 0 нельзя!");
//         } else 
//         alert('Результат =' + x1 / x2);
//         break;
//         default:
//             alert("Неизвестный оператор");
// }
//     anotherOne = confirm("Хотите решить еще один пример?")
// } while (anotherOne == true);

// _______________________________________________________

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let x = prompt('Введите число');
let y = prompt("На сколько сдвинуть");
let result = '';
for (let i = 1;  i <= y;  i++) {
   for (let j = i; j < x.length; j++) {

      result += x[j];
   }
   result += x[0];
    
}
alert(result);


// _______________________________________________________

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
// let nextDay;
// do {
//     for (i = 0; i < 7; i++) {
//         nextDay = confirm(days[i] + " Хотите увидеть следующий день?");
//     }
// } while (nextDay == true);
// _______________________________________________________

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. 
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.write(i + ' * ' + j + ' = ' + i * j + "<br>");
//     }
// }
// _______________________________________________________

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

   //  let a = 0;
   //  let b = 100;
   //  let answer = '';
   //  let temp = 0;

   //  do {
   //     temp = parseInt((a + b) / 2);
   //     answer = prompt('Ваше число >, < или = ' + temp);
   //     if (answer == '>') {
   //        a = temp 
   //     } else if (answer == '<') {
   //       b = temp;
   //     }

   //  } while (answer != '=');

   //  alert('Ваше число ' + temp);