/* ДЗ по строкам Иванов Николай */
/* -----------------------------------------------------------------*/

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
/* -----------------------------------------------------------------*/



// 2. Написать функцию которая переводит в верхний регистр перваый символ строки 

// function firstLetter(str) {
//     str = str[0].toUpperCase() + str.slice(1);
//     return str;
// }
// let str = "hello";
// console.log(firstLetter(str));
/* -----------------------------------------------------------------*/



// 3. Написать функцию, которая считает количество гласных
// букв в переданной строке.

// гласные a e i o u 

// let str = "aousdsaa";
// function numOfVowel(str) {
//              let result = str.match(/[aeiou]/g);
//              return result.length;
//     }
// console.log(numOfVowel(str));
/* -----------------------------------------------------------------*/



// 4. Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

// let str = "увеличение про";

// function spamCheck(str) {
    
//     let arr = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх"];
//     for (i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (str.includes(arr[i])) {
//           return true;
//         }
//     }
// }
// console.log(spamCheck(str));
/* -----------------------------------------------------------------*/



/* 5. Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”. */

/* Примечание: str.slice(start [, end]) Возвращает часть строки от start до (не включая) end. */

/* function reduction(str, maxLength) {
    if (str.length > maxLength) {
        return (str.slice(0, (str.length - maxLength)) + "...");
    }
}
console.log(reduction("Hello, world!", 3)); */
/* -----------------------------------------------------------------*/



/* 6. Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом. */
/* 
let str = "baab";

function isStrPalindrome(str) {
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - (i + 1)]) {
            return "Не Палиндром";
        } else {
            return "палиндром";
        }
    }
}

console.log(isStrPalindrome(str)); */
/* -----------------------------------------------------------------*/

/* 
7. Написать функцию, которая считает количество слов в
предложении. */

/* let str = "Once upon a time in America";
function numOfWords(str) {
    let array = str.split(" ");
    return array.length;
}
console.log(numOfWords(str)); */
/* -----------------------------------------------------------------*/


/* 
8. Написать функцию, которая возвращает самое длинное
слово из предложения.

РЕШЕНИЕ_1

let str = "55555 4444 22 333";
let array = str.split(" ");


function maxWord(str) {
    let array = str.split(" ");
    let maxWordLength = array[0].length;
    let maxWord = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > maxWordLength) {
            maxWordLength = array[i].length;
            maxWord = array[i];
        }
    }
    return maxWord;
}

console.log(maxWord(str)); */
// РЕШЕНИЕ_2

/* let str = "55555 4444 22 333";
function maxWord(str) {
    return str.split(" ").sort((b, a) => a.length - b.length)[0];
}
console.log(maxWord(str)); */
/* -----------------------------------------------------------------*/


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
/* -----------------------------------------------------------------*/

// 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.

/* Мое Решение 

let str = "Hello, world wide web!";
let sym = "w"; // 7 ind

function symbolIndex(str, sym) {
   let count = 0;
   let arr = str.split('');
   arr.forEach(function(item, i) {
      if (item == sym) {
         console.log("индекс: " + i);
         count = ++count;
      }
      
   });
   return "количество раз: " + count;
}

console.log(symbolIndex(str, sym)); */


/* Решение одногруппника 
function showIndex(str,symbol) {
    let pos = 0;            // индексы
    while (true){
       let res = str.indexOf(symbol,pos);
       if (res == -1){
           break;
       }
       pos = res + 1;
       alert(`индекс символа : ${pos}`);
    }
   let i = 0;               // сколько всего раз встречается этот символ в строке
   let j = str.indexOf(symbol);
   while (j != -1){
       i++;
       j = str.indexOf(symbol,j+1);
   } alert(`количество раз, которое символ встречается в строке:  ${i}`);
}
showIndex("Дмитрий","и"); */