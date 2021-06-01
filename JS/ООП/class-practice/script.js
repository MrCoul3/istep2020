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

