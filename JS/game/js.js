let frame = document.querySelector(".frame");
let wallet = document.querySelector(".wallet");
let rub = document.querySelector(".rub");
let leftCoordWallet = wallet.getBoundingClientRect().left;
let topCoordWallet = wallet.getBoundingClientRect().top
let leftCoordRub = rub.getBoundingClientRect().left;

rub.style.left = parseInt(Math.random() * 500) + "px";
frame.addEventListener("mousemove", function (e) {
    if (e.clientX > 25 && e.clientX < 475) {
        wallet.style.left = e.clientX - 25 + "px";
    }
});

function drop() {

    if (parseFloat(getComputedStyle(rub).top) < 500) {
        rub.style.top = (parseFloat(getComputedStyle(rub).top) + 3) + "px";
    } 
    let rubY = parseFloat(rub.style.top);
    let rubX = parseFloat(rub.style.left);
    let wallX = parseFloat(wallet.style.left);
    
    // console.log(rub.style.left);
    if ((rubY == 450) && (rubX > (wallX -10)) && (wallX +30))  {
        console.log("catch");
        rub.style.left = parseInt(Math.random() * 500) + "px";
        // leftCoordRub = parseInt(Math.random() * 500);
        rub.style.top = "0px";

    } 
    if ( (rubY > 490)  ) {
        console.log("false")
        rub.style.top = "0px";
    }

}
    setInterval(drop, 2);
