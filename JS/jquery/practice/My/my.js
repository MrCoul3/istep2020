$(document).ready(function(e){

    function rotate() {
        let rect = document.querySelector(".rectangle");
        
        // rect.style.transform = `rotate(${deg}deg)`;
        // document.querySelector(".rectangle").style.rotate = deg + "deg";

    }

    setInterval(rotate, 1000);

    $("button").click(function(e){

        $(".rectangle").animate({top: "+=100px", height: "100px", width: "100px"}).animate({left: "+=200px"}).animate({left: "-200px", top: "+=100px"});
    });



});