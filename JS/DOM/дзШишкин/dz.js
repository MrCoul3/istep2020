/* Задание 1. */
    /* function numOfElements(elem) {
        return document.getElementsByTagName(elem).length
    } */

    /* Задание 2 */

    
    let toDoList = prompt("Введите спикок дел", "зарядка, душ, завтрак, погладить трусы, читать, работа, бассейн, встреча");
        toDoList = "зарядка, душ, завтрак, погладить трусы, читать, работа, бассейн, встреча";
    let toDoListArray = toDoList.split(",");

    // console.log(toDoListArray);
    let ul = document.createElement("ul");
    document.body.append(ul);
    
    // for (let i = 0; i < toDoListArray.length; i++) {
    //   (toDoListArray[i]);
    // }

   
    // let li = document.createElement("li");
    // ul.prepend(li);
    
    