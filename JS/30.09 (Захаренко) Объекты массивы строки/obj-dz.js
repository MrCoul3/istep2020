//                              Модуль 2
//             ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
//                ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
//                           ВВЕДЕНИЕ В ООП/

// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let car = { 
//     maker: "Opel",
//     model: "Astra",
//     year: 2008,
//     averageSpeed: 100
// }

// function carInfo(obj) {
//     document.write("Производитель: " + obj.maker + "<br>");
//     document.write("Модель: " + obj.model + "<br>");
//     document.write("Год выпуска: " + obj.year + " г. <br>");
//     document.write("Средняя скорость: " + obj.averageSpeed + " km/h");
// }

// // carInfo(car);
// let range = 1300;
// driveTime(range);
// function driveTime(range) {
//     time = range / car.averageSpeed
//     for (let i = 1; i <= time; i++)
//     if ((i % 5) == 0) {
//         time += 1;
//     }
//     document.write("Время в пути составит " + time + "час.");
//     return time;
// }


// Задание 2 
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// let fraction1 = {
//     numeration: 10,
//     denumeration: 20
// }
// let fraction2 = {
//     numeration: 1,
//     denumeration: 4
// }

// 1. Функция сложения 2-х объектов-дробей. 

// sum(fraction1, fraction2);
// function sum(fraction1, fraction2) {
//     console.log("Сумма = " + ((fraction1.numeration / fraction1.denumeration) + (fraction2.numeration / fraction2.denumeration)));
//     return ((fraction1.numeration / fraction1.denumeration) + (fraction2.numeration / fraction2.denumeration));
// }

// 2. Функция вычитания 2-х объектов-дробей. 



// subtraction(fraction1, fraction2);
// function subtraction(fraction1, fraction2) {
//     console.log("Разница = " + ((fraction1.numeration / fraction1.denumeration) - (fraction2.numeration / fraction2.denumeration)));
//     return ((fraction1.numeration / fraction1.denumeration) - (fraction2.numeration / fraction2.denumeration));
// }

// 3. Функция умножения 2-х объектов-дробей. 

// multiplication(fraction1, fraction2);
// function multiplication(fraction1, fraction2) {
//     console.log("Произведение = " + ((fraction1.numeration / fraction1.denumeration) * (fraction2.numeration / fraction2.denumeration)));
//     return ((fraction1.numeration / fraction1.denumeration) * (fraction2.numeration / fraction2.denumeration));
// }

// 4. Функция деления 2-х объектов-дробей. 

// div(fraction1, fraction2);
// function div(fraction1, fraction2) {
//     console.log("Деление = " + ((fraction1.numeration / fraction1.denumeration) / (fraction2.numeration / fraction2.denumeration)));
//     return ((fraction1.numeration / fraction1.denumeration) / (fraction2.numeration / fraction2.denumeration));
// }

// 5. Функция сокращения объекта-дроби.

// reduction(fraction1);
// function reduction(fraction1) {
//     let min = (fraction1.numeration < fraction1.denumeration) ? fraction1.numeration : fraction1.denumeration;
//     for (let i = min; i > 0; i--) {
//         if (((fraction1.numeration % i) == 0) && ((fraction1.denumeration % i) == 0))
//         console.log("Дробь = " + (fraction1.numeration / i) + "/" + (fraction1.denumeration / i));
//         return ((fraction1.numeration / i) + "/" + (fraction1.denumeration / i));
//     }
// }



// Задание 3 
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 

// 1. Функция вывода времени на экран. 
// 2. Функция изменения времени на переданное количество секунд. 
// 3. Функция изменения времени на переданное количество минут. 
// 4. Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let timeObj = {
    hours: 0,
    minutes: 0,
    seconds: 5
};

// 1. Функция вывода времени на экран. 

timeToDisplay(timeObj);

function timeToDisplay(timeObj) {
    if (timeObj.hours < 10) timeObj.hours = '0' + timeObj.hours;
    if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
    if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
    document.write(timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds);
}
// 2. Функция изменения времени на переданное количество секунд. 
// let changeSec = 60;
// changeTime(timeObj, changeSec);
// function changeTime(timeObj, changeSec) {
//     let totalSec = +timeObj.hours * 3600 + +timeObj.minutes * 60 + +timeObj.seconds + changeSec;
//     console.log("Всего секунд " + totalSec);
//     if (totalSec <= 59) {
//         timeObj.seconds = totalSec;
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         result = ("00" + ":" + "00" + ":" + timeObj.seconds);
//     } else if (totalSec > 59 && totalSec <= 3599) {
//         timeObj.minutes = parseInt(totalSec / 60);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         console.log("минут " + timeObj.minutes);
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         console.log(timeObj.seconds);
//         result = ("00" + ":" + timeObj.minutes + ":" + timeObj.seconds);
//     } else if (totalSec >= 3600) {
//         timeObj.hours = parseInt(totalSec / 3600);
//         if (timeObj.hours < 10) timeObj.hours = '0' + timeObj.hours;
//         timeObj.minutes = parseInt((totalSec - (3600 * timeObj.hours)) / 60);
//         console.log(timeObj.minutes);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds  = '0' + timeObj.seconds ;
//         result = (timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds );
//     }
//     console.log(result);
//     document.write("<br> время стало " + result); 
//     return result;
// }

// 3. Функция изменения времени на переданное количество минут. 

// let changeMin = 62;
// changeTime(timeObj, changeMin);
// function changeTime(timeObj, changeMin) {
//     let totalSec = +timeObj.hours * 3600 + +timeObj.minutes * 60 + +timeObj.seconds + changeMin * 60    ;
//     console.log("Всего секунд " + totalSec);
//     if (totalSec <= 59) {
//         timeObj.seconds = totalSec;
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         result = ("00" + ":" + "00" + ":" + timeObj.seconds);
//     } else if (totalSec > 59 && totalSec <= 3599) {
//         timeObj.minutes = parseInt(totalSec / 60);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         console.log("минут " + timeObj.minutes);
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         console.log(timeObj.seconds);
//         result = ("00" + ":" + timeObj.minutes + ":" + timeObj.seconds);
//     } else if (totalSec >= 3600) {
//         timeObj.hours = parseInt(totalSec / 3600);
//         if (timeObj.hours < 10) timeObj.hours = '0' + timeObj.hours;
//         timeObj.minutes = parseInt((totalSec - (3600 * timeObj.hours)) / 60);
//         console.log(timeObj.minutes);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds  = '0' + timeObj.seconds ;
//         result = (timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds );
//     }
//     console.log(result);
//     document.write("<br> время стало " + result); 
//     return result;
// }

// 4. Функция изменения времени на переданное количество часов. 

// let changeHour = 10.5;
// changeTime(timeObj, changeHour);
// function changeTime(timeObj, changeHour) {
//     let totalSec = +timeObj.hours * 3600 + +timeObj.minutes * 60 + +timeObj.seconds + changeHour * 3600    ;
//     console.log("Всего секунд " + totalSec);
//     if (totalSec <= 59) {
//         timeObj.seconds = totalSec;
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         result = ("00" + ":" + "00" + ":" + timeObj.seconds);
//     } else if (totalSec > 59 && totalSec <= 3599) {
//         timeObj.minutes = parseInt(totalSec / 60);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         console.log("минут " + timeObj.minutes);
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds = '0' + timeObj.seconds;
//         console.log(timeObj.seconds);
//         result = ("00" + ":" + timeObj.minutes + ":" + timeObj.seconds);
//     } else if (totalSec >= 3600) {
//         timeObj.hours = parseInt(totalSec / 3600);
//         if (timeObj.hours < 10) timeObj.hours = '0' + timeObj.hours;
//         timeObj.minutes = parseInt((totalSec - (3600 * timeObj.hours)) / 60);
//         console.log(timeObj.minutes);
//         if (timeObj.minutes < 10) timeObj.minutes = '0' + timeObj.minutes;
//         timeObj.seconds = (totalSec % 60);
//         if (timeObj.seconds < 10) timeObj.seconds  = '0' + timeObj.seconds ;
//         result = (timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds );
//     }
//     console.log(result);
//     document.write("<br> время стало " + result); 
//     return result;
// }