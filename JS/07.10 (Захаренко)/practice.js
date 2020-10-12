// Массивы Практические задания (Захаренко) 07.20.20

//  Создать массив из 10 случ чисел и написать несколько функций для работы с ним 
let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 100));
}

// console.log(arr);

// 1. Функция принимает массив и выводит его на экран

function showArray(array) {
    for (let item of array) {
        document.write(item + "<br>");
    }
}

// showArray(arr);

// примечание 
// (let item in array) по ключам 
// (let item of array) по значениям //

// 2. Функция принимает массив и выводит только четные элементы 

function showEvenElemOfArray(array) {
        for (let element of array) {
            if ((element % 2) == 0)
            document.write(element + "<br>");
        }
    }
// showEvenElemOfArray(arr);

// 3. Функция принимает  массив и возвращает сумму всех элементов массива

function sumElementOfArray(array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
    
}
// Комментарий - что бы получить сумму всех элементов массива нужно вывзвать функцию а не показывать их внутри функции 
// document.write(sumElementOfArray(arr));

// 4. функция принимает масисва и возвращает его максимальный элемент 

function maxArray(array) {
    let max = array[0];
    console.log(array[0]);
    for (let item of array) {
        if (item > max) {
            max = item;
        }
    }

    return max;
}
// document.write("Максимальное число " + maxArray(arr));

// 5. Функция добавления нового элемента в массив по указанному индексу 

// Примечание https://learn.javascript.ru/array-methods
// arr.splice(index, 0, item1...item2); будет вставлять item в arr по указанному индексу (сначала удаляя 0 элементов, то есть просто вставку).

// function addElement(array, element, index) {
//     return array.splice(index, 0, element);
    
// }

// document.write(addElement(arr, 123123, 3));
// showArray(arr);

// 6. Функция удаления элемента из мссива по указанному индексу 
    
function delElement(array, index) {
    return array.splice(index, 1);
    
}
// showArray(arr);
// delElement(arr, 3);
// showArray(arr);

// Задание 2 
// Создать еще один массив из 5 случайных чисел 

let arr2 = [];

for (let i = 0; i < 5; i++) {
    arr2.push(parseInt(Math.random() * 100));
}

// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массиово без повторений 

// Примечание https://learn.javascript.ru/array-methods
// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

function getUniqueArray(array1, array2) {
    let result = [];
    for (let item of array1) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    for (let item of array2) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

// showArray(arr);
// document.write("<hr>");
// showArray(arr2);
// document.write("<hr>");
// showArray(getUniqueArray(arr, arr2));

// 2. Функция принимает 2 массива и возвращает новый массив в котором собраны общие элементы ( то есть элементы ктороые встречаются и в первом и во втором массиве юез повторений)

function getCommonElements(array1, array2) {
    let result = [];
    for (let item of array2) {
        if (array1.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

// showArray(arr);
// document.write("<hr>");
// showArray(arr2);
// document.write("<hr>");
// showArray(getCommonElements(arr, arr2));

// 3. Функция принимет 2 массива и возвращает новый, в котором собраны все элементы из певрого массива которых нет во втором. 

function getElements(array1, array2) {
    let result = [];
    for (let item of array1) {
        if (!array2.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

// showArray(arr);
// document.write("<hr>");
// showArray(arr2);
// document.write("<hr>");
// showArray(getElements(arr, arr2));

// Задание 3.
// Создлать массив фруктов и отсортировать его по алфавиту.

let fruits = [
    'lemon',
    'banana',
    'apple'
];
// Примечание 
// метод .sort - сортирует по алфавиту 
fruits.sort()
// showArray(fruits);

// 1. Вывод на экран с помощью document.write в виде списка ul li. 

function showFruits(array) {
    document.write("<ul>");
    for (let item of array) {
        document.write("<li>" + item + "</li>")
    }
    // document.write("</ul>");
}
// showFruits(fruits);

// 2.  Поиск фрукта в массиве. Функция принимает название фрута ии возвращает индекс найденного элемента или -1 если не найден.

function getIndex(array, name) {
    for (let key in array)  {
        if (array[key] == name) {
            return key;
        }
    }
    return -1;
}

// document.write(getIndex(fruits, "lemon"));


