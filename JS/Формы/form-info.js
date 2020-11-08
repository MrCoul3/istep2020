Основное (задание)
<select id="genres">
        <option value="rock">Рок</option>
        <option value="blues" selected>Блюз</option>
</select>
genres.value - // "blues"  выводит value выбранного (selected) элемента 
genres.options[genres.selectedIndex] // выводит выбранный элемент       
    genres.options[genres.selectedIndex].value
    genres.options[genres.selectedIndex].innerHTML
    // создать нвоый option с аргументами "классика", "classic" и выбранным
    option = new Option("классика", "classic", true, true);
    genres.append(option); // Добавить  Option в  <select id="genres">
       
       
       <<<<<Навигация: формы и элементы>>>>>>>>

Формы в документе входят в специальную коллекцию "document.forms.
!!!document.forms.my - форма с именем "my" (name="my")
!document.forms[0] - первая форма в документе!
form.elements. любой элемент доступен в именованной коллекции 

<fieldset> как «подформа»;  <legend>info</legend>
{/*  */
вместо form.elements.login мы можем написать form.login.

    Обратная ссылка: element.form
    Для любого элемента форма доступна через element.form

    ----------Элементы формы--------------

input.value = "Новое значение";
textarea.value = "Новый текст"; (Используйте textarea.value вместо textarea.innerHTML)
input.checked = true; // для чекбоксов и переключателей

Элемент <select> имеет 3 важных свойства:
select.options – коллекция из подэлементов <option>,
select.value – значение выбранного в данный момент <option>,
select.selectedIndex – номер выбранного <option>.

"В спецификации есть красивый короткий синтаксис для создания элемента <option></option>
[option = new Option(text, value, defaultSelected, selected);]