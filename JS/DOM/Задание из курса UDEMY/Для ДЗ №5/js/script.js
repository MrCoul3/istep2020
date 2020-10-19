// 1. Восстановить порядок в меню, добавить пятый пункт

let menu = document.querySelector(".menu");
console.log(menu);

let fiveMenuItem = document.createElement("li");
console.log(fiveMenuItem);
fiveMenuItem.classList.add("menu-item");
fiveMenuItem.textContent = "Пятый пункт";

menu.appendChild(fiveMenuItem);

let menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);

menu.replaceChild(menuItems[1], menuItems[2]);
menu.insertBefore(menuItems[2], menuItems[1]);

// 2. Заменить картинку заднего фона на другую из папки img

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

// 3. Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple";

// 4. Удалить рекламу со страницы

let adv = document.querySelector(".adv");
let column = document.querySelectorAll(".column");
column[1].removeChild(adv);

// 5. Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let answer = prompt("Какое у Вас отношение к технике Apple?");
console.log(answer);
let promp = document.querySelector(".prompt");
console.log(promp);
promp.textContent = answer;