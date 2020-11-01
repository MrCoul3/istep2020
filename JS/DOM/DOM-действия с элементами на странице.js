

                // ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
                
document.createElement('div'); /* создание элемента  */

box.style.backgroundColor = "blue"; /* изменить свойство элемента  */

circle.forEach(function (item) {
        item.style.backgroundColor = "green";
    }); /* метод перебора массива элементов */




                        /* РАБОТА С КЛАССАМИ */

elem.classList.add/remove("class", "class2") – добавить/удалить класс.
elem.classList.toggle("class") – /* добавить класс, если его нет, иначе удалить. */
elem.classList.contains("class") – проверка наличия класса, возвращает true/false.



document.body.appendChild(div); /* добавить элемент в конец родительского элемента  */

flexBox.insertBefore(div, circle[0]); /* вставить элемент перед. 
 div - вставляемый эл. circle[0] перед которым вставляем */


document.body.removeChild(b); /* удалить элемент */
flexBox.removeChild(circle[1]);


document.body.replaceChild(btn[1], b); /* заменить элемент. btn[1] - заменяемый элемент, вставляется вместо элемента b, удаляя его. */


div.innerHTML = "<h3>Hello world!</h3>"; /* Добавить текст в тег можно вставлять с тегами */
div.textContent = "Hello world!";  /* внутренние теги будут отображаться как текст  */

/* Действия с атрибутами  */

elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.