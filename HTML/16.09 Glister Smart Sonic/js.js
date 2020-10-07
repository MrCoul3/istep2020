
    
document.querySelector('.arrow-r').onclick = function() {
    document.querySelector('.work-mode__slider').style.marginLeft = '-350px';
}
document.querySelector('#radio-one').onclick = function() {
    document.querySelector('.work-mode__slider').style.marginLeft = '100px';
}
document.querySelector('#radio-two').onclick = function() {
    document.querySelector('.work-mode__slider').style.marginLeft = '-350px';
}
document.querySelector('#radio-three').onclick = function() {
    document.querySelector('.work-mode__slider').style.marginLeft = '-700px';
}


document.querySelector('.arrow-l').onclick = function () {
    document.querySelector('.work-mode__slider').style.marginLeft = '100px';
}

console.log(document.querySelector('.arrow-r'));