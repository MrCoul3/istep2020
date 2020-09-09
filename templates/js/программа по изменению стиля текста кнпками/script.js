// document.querySelector('div').innerHTML = 'Другой текст';
// document.querySelector('p').outerHTML = '<h1>Абзац2</h1>';
// document.querySelector('a').insertAdjacentHTML('beforebegin', 222);
// document.querySelector('a').insertAdjacentHTML('afterbegin', 333);
// document.querySelector('a').insertAdjacentHTML('beforeend', 444);
// document.querySelector('a').insertAdjacentHTML('afterend', 555);
function greenBtn() {
document.querySelector('link').href = 'style1.css';
}
document.querySelector('#green').onclick = greenBtn;
function redBtn() {
    document.querySelector('link').href = 'style2.css';
    }
document.querySelector('#red').onclick = redBtn;
 