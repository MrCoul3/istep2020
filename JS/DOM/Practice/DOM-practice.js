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
/* 
for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
    document.querySelectorAll(".btn")[i].onclick = function() {

        this.style.background = "#0011ff";
    } 
} */


function activateBtn() {
    for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
        document.querySelectorAll(".btn")[i].style.background = "#0011ff";
    }
    
} 

/* let menuLi = document.querySelectorAll('.menu li');
console.log(menuLi);

for (let i = 0; i<menuLi.length; i++) {
    menuLi[i].onmouseover = showAnimation;
    menuLi[i].onmouseout = hideAnimation;

}
        function showAnimation() {
            this.childNodes[1].style.marginLeft = '0';
            this.childNodes[2].style.marginLeft = '0';
        }

     function hideAnimation(){
        this.childNodes[1].style.marginLeft = '-100%';
        this.childNodes[2].style.marginLeft = '-200%';
     }
 */