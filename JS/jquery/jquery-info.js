/* [18:40, 09.11.2020] Иван Шишкин: https://antonshevchuk.gitbooks.io/jquery-for-beginners/content/
[18:40, 09.11.2020] Иван Шишкин: http://www.wisdomweb.ru/JQ/jquery-first.php
https://code.jquery.com/ */

/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> */

// $ - объект jquery
// jquery("document").ready(function (e) {
//     console.log("ready");
// })


// <!-- Задание 1  -->
/* $("span#meadow, span.rainbow, span[set], span[last='code']").css('color', 'red').css('fontSize', '30px');
$("span#future").css('color', 'blue').css('fontSize', '30px');

 */

// Задание 2
/* $("document").ready(function (e) {
    $("p#pmtog").css("color", "green");
    $("h3.pr1, input[type='text'], input[type='submit'], p").css("color");
    $("p.pr1").css("color", "red");

    $("input[type='button']").css("color", "orange");

    $("p.pmb1, p.pmb2, p.pmb3").css("color", "blue");

    $("div#wrap1 p.pmtobr").css("color", "brown");

    // $("img[src='mountimg2.jpg']").css("borderStyle","solid");
    $("img").first().css("borderStyle","solid");

    $("div#iwrap input[type='button']").css("color", "red");
    $("div#iwrap input[type='submit']").css("color", "red");
}) */

// СОБЫИТИЯ
// $(document).click("p.add", function(e)) что бы предотвратить ссылку на несуществующий объект 

// Задание 1 

$(document).click("#but1", function() {
    $("#par1").css("color", "green").css("fontSize", "20px");
});

// $(document).mouseover("#href1", function() {
//     // $(this).css("color", "orange");
//     console.log($(this));
// });

$("#href1")