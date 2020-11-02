<!-- Изменить  слово в тексте (покрасить в любой цвет ) -->

let text = document.querySelector("div").innerHTML;

let textArr = text.split(" ");
console.log(textArr);
let newAr = [];
for (let elem of textArr) {
    if (elem == "ipsum") {
        newAr.push("<span>" + elem + "</span>");
    }
    else {
        newAr.push(elem);
    }

}
document.querySelector("div").innerHTML = newAr.join(" ");



// ПСЕВДОКОД ПИСАТЬ ДЛЯ СЕБЯ ПРОГРАММУ 