let frame = document.querySelector(".frame");
let wallet = document.querySelector(".wallet");
let rubs = document.querySelectorAll(".rub");
let rub1 = document.querySelector(".rub-1");
let rub2 = document.querySelector(".rub-2");
let rub3 = document.querySelector(".rub-3");

rubs.forEach(function(item, i) {
    item.style.left = parseInt(Math.random() * 480) + "px";
    let rub = "rub" + i;
    
});
    


// rub1.style.left = parseInt(Math.random() * 480) + "px";
// rub2.style.left = parseInt(Math.random() * 480) + "px";
// rub3.style.left = parseInt(Math.random() * 480) + "px";

frame.addEventListener("mousemove", function (e) {
    if (e.clientX > 25 && e.clientX < 475) {
        wallet.style.left = e.clientX - 25 + "px";
    }
});

function drop(elem) {
    if (parseFloat(getComputedStyle(elem).top) < 500) {
        elem.style.top = (parseFloat(getComputedStyle(elem).top) + 3) + "px";
    } 
    let rubY = parseFloat(elem.style.top);
    let rubX = parseFloat(elem.style.left);
    let wallX = parseFloat(wallet.style.left);
    
    if ((rubY == 450) && (rubX > (wallX)) && (rubX < (wallX + 30)))  {
        console.log("catch");
        elem.style.left = parseInt(Math.random() * 480) + "px";
        elem.style.top = "0px";

    } 
    if ( (rubY > 490)  ) {
        elem.style.left = parseInt(Math.random() * 480) + "px";
        console.log("false")
        elem.style.top = "0px";
    }
}

    // setInterval("drop(rub1)", 2);
    // setInterval("drop(rub2)", 15);
    // setInterval("drop(rub3)", 10);


























/* let frame = document.querySelector(".frame");
let wallet = document.querySelector(".wallet");
let rub = document.querySelectorAll(".rub");
let rub1 = document.querySelector(".rub-1");
let rub2 = document.querySelector(".rub-2");

let leftCoordWallet = wallet.getBoundingClientRect().left;
let topCoordWallet = wallet.getBoundingClientRect().top


rub1.style.left = parseInt(Math.random() * 500) + "px";
// rub2.style.left = parseInt(Math.random() * 500) + "px";


frame.addEventListener("mousemove", function (e) {
    if (e.clientX > 25 && e.clientX < 475) {
        wallet.style.left = e.clientX - 25 + "px";
    }
});



function drop() {

    if (parseFloat(getComputedStyle(rub1).top) < 500) {
        rub1.style.top = (parseFloat(getComputedStyle(rub1).top) + 3) + "px";
    }
    let rubY = parseFloat(rub1.style.top);
    let rubX = parseFloat(rub1.style.left);
    let wallX = parseFloat(wallet.style.left);

    if ((rubY == 450) && (rubX > (wallX - 10)) && (wallX + 30)) {
        console.log("catch");
        rubX = parseInt(Math.random() * 500) + "px";
        rubY = "0px";

    }
    if ((rubY > 490)) {
        console.log("false")
        rubY = "0px";
    }

}


// setInterval(drop, 2); */