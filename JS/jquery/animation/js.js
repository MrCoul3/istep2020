// 1.
$(document).ready(function () {

    // 1.
    $(".title").click(function () {
        $(".text").slideUp("slow");
        $(this).next(".text").slideToggle("slow");
    });

    // 2.
    $("button").mouseover(function () {

        $(this).prev(".prompt").fadeTo("slow", 1);
    });
    $("button").mouseout(function () {

        $(this).prev(".prompt").fadeTo("slow", 0);
    });

    // 3.
    $(".img-wrap img").click(function () {
        console.log($(this).attr("src"));
        let attr = $(this).attr("src");
        $(".main > img").attr("src", attr);
    });


});