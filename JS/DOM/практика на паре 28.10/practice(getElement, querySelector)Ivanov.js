/*  Задание 1 

Как найти?… в таблице https://learn.javascript.ru/task/find-elements/table.html */
// Таблицу с id="age-table".
document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три).
// решение 1
document.getElementById("age-table").getElementsByTagName("label");
// решение 2 
for (let label of document.querySelectorAll("#age-table label")) {
    console.log(label);
}
// Первый td в этой таблице (со словом «Age»).
document.querySelector("#age-table  td")
// Форму form с именем name="search".
document.getElementsByName("search")[0];
// Первый input в этой форме.
document.getElementsByName("search")[1]
// Последний input в этой форме.
document.getElementsByName("search")[0].lastElementChild;

