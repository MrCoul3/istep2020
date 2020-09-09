document.querySelector('.button-close').hidden = true;

document.querySelector('.button').onclick = function() {
    document.querySelector('menu').classList.remove('hide');
    document.querySelector('.button').hidden = true;
    document.querySelector('.button-close').hidden = false;
}
document.querySelector('.button-close').onclick = function() {
    document.querySelector('menu').classList.add('hide');
    document.querySelector('.button').hidden = false;
    document.querySelector('.button-close').hidden = true;
}