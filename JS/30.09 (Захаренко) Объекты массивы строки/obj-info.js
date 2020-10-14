//Объекты  Массивы Строки 
// https://learn.javascript.ru/object



// indexOf метод для поиска
// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true

// !!!если в массиве нет нужного элементаа то IndexOf вернет (-1)

// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.

// Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.
// По умолчанию элементы сортируются как строки.
// например
// let arr = [ 1, 2, 15 ];

// // метод сортирует содержимое arr
// arr.sort();

// alert( arr );  // 1, 15, 2

// Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().

// Функция должна для пары значений возвращать:

// function compare(a, b) {
//     if (a > b) return 1; // если первое значение больше второго
//     if (a == b) return 0; // если равны
//     if (a < b) return -1; // если первое значение меньше второго
//   }

// Добавление/удаление элементов
// Мы уже знаем методы, которые добавляют и удаляют элементы из начала или конца:

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.




// Объект string 
//  можно экранировать ковычку с помощью (\") для вставки ковычек внутри ковычек 
// \t табуляция 

// let str = "Привет";
// str[0] // П
// str[5] // т
// str.length = 6 длина строки 
// последний элемент  str[str.length - 1]

// let str = 30.09.2020
// str.substring(3, 4) - берет месяц из даты (3 и 4 ) - позиции символов
// str.substr(3, количество символов не включая указанный) есди не указать второй параметр будет до конца строки 






// Периодический вызов функций 9если мы делаем часы нужно каждую секкунду менять цифру)
// setTimeout(функция/код, задержка(милисек), аргумент )
// clearTimeout - отменяет функцию
// setInterval -повторяет функцию каждое количество сек 
// clearInterval



// Объект Math

// https://learn.javascript.ru/number



// 14.10 
// Объекты ШИШКИН

// let cat  = {
//     name: "Ivan",
//     meow: function() {
//         console.log("Meoooow" + this.name); /* метод внутри объекта  */
//     }
// };

// console.log(cat.meow());

// Задачи из учебника https://learn.javascript.ru/object

// 1. Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {
//     name: "John",
//     surname: "Smith"
// };
// user.name = "Pete";
// console.log(user.name);
// delete user.name;
// console.log(user);

// 2.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let obj = {};
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     } return true;
// }
// console.log(isEmpty(obj));

// obj["8:30"] = "get up";
// console.log(isEmpty(obj));


// 3. 
// const user = {
//     name: "John"
//   };
  
//   // это будет работать? - будет 
//   user.name = "Pete";
//   console.log(user);

// 4. У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// function sum(salaries) {
//     let sum = 0;
//     for (let key in salaries) {
//         sum += salaries[key];
//     }
//     return sum;
// }

// console.log(sum(salaries));


 
// 5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.


let menu = {
      width: 200,
      height: 300,
      title: "My menu"
};
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof(menu[key]) == typeof(1)) {
            menu[key] = menu[key] * 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

// for (let key in menu) {
// console.log(menu);
// }