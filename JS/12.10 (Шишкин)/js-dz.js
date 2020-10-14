/* ПРАКТИЧЕСКИЕ ЗАНЯТИЕ ПО СТРОКАМ ИЗ 
12.10.2020 (И.ШИШКИН) */

// 1. Функция принимает 2 строки и возвращает 0 если строки равны, 1 если 1ая больше второй и -1 если 1ая меньше второй;

// function getMaxString(firstString, secondString) {
//     let result = 0; // деофлтное значение если строки равны (не нужен else)
//     if (firstString.length > secondString.length) {
//         result = 1;
//     } else if (firstString.length < secondString.length) {
//         result = -1;
//     }
//     return result;
// }
// let firstString = 'Hello';
// let secondString = 'Hello';
// console.log(getMaxString(firstString, secondString));

// 2. Написать функцию которая переводит в верхний регистр перваый символ строки 

// function firstLetter(str) {
//     str = str[0].toUpperCase() + str.slice(1);
//     return str;
// }
// let str = "hello";
// console.log(firstLetter(str));


// 3. Написать функцию, которая считает количество гласных
// букв в переданной строке.

// гласные a e i o u 

// let str = "aousdsaa";
// function numOfVowel(str) {
//              let result = str.match(/[aeiou]/g);
//              return result.length;
//     }
// console.log(numOfVowel(str));


// 4. Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

// let str = "только сегодня";

// function spamCheck(str) {
    
//     let arr = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх"];
//     // console.log(arr[1]);
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         n = str.includes(arr[i]);
        
//     }
//     return n;
    
    
// }
// console.log(spamCheck(str));

/*5. Написать функцию сокращения строки. Функция прини-*/
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.

// Примечание: str.slice(start [, end]) Возвращает часть строки от start до (не включая) end.

// function reduction(str, maxLength) {
//     if (str.length > maxLength) {
//         return (str.slice(0, (str.length - maxLength)) + "...");
//     }
// }
// console.log(reduction("Hello, world!", 8));

// 6. Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.

// let str = "baab";

// function isStrPalindrome(str) {
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != str[str.length - (i + 1)]) {
//             return "Не Палиндром";
//         } else {
//             return "палиндром";
//         }
//     }
// }

// console.log(isStrPalindrome(str));

// 7. Написать функцию, которая считает количество слов в
// предложении.

// let str = "Once upon a time in America";
// function numOfWords(str) {
//     let array = str.split(" ");
//     return array.length;
// }
// console.log(numOfWords(str));

// 8. Написать функцию, которая возвращает самое длинное
// слово из предложения.

// let str = "55555 4444 22 333";
// let array = str.split(" ");


// function maxWord(str) {
//     let array = str.split(" ");
//     let maxWordLength = array[0].length;
//     let maxWord = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > maxWordLength) {
//             maxWordLength = array[i].length;
//             maxWord = array[i];
//         }
//     }
//     return maxWord;
// }

// console.log(maxWord(str));


// 9. Написать функцию, которая считает среднюю длину слова
// в предложении.

// let str = "1, 22, 333";
// function averageLength(str) {
//     let array = str.split(" ");
//     let sumWordsLength = 0;
//     // [1, 22, 333]
//     for (let i = 0; i < array.length; i++) {
//         sumWordsLength += array[i].length;
//     }
//     return parseInt(sumWordsLength / array.length);
// }
// console.log(averageLength(str));

// 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.

let str = "Hello, world w!";
let sym = "w"; // 7 ind
function symbolIndex(str, sym) {
  let ind = 0;
}
console.log(symbolIndex(str, sym));