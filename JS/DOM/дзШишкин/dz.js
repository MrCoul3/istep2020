/* Задание 1. */
     function numOfElements(elem) {
        return document.write(`количество элементов ${elem} на странице:   ${document.getElementsByTagName(elem).length}`);
    } 
    numOfElements( "div" );


    /* Задание 2 */

    let toDoList = prompt("Введите спикок дел", "зарядка, душ, завтрак, погладить трусы, читать, работа, бассейн, встреча");

    let toDoListArray = toDoList.split(",");
    let timeArray = [];
    for (let i = 7; i < 23; i++) {
        timeArray.push(i + ":00 ");
    }
    let ul = document.createElement("ul");
    document.body.append(ul);
    for (let i = 0; i < 5; i++) {
        ul.insertAdjacentHTML("beforeend", `<li>${timeArray[i] + toDoListArray[i]}</li>`);
    }
    ul.insertAdjacentHTML("beforeend", "<p>а эти дела лучше перенести на завтра:</p>");
    for (let i = 5; i < toDoListArray.length; i++) {
        ul.insertAdjacentHTML("beforeend", `<li>${toDoListArray[i]}</li>`);
    }
            
    