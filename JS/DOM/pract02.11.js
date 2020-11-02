/* // 1
let text = document.querySelector("div").innerHTML;

let textArr = text.split(" ");
console.log(textArr);
let newAr = [];
for (let elem of textArr) {
    if (elem == "ipsum") {
        newAr.push("<span>" + elem + "</span>");
    }
    else {
        newAr.push(elem);
    }

}
document.querySelector("div").innerHTML = newAr.join(" ");

 */

let clickBtn = document.querySelector(".click");
let form =  document.querySelector(".wrap");

clickBtn.addEventListener("click", function() {
    document.body.classList.add("background");
    form.classList.add("active");
});
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
    document.body.classList.remove("background");
    form.classList.remove("active");
}); 

let submit = document.querySelector("input[type='submit']");
submit.addEventListener("click", function(e) {
    e.preventDefault();
})

let nameInput = document.querySelector("input[type='text']");
nameInput.addEventListener("focus", function() {
    // document.querySelector(".prompt").classList.add("active");
    document.querySelector(".prompt").style.visibility = 'visible';
});
nameInput.addEventListener("blur", function() {
    // document.querySelector(".prompt").classList.add("active");
    document.querySelector(".prompt").style.visibility = 'hidden';
});
nameInput.addEventListener("keydown", function(e) {
    // document.querySelector(".prompt").classList.add("active");
    document.querySelector(".prompt").style.visibility = 'hidden';
    
});

nameInput.addEventListener("keyup", function(e) {
//    console.log(typeof e.key);
let arr = [1,2,3,4,5,6,7,8,9,0];
for (let elem of arr) {
    if (e.key == elem) {
    document.querySelector(".prompt").style.visibility = 'visible';
    }
}
  
    
});


