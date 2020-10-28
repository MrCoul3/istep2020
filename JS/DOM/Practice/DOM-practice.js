/* Задание 1 */
/* function sendRandomNumber() {
    document.getElementsByTagName("p")[1].innerHTML = parseInt(Math.random() * 100);
}
document.getElementsByTagName("button")[0].onclick = sendRandomNumber;
 */
/* ------------------------------------------------------------------ */

/* Задание 2 */

/* document.oncontextmenu = function (){return false};

document.querySelector(".wrap").onmousemove = function (e) {
    // console.log(e.clientX);
    document.querySelector(".x").innerHTML = e.clientX;
    document.querySelector(".y").innerHTML = e.clientY;
}
document.querySelector(".wrap").onclick = function (e) {
     if (e.which == 1) {
         document.querySelector(".which").innerHTML = "Левая";
     } else if (e.which == 3) {
        document.querySelector(".which").innerHTML = "Правая";
     }
}
? не работает правая кнопка мыши */
/* ------------------------------------------------------------------ */

 /* Задание 3 */

/* let p = document.getElementsByTagName("p")[0];
document.getElementsByTagName("button")[0].onclick = function () {
    if (p.style.display == "none") p.style.display = "block";
    else p.style.display = "none";
} */

/* Задание 4 */
// console.log(document.getElementsByClassName("btn").length)

for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
    document.querySelectorAll(".btn")[i].onclick = function() {
        document.querySelectorAll(".btn")[i].style.background = "#0011ff";
    } 
}


