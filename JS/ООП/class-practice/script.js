let man = new Man(180, 70, 18, 'm', 'Nik', 123345, 'black');
// console.log(man);

let header = new Header('Hello', 'World!');
console.log(header)
header.render('header');
Header.hello('work');

let newHeader = new NewHeader('New Hello', 'New World', 'GOGOGO');
console.log(newHeader.hero);
newHeader.hero = 'new Hero';

console.log(newHeader);
newHeader.render('header');

// let a = {
//     a1: 'obj a1',
//     a2: function () {
//         console.log('method a2')
//     },
//     _a3: 'ddd',
//     set a3(x){
//        return  this._a3 = x;
//     }
// }
// let b = {
//     b1: 'obj b1',
// }
// // b.__proto__ = a;
// Object.setPrototypeOf(b, a);
// console.log(b.a1)
// console.log(b.a2)
// console.log(b.b1)
// console.log(b.__proto__.a1)
// b.a3 = 300;
// console.log(a)

function getCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}
let count = getCounter();
console.log(count())
console.log(count())
console.log(count())

