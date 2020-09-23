// let num = prompt("Введите число");
let num = 20;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// Пока Num меньше 55 выводить в консоль значение Num, увеличивающееся при каждой итерации на 1 (num++)

// do {
//     console.log(num);
//     num++;
// } while (num < 56);
// Делать (выводить) в консоль число Num, увеличивая его при каждой итерации на единицу, пока Num  меньше 56.

// for (i = 1; i < num; i++) {
//     if (i == 12) {
//         break;
//     }
//     console.log(i);
// }

for (i = 1; i < num; i++) {
    if (i == 12) {
        continue;
    }
    console.log(i);
}