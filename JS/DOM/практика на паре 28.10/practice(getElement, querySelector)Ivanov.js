/*  Задание 1 
Как найти?… в таблице https://learn.javascript.ru/task/find-elements/table.html */
// Таблицу с id="age-table".
1 let table = document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три).
1 for (let i = 0; i < table.getElementsByTagName("label").length; i ++) {
    console.log(table.getElementsByTagName("label")[i]);
}
2 for (let label of document.querySelectorAll("#age-table label")) {
    console.log(label);
}
// Первый td в этой таблице (со словом «Age»).
1 table.querySelector("td");
2 table.rows[0].cells[0];
3 table.getElementsByTagName("td")[0];
// Форму form с именем name="search".
1 let form = document.getElementsByName("search")[0];
2 document.querySelector("form[name='search']");
// Первый input в этой форме.
1 document.getElementsByName("search")[1];
2 form.querySelector("input");
// Последний input в этой форме.
1. document.getElementsByName("search")[0].lastElementChild;
2. let allInputs = form.querySelectorAll("input")
allInputs[allInputs.length - 1];

