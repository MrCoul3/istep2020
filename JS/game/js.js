let frame = document.querySelector(".frame");
let wallet = document.querySelector(".wallet");
let rub = document.querySelector(".rub");
let leftCoordWallet = wallet.getBoundingClientRect().left;
let topCoordWallet = wallet.getBoundingClientRect().top
let leftCoordRub = rub.getBoundingClientRect().left;
// console.log( parseInt(Math.random() * 500));

frame.addEventListener("mousemove", function (e) {
    if (e.clientX > 25 && e.clientX < 475) {
        wallet.style.left = e.clientX - 25 + "px";
    }

});

function drop() {

    if (parseFloat(getComputedStyle(rub).top) < 450) {
        rub.style.top = (parseFloat(getComputedStyle(rub).top) + 1) + "px";
    } 
    let rubY = parseFloat(rub.style.top);
    // console.log(rub.style.left);
    if ((rubY == 449) && (leftCoordRub > (parseFloat(wallet.style.left) -10)) && ((leftCoordRub < (parseFloat(wallet.style.left) +30))))  {
        console.log("catch");
        rub.style.left = parseInt(Math.random() * 500) + "px";
        // leftCoordRub = parseInt(Math.random() * 500);
        rub.style.top = "0px";

    } 

}
    setInterval(drop, 1);
