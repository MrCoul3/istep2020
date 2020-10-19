// document - объект, имеет свои методы (напр. getElementById()) 

                // ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

// получить элемент по id
let b = document.getElementById('box'); 
console.log(b);

// получить элемент по тегу. если тегов много, то создается псевдомассив.
let btn = document.getElementsByTagName('button');
// что бы получить нужный элемент из псевдомассива: 
console.log(btn[1]) 

// let circle = document.getElementsByClassName('circle');
// console.log(circle);
let circle = document.querySelectorAll(".circle");

// Метод querySelectorAll
let query = document.querySelectorAll('#query .wrapper .container');
// может иметь вложенность
// имеет метод forEach

// Метод querySelector получает только ПЕРВЫЙ элемент на странице
let circle1 = document.querySelector(".circle");
console.log(circle1);


                // ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
                

// изменить свойство элемента 
box.style.backgroundColor = "blue";

// метод перебора массива элементов
circle.forEach(function (item) {
        item.style.backgroundColor = "green";
    });
// создание элемента 
let div = document.createElement('div');
console.log(div);
// работа с классами
// добавление класса к элементу 
div.classList.add("black");


// добавить элемент в конец родительского элемента 
// document.body.appendChild(div);
let flexBox = document.querySelector(".flex-box");
// flexBox.appendChild(div);

// вставить элемент перед
flexBox.insertBefore(div, circle[0]); /* div - вставляемый эл. circle[0] перед которым вставляем */

// удалить элемент
// document.body.removeChild(b);
flexBox.removeChild(circle[1]);

// заменить элемент 
document.body.replaceChild(btn[1], b); /* btn[1] - заменяемый элемент, вставляется вместо элемента b, удаляя его. */

// Добавить текст в тег 
// div.innerHTML = "<h3>Hello world!</h3>"; можно вставлять с тегами
div.textContent = "Hello world!"; // внутренние теги будут отображаться как текст 


