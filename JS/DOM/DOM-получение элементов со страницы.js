
                // ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

document.getElementById('box');/*  получить элемент по id */
document.getElementByName(); /* получить элемент по атрибуту name: */
document.getElementsByTagName('button'); /* получить элемент по тегу. если тегов много, то создается псевдомассив. */
document.querySelectorAll(".circle")[i]; /* что бы получить нужный элемент из псевдомассива:  */
let query = document.querySelectorAll('#query .wrapper .container'); /* Метод querySelectorAll -  может иметь вложенность, имеет метод forEach, for(elem of query)\ */
document.querySelector(".circle"); /* Метод querySelector получает только ПЕРВЫЙ элемент на странице */
document.querySelector("input[type='button']");
    
>>>>>>>>>>>[РАБОТА С ТАБЛИЦАМИ]<<<<<<<<<<<<<
// https://learn.javascript.ru/dom-navigation
table.tBodies – коллекция элементов таблицы <tbody></tbody>
table.rows – коллекция строк <tr> таблицы.
tr.cells (table.rows[i].cells) - коллекция <td> и <th> ячеек, находящихся внутри строки <tr>
table.rows[0].cells[0] - выводит первую ячейку в таблице



               