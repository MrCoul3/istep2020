document.querySelector('.menu-btn-close').hidden = true;


document.querySelector('.menu-btn-open').onclick = function() {
    document.querySelector('nav').classList.remove('hide');
    document.querySelector('.menu-btn-open').hidden = true;
    document.querySelector('.menu-btn-close').hidden = false;
}
// console.log(document.querySelector('.menu-btn-open'))
document.querySelector('.menu-btn-close').onclick = function() {
    document.querySelector('nav').classList.add('hide');
    document.querySelector('.menu-btn-close').hidden = true;
    document.querySelector('.menu-btn-open').hidden = false;
}
