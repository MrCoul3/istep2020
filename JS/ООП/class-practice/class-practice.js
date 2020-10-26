
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
        let dateOfPubArr = value.split(".");
        if ((dateArr[0] - dateOfPubArr[0]) < 1) {
            this._dateOfPub = "Сегодня";
        } else if ((dateArr[0] - datedateOfPubArr[0]) < 7) {
            this._dateOfPub = `${dateArr[0] - dateOfPubArr[0]} дней назад`;
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
/* https://learn.javascript.ru/datetime */
/* let news4 = {
    text: "4Lorem ipsum dolor...",
    date: "14.11.2019"
};
let newsArray = [{
        text: "1Lorem ipsum dolor...",
        date: "10.10.2020",
        teg: "#one"
    },
    {
        text: "2Lorem ipsum dolor...",
        date: "11.12.2020",
        teg: "#one"
    },
    {
        text: "3Lorem ipsum dolor...",
        date: "12.11.2020",
        teg: "#three"
    }
];
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
        newsArray.splice(index - 1, 1);
    }
    // sortByDate(newsArray) {
    //     for (let i = 0; i < newsArray.length; i++) {
    //         newsArray[i].date = +newsArray[i].date.split(".")[0] + +(newsArray[i].date.split(".")[1] * 30) + +(newsArray[i].date.split(".")[2] * 365);
    //         newsArray.sort((b, a) => a.date - b.date);
    //     }
    // }
    filterByTegs(newsArray) {
        return newsArray.filter(item => item.teg == "#three");
    }
}
let news = new NewsFeed(newsArray);
// console.log(news.filterByTegs(newsArray));
 */
/* 
                    Практическое задание №5
                    Модуль 2
                    ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
                    ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
                    ВВЕДЕНИЕ В ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ
                    ПРОГРАММИРОВАНИЕ */

/*                              Задание 1
Реализовать класс Button, который содержит ширину, высоту,
текст кнопки и метод showBtn(), который выводит кнопку на экран
с помощью тега button и функции document.write().
Реализовать класс BootstrapButton, унаследовав его от класса
Button.Добавить поле color и переопределить метод showBtn()
так, чтобы кнопка выводилась со стилями и указанным цветом. */

/* class Button {
    constructor(width, heigth, text) {
        this.width = width;
        this.heigth = heigth;
        this.text = text;
    }
    showBtn() {
        document.write(`<button style=" height:${this.heigth}; width: ${this.width};">${this.text}</button>`)
    }
}
let btn = new Button("100px", "30px", "label");
btn.showBtn();
class BootstrapButton extends Button {
    constructor(color, width, heigth, text) {
        super(width, heigth, text);
        this.color = color;
    }
    showBtn() {
        document.write(`<button style=" height:${this.heigth}; width: ${this.width};color: ${this.color};">${this.text}</button>`)
    }
}
let newBtn = new BootstrapButton("#f00", "200px", "50px", "newButton");
console.log(newBtn);
newBtn.showBtn(); */



/*                             Задание 2
Реализовать класс, описывающий геометрическую фигуру со
свойствами и методами:
■ get-свойство для получения названия фигуры;
■ метод для вывода информации о фигуре (стороны и их
длина);
■ метод для вычисления площади фигуры;
■ метод для вычисления периметра фигуры.
Реализуйте классы-наследники: квадрат, прямоугольник и
треугольник. Переопределите методы вывода и вычислений в
классах-наследниках.
Создайте массив с различными фигурами и выведите информацию о каждой фигуре, включая площадь и периметр. */
/* 
class Figure {
    name = "";
    constructor(params) {
        this.params = params;
    }
    get() {
        return this.name;
    }
    
}

class Rectangle extends Figure {
    constructor(params) {
        super(params);
        this.name = "прямоугольнк"
    }
    getArea() {
        return this.params[0] * this.params[1];
    }
    getPerimeter() {
        return this.params[0] * 2 + this.params[1] * 2
    }
}
class Square extends Figure {
    constructor(params) {
        super(params);
        this.name = 'Треугольник';
    }
    getArea() {
        //super.getArea();
        return this.params[0] ** 2;
    }
    getPerimeter() {
        return this.params[0] * 4;
    }
}

class Triangle extends Figure {
    constructor(params) {
        super(params);
        this.name = 'Треугольник';
    }

    getArea() {
        let height = this.getHeight(this.params[0], this.params[2]);
        return (height * this.params[0]) / 2;
    }

    getHeight(a, b) {
        return (a * b) / Math.sqrt((a ** 2 + b ** 2));
    }
    getPerimeter() {
        return this.params[0] + this.params[1] + this.params[2]
    }
}

let objSquare = new Square([2, 2, 2, 2]);
console.log(objSquare.getArea());
console.log(objSquare.get());

let objTriangle = new Triangle([1, 2, 3]);
console.log(objTriangle.getArea());

let objRectangle = new Rectangle([2, 3, 2, 3]);
console.log(objRectangle.getArea());
console.log(objRectangle.getPerimeter());
console.log(objRectangle.get());
 */


/*                          Задание 3
Реализуйте класс ExtentedArray, унаследовав его от стандартного класса Array и добавив следующие методы:
■ метод getString(separator) – для получения строки со
всеми элементами массива, перечисленными через указанный разделитель: запятая, тире, пробел и т. д.;
■ метод getHtml(tagName) – для получения строки с html
кодом, где каждый элемент массива будет обернут в указанный тег (учтите, если указывается тег li, то все элементы дополнительно необходимо обернуть в ul).
Создайте объект класса ExtentedArray, заполните его данными и выведите на экран результаты работы методов getString()
и getHtml() */
