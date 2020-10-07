// document.onclick = function (event) {
//     let classVal = event.target.className;
//     document.querySelector('.input').innerHTML = classVal;
// }
function enter(event) {
    let classVal = event.target.className;
    let data = event.target.dataset.color;
    document.querySelector('.input').innerHTML = classVal;
    document.querySelector('.input').style.color = data;
    return false;
   
}
document.onmouseover = enter;
