// Дан пустой массив let a = [];
// Дан массив let b = [‘item1’, ‘item2’, ‘item3’, ‘item4’];
// Необходимо перенести элементы из массива b в массив a так, чтобы в массиве a элементы были в обратном порядке. Использовать метод reverse() запрещено

let a = [];
let b = ["item1", "item2", "item3", "item4"];

a[0] = b[0];
console.log(a[0]);
console.log(b.length);


for (let i = 1; i < b.length; i++) {
    a.unshift(b[i]);
}

console.log(a);


// Дан массив объектов 
// let items = [
//    {id: 1, sum: 12},
//    {id: 2, sum: 18},
//    {id: 3, sum: 1},
//    {id: 4, sum:-2},
//    {id: 5, sum: 12},
//    {id: 6, sum: 6},
//    {id: 7, sum: 8},
//    {id: 8, sum: 104},
//    {id: 9, sum: 13},
//    {id: 10, sum: 23},
//    {id: 11, sum: 2},
// ];
// // нужно создать копию этого массива, в котором элементы будут отсортированы по sum от большего к меньшему
// // записать в переменную сумму всех значений  sum 

// let copyItems = items.slice();

//   copyItems.sort(function(a, b) {
//     return b.sum - a.sum;
// });

// let sum = 0;
// for (let i = 0; i < copyItems.length; i++) {
//     sum += copyItems[i].sum;
// }
// console.log(sum);

//   console.log(copyItems);
//   console.log(copyItems);



//   Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.


// class Worker {
//     constructor(name, surname, rate, days)  {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         document.write(`Зарплата ${this.rate * this.days}`);
//     }
// }

// let worker1 = new Worker("Coul", "Turner", 1000, 20);
// console.log(worker1);
// console.log(worker1.getSalary());


// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
let string = "hello world!";

// let arr = string.split(" ");



class MyString {
    reverse(string) {
        return string.split("").reverse();
    }

    ucFirst(string) {
        let newString = string[0].toUpperCase() + string.slice(1);
        return newString;
    }

    ucWords(string) {
    //     let newString = [];
    //     let arr = string.split(" ");
    //     for (let i = 0; i < arr.length; i++) {
    //         let word = arr[i][0].toUpperCase() + arr[i].slice(1);
    //         newString.push(word);
    //     }
    //     return newString.join(" ");
    
    }

}

let one = new MyString();
console.log(one.reverse(string));
console.log(one.ucFirst(string));
console.log(one.ucWords(string));


// let arr = string.split("");
// console.log(arr.reverse());
