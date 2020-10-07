function hello() {
    console.log('hello');
}
let btn = document.querySelector('#btn');
// btn.hidden = true;
btn.onclick = hello;
let showModal = document.querySelector('#modal-show'); // получили кнопку SHOW
let modal = document.querySelector('.modal');

function show() {
    // modal.hidden = true;
    modal.style.display = 'block';
}
showModal.onclick = show;
function hide() {
    modal.style.display = 'none';
}
let hideModal = document.querySelector('#modal-hide');
hideModal.onclick = hide;
modal.style.borderRadius = '30px';
modal.style.border = '30px';