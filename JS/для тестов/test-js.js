for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
    let btn = document.querySelectorAll(".btn");
    console.log(btn);
    this.onclick = function () {
        if (btn.style.background == "#0011ff") {
            btn.style.background = "#00aeff";
        }
        // } else {
        //     this.style.background = "#0011ff";
        // }
    }
