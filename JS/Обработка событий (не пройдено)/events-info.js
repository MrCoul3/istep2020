
let btn = document.getElementById("btn");
btn.onclick = function(event) {
    console.log(event.type + event.currentTarget);
    console.log(event.clientX + ":" + event.clientY);
}

// #### Некоторые свойства объекта event #### :
// > [ event.type ]  -Тип события, в данном случае "click".
// > [ event.currentTarget ]  - Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this
// > [ event.clientX / event.clientY ] - Координаты курсора в момент клика относительно окна, для событий мыши.