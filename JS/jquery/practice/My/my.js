$(document).ready(function () {



});
let btn = document.querySelector("button");

let bear = document.querySelector(".bear");
let rect = document.querySelector(".rect");

btn.addEventListener("click", function(){
    $(".bear").animate({
        "left": "+=600px",
    },{duration: 500});
    setInterval(() => {
        bear.classList.toggle("rotate");
        setTimeout(() => {
            bear.classList.toggle("rotate-reverse");
        }, 500)
    }, 550);

});


