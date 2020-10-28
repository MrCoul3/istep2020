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
// console.log(document.getElementsByClassName("btn"));


// function changeBtn() {
//     for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
//         if (document.getElementsByClassName("btn")[i].style.background != "#0011ff") {
//             document.getElementsByClassName("btn")[i].style.background = "#0011ff";
//         } else {

//         }
//         // console.log(document.getElementsByClassName("btn")[i]);
//     }
// }
// changeBtn();

// function changeBtn() {
//     if (document.querySelectorAll(".btn")[0].style.background = "#00aeff");
//     document.querySelector(".btn1").style.background = "#0011ff"
// }