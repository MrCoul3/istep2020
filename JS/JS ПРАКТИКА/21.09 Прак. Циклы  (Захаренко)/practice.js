// ###### 21.09 Практика на парах (Захаренко) ########## \\
// ##################################################### \\
switchFunc();
function switchFunc() {
    let month = prompt("Введите месяц", "1");
    switch (month) {
        case "1":
            alert("Jan");
            break;
        case "2":
            alert("Feb");
            break;
        case "3":
            alert("Mar");
            break;
        case "4":
            alert("Apr");
            break;
        case "5":
            alert("May");
            break;
        case "6":
            alert("June");
            break;
        case "7":
            alert("July");
            break;
        default:
            alert("Введите число от 1 до 12");
            switchFunc();
    }
}





// parseInt - преобразование к целому числу
// parseFloat - преобразование к дробному числу


// калькулятор

// let x1 = prompt("Введите число 1", "1");
// x1 = parseFloat(x1);
// let x2 = prompt("Введите число 2", "1");
// x2 = parseFloat(x2);
// let operator = prompt("Введите оператор (+ - * /", "+");

// switch(operator) {
//     case "+":
//         alert('Результат' + x1 + x2);
//     break;
//     case "-":
//         alert('Результат' + x1 - x2);
//     break;
//     case "*":
//         alert('Результат' + x1 * x2);
//     break;
//     case "/":
//         if (x2 == 0) {
//             alert("Делить на 0 нельзя!");
//         } else 
//         alert('Результат ' + x1 / x2);
//         break;
//         default:
//             alert("Неизвестный оператор");
// }
    


// ЗАДАЧИ НА ЦИКЛ WHILE
// Вывести # столько раз, сколько указал пользователь.
// let x = parseInt(prompt("Введите число", "5"));
// while (x > 0) {
//     document.write('# <br>');
//     x--;
// }


// Пользователь ввел число а на экран вывелись все числа от введенного до 0.
// let x = parseInt(prompt("Введите число", "5"));
// while (x >= 0) {
//     document.write(x + '<br>');
//     x--;
// }

// Запросить число и степень. Возвести число в указанную степень и вывести результат
// let x = parseInt(prompt("Введите число", "5"));
// let y = parseInt(prompt("Введите степень", "2"));
// let z = y;
// let result = 1;
// while (y > 0) {
//     result *= x;
//     y--;
// }
// document.write('Число ' + x + ' в степени ' + z + ' = ' + result);

// Запросить два числа и найти все общие делители
// let x = parseInt(prompt("Введите число 1", "5"));
// let y = parseInt(prompt("Введите число 2", "2"));

// // проверка минимального значения
// let min = (x > y) ? x : y;
// min--;
// while (min > 1) {
//     if ((x % min) == 0 && (y % min) == 0) {
//         document.write('Делитель: ' + min + ' <br>');
//     }
//     min--;
// }

// Посчитать факториал введенного пользователем числа.
// let x = parseInt(prompt("Введите число", "5"));
// let number = x;
// let result = 1;
// while (x > 0) {
//     result = result * x;
//     x--;
// }
// document.write('Факториал числа ' + number + ' равен ' + result);



// ЗАДАЧИ НА ЦИКЛ DO WHILE

// предлагатть польлзователю решить пример 2 + 2 * 2 до тех пор пока он не решит его правильно
// let x = 0;
// do {
//     x = prompt('Решите пример: 2 + 2 * 2 = ');
// } while (x != 6);
// alert('Поздравляем!');


// Делить число 1000 на 2 до тех пор пока не получится число меньше 50. Вывести это число и сколько делений произвели.
// let x = 1000;
// let y = 2;
// let count = 0;

// do {
//     x = x / 2;
//     count++;
// } while (x >= 50);
// document.write('Число: ' + x + ', делений: ' count);


// ЗАДАЧИ НА ЦИКЛ FOR

// вывести все числа от 1 до 100, которые кратные указанному числу.
// let x = parseInt(prompt("Введите число", "10"));

// for (let i = 1; i <= 100; i++) {
//     if ((i % x) == 0 && i != x) {
//         document.write(i + '<br>');
//     }
    
// }

// вывести каждый 4ый элемент из указанного пользоватедем диапазона. Пользователь указывает мин и макс значение диапазона.
// let x = parseInt(prompt("Введите число 1", "10"));
// let y = parseInt(prompt("Введите число 2", "20"));
// let counter = 1;
// for (let i = x; i <= y; i++) {
//     if ((counter % 4) == 0) {
//         document.write(i + '<br>');
//     }
//     counter++;
// }

// Запросить число и проверить простое ли оно.
// Делится только на себя и  на единицу.

// let x = parseInt(prompt("Введите число", "10"));
// let result = true;
// for (let i = x - 1; i > 1; i--) {
//     if ((x % i) == 0) {
//         result = false;
//         break;
//     }
// }
// alert((result) ? 'Число простое' : 'Число не простое');

//________________________________________________