/*                                          Практическое задание №4
                                                 Модуль 2
                                ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
                                  ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
                                    ВВЕДЕНИЕ В ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ
                                            ПРОГРАММИРОВАНИЕ
 */
                                 /* Задание 1
Реализовать класс PrintMaсhine, которой состоит из:
■ размера шрифта;
■ цвета шрифта;
■ семейства шрифта;
■ метода print(), который принимает текст и печатает его
соответствующим шрифтом с помощью document.write().
Создать объект такого класса и продемонстрировать работу
метода */

// РЕШЕНИЕ
/* 
class PrintMaсhine {
    constructor(fontSize, fontColor, fontFamily) {
        this.font_size = fontSize;
        this.font_color = fontColor;
        this.font_family = fontFamily;
        
    }
    print() {
        let text = prompt("");
        document.write(`<span style='font-size: ${this.font_size}; color: ${this.font_color}; font-family: ${this.font_family} '> ${text} </span>`);
    }
}

let test = new PrintMaсhine("30px", "#FF0000", "Geneva, Arial, Helvetica, sans-serif");
console.log(test);
console.log(test.print()); */

                                 /* Задание 2
Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию в таком виде, как на рисунке 1.Обратите внимание на то, как выводится дата:
■если с даты публикации прошло менее дня, то выводится «сегодня»;
■если с даты публикации прошло менее недели, то выводится «N дней назад»;
■ в остальных случаях, полная дата в формате «дд.мм.гггг».
 */
/* class News {
    constructor(title, text, tegs, dateOfPub) {
        this.title = title;
        this.text = text;
        this.tegs = tegs;
        this.dateOfPub = dateOfPub;
    }
    set dateOfPub(value) {
        let datedateOfPubArr = value.split(".");
        if ((dateArr[0] - datedateOfPubArr[0]) < 1) {
            this._dateOfPub = "Сегодня";
        } else if ((dateArr[0] - datedateOfPubArr[0]) < 7) {
            this._dateOfPub = `${dateArr[0] - datedateOfPubArr[0]} дней назад`;
        } else {
            this._dateOfPub = value;
        }

    }
    get dateOfPub() {
        return this._dateOfPub;
    }

    print() {
        document.write(`<h2>${this.title}</h2>${this.dateOfPub}<br><p>${text}</p><p>${tegArray.join(" ")}</p>`);
    }
}

let currentDate = "19.10.2020";
let dateOfPub = "19.10.2020";
let dateArr = currentDate.split(".");
let title = "Заголовок";
let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi magnam aperiam aspernatur, impedit ratione tenetur deleniti ea eius est? Sint dolore in esse corrupti incidunt beatae tempore facilis. Rem, explicabo."
let tegArray = ["#lorem", "#ipsum", "#text"];


let oneNews = new News(title, text, tegArray, dateOfPub);
console.log(oneNews);
console.log(oneNews.print());
 */

                                 /* Задание 3
Реализовать класс, описывающий новостную ленту.
Класс должен содержать:
■ массив новостей;
■ get-свойство, которое возвращает количество новостей;
■ метод для вывода на экран всех новостей;
■ метод для добавления новости;
■ метод для удаления новости;
■ метод для сортировки новостей по дате (от последних новостей до старых);
■ метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).

Продемонстрировать работу написанных методов. */

let news1 = {
    text: "1Lorem ipsum dolor...",
    date: "20.10.2020"
};
let news2 = {
    text: "2Lorem ipsum dolor...",
    date: "11.07.2022"
};
let news3 = {
    text: "3Lorem ipsum dolor...",
    date: "12.11.2019"
};
let news4 = {
    text: "4Lorem ipsum dolor...",
    date: "14.11.2019"
};
let newsArray = [news1, news2, news3];

// console.log(newsArray[0].text);
// set срабатывает при передаче свойства. а get при обращении к свойству

class NewsFeed {
    constructor(newsArray) {
        this.news = newsArray;
        
    }
    set news(value) {
        this._news = value;
        this.numOfNews = value.length;
    }
    get news() {
        return this._numOfNews;
    }
    printAllNews() {
        for (let i = 0; i < newsArray.length; i++) {
            document.write(`<i>${i+1}ая новость </i><p>${newsArray[i].text}</p>`);
        }
    }
    addNews(value) {
        newsArray.push(value);
    }
    deleteNews() {
        let index = prompt("Укажите, какой элемент массива следует удалить?");
        newsArray.splice(index-1, 1);
    }
    sortByDate(newsArray) {
         
    }
    
}



newsArray.sort((b,a) => a.date.split(".")[0] - b.date.split(".")[0]);
newsArray.sort((b,a) => a.date.split(".")[1] - b.date.split(".")[1]);
newsArray.sort((b,a) => a.date.split(".").join("") - b.date.split(".").join(""));
console.log(newsArray);

newsArray.sort(function(a, b) {
    
})