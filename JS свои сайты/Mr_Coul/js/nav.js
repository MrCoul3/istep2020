

// document.querySelector('.menu li').onmouseover = function() {
// let bgColor1 = document.createElement('div');
// bgColor1.className = 'bgColor1';
// let liMenu = document.querySelector('.menu li');
// liMenu.appendChild(bgColor1);
// }

// document.querySelector('.menu li').onmouseout = function() {
//     let removeBgColor1 = document.querySelector('.bgColor1');
//     removeBgColor1.remove();
//     }

// document.querySelectorAll('.menu li').forEach(function(element) {
//     element.onmouseover = bgColorShow;
// });

// document.querySelectorAll('.menu li').forEach(function(element) {
//     element.onmouseout = bgColorHide;
// });

// function bgColorShow() {
//     document.querySelector('.bgColor1').style.marginLeft = '0px';
//     document.querySelector('.bgColor2').style.marginLeft = '0px';
// }
// function bgColorHide() {
//     document.querySelector('.bgColor1').style.marginLeft = '-100%';
//     document.querySelector('.bgColor2').style.marginLeft = '-200%';
// }
//--------анимация при наведении на пункты меню----------
let menuLi = document.querySelectorAll('.menu li');
for (let i = 0; i<menuLi.length; i++) {
    menuLi[i].onmouseover = showAnimation;
    menuLi[i].onmouseout = hideAnimation;
}

        function showAnimation() {
            if (pageYOffset < 132) {
            this.childNodes[1].style.marginLeft = '0';
            this.childNodes[2].style.marginLeft = '0';
            } else {
                this.childNodes[2].style.marginLeft = '+100%';
                document.querySelector('.a-1').style.color = '#ee08089d';
                }
        }

        function hideAnimation(){
            if (pageYOffset < 132) {
            this.childNodes[1].style.marginLeft = '-100%';
            this.childNodes[2].style.marginLeft = '-200%';
            } else {
                this.childNodes[2].style.marginLeft = '-200%';
                }
        }
 
//---------------------------------------------
// let menuLi = document.querySelectorAll('.menu li');
// let bgColor1 = document.querySelector('.bgColor1');
// console.log(bgColor1);
// console.log(menuLi);
//     function showAnimation() {
//  bgColor1.style.marginLeft = '0px';
// }
//--------------------------------
// document.querySelector('.menu li').onmouseover = function() {
//     document.querySelector('.bgColor1').style.marginLeft = '0px';
//     document.querySelector('.bgColor2').style.marginLeft = '0px';

// }
// document.querySelector('.menu li').onmouseout = function() {
//     document.querySelector('.bgColor1').style.marginLeft = '-100%';
//     document.querySelector('.bgColor2').style.marginLeft = '-200%';

// }
//---------------------------------------------
// горизонтальная линия под меню при прокручивании страницы и смена цвета текста 
let nav = document.querySelector('.bgStyle');
let menu_a = document.querySelectorAll('.menu li a');
let logo = document.querySelector('.logo');

window.onscroll = function () {
    if (pageYOffset < 132) {
        nav.classList.remove('bottomLine');
        nav.style.background = 'transparent';
        logo.style.height = '160px';
        for (i=1; i<menu_a.length; i++) {
            menu_a[i].style.color = '#fff';
            }
    } else {
        nav.classList.add('bottomLine');
        nav.style.background = '#fff';
        logo.style.height = '140px';
        for (i=1; i<menu_a.length; i++) {
        menu_a[i].style.color = '#999999';
        }
    }
};
// console.log(pageYOffset);
// ------------------------------------------------------------

let logoImg = document.querySelector('.logo img');
logoImg.onmouseover = increaseLogoImg;
logoImg.onmouseout = decreaseLogoImg;
let linkPanelImg = document.querySelectorAll('.link-panel img');
console.log(linkPanelImg);
    for (i=0; i<linkPanelImg.length; i++) {
        linkPanelImg[i].onmouseover = increaseLinkPanelImg;
        linkPanelImg[i].onmouseout = decreaseLinkPanelImg;
    }

function increaseLogoImg() {
    logoImg.style.width  = '130px';
}
function decreaseLogoImg() {
    logoImg.style.width  = '120px';
}
function increaseLinkPanelImg(){
    this.style.opacity = '1';
}
function decreaseLinkPanelImg(){
    this.style.opacity = '0.5';
}



