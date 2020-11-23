document.addEventListener("DOMContentLoaded", function () {


    let frame = document.querySelector(".frame");
    let ball = document.querySelector("#ball");
    let moveMode = false;

    ball.addEventListener("mousedown", function (e) {
        moveMode = true;
    });
    ball.addEventListener("mouseup", function (e) {
        moveMode = false;
    });

    frame.addEventListener("mousemove", function (e) {
        if (!moveMode) return;
        ball.style.left = e.clientX - 20 - frame.offsetLeft + "px";
        ball.style.top = e.clientY - 20 - frame.offsetTop + "px";

    });


    rect.addEventListener("mousedown", function (e) {
        moveMode = true;
    });
    rect.addEventListener("mouseup", function (e) {
        moveMode = false;
    });

    // frame.addEventListener("mousemove", function (e) {
    //     if (!moveMode) return;
    //     // console.log(rect.offsetLeft)
    //     console.log(e.pageX)

    //     rect.style.left = e.clientX - 10  - frame.offsetLeft + "px";
    //     rect.style.top = e.clientY  -10 - frame.offsetTop + "px";
        

    // });
    rect.addEventListener("mousemove", function (e) {
    
        console.log(e.pageX  - frame.offsetLeft)
        
        

    });



});