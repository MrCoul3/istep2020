

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let signBtn = document.querySelectorAll(".sign");

for (let elem of signBtn) {
    elem.addEventListener("mouseover", function () {
        elem.classList.add("sign-active");
    });
    elem.addEventListener("mouseout", function () {
        elem.classList.remove("sign-active");
    });
    elem.addEventListener("mousedown", function () {
        elem.classList.add("sign-click");
    });
    elem.addEventListener("mouseup", function () {
        elem.classList.remove("sign-click");
    });
    elem.onselectstart = () => false;

}
let regForm = document.querySelector(".registration");

signBtn[0].addEventListener("click", function () {
    regForm.classList.add("registration-active");
});

let closeBtn = document.querySelector(".close");

closeBtn.addEventListener("mouseover", function () {
    closeBtn.classList.add("close-active");
});
closeBtn.addEventListener("mouseout", function () {
    closeBtn.classList.remove("close-active");
});
closeBtn.onselectstart = () => false;

closeBtn.addEventListener("click", function () {
    regForm.classList.remove("registration-active");
});

let inputs = document.querySelectorAll("input");
let banText = document.querySelector(".ban-text");
let prompts = document.querySelectorAll(".prompt")
for (let i = 0; i < 3; i++) {
    inputs[i].addEventListener("focus", function () {
        for (let el of inputs) {
            el.classList.remove("input-focus");
        }
        this.classList.toggle("input-focus");
        prompts[i].classList.add("prompt-active");
    });

    inputs[i].addEventListener("blur", function () {
        this.classList.remove("input-focus");
        prompts[i].classList.remove("prompt-active");
    });
    inputs[0].addEventListener("input", function (e) {

        for (let elem of arrNumbers) {
            if (e.data == elem) {
                e.target.value = e.target.value.replace(e.data, "");
                banText.classList.add("ban-text-active");
            }
        }
    });
    inputs[0].addEventListener("keydown", function (e) {
        let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (let elem of arrNumbers) {
            if (e.key != elem) {
                banText.classList.remove("ban-text-active");
            }
        }
    });
    
    let batTel = document.querySelector(".ban-tel");
    inputs[1].addEventListener("input", function (e) {
        for (let elem of arr_en) {
            if (e.target.value.includes(elem) == true) {
                e.target.value = e.target.value.replace(e.data, "");
                batTel.classList.add("ban-tel-active");
            }
        }
    });
    inputs[1].addEventListener("keydown", function (e) {
        for (let elem of arr_en) {
            if (e.key.includes(elem) == false) {
                batTel.classList.remove("ban-tel-active");
            }
        }
    });
}
let pswInput = inputs[2];
// console.log(pswInput)
let submitBtn = inputs[3];
let banPswLength = document.querySelector(".ban-psw-length");
let banPswCase = document.querySelector(".ban-psw-case");
pswInput.addEventListener("input", function(e) {
    if (e.target.value.length < 6) {
        banPswLength.classList.add("ban-psw-active");
    } else  banPswLength.classList.remove("ban-psw-active");
});
// console.log(pswInput.value)
submitBtn.addEventListener("click", function() {
    for (el of arr_EN) {
        for (elem of arrNumbers) {
            if (pswInput.value.includes(el) == false || pswInput.value.includes(elem) == false) {
                banPswCase.classList.add("ban-psw-active");
            }
            else {
                banPswCase.classList.remove("ban-psw-active");
                regForm.submit();
            }
    }
}
});


submitBtn.addEventListener("mouseover", function () {
    this.classList.add("submit-active");
});
submitBtn.addEventListener("mouseout", function () {
    this.classList.remove("submit-active");
});
submitBtn.addEventListener("mousedown", function () {
    this.classList.add("submit-click");
});
submitBtn.addEventListener("mouseup", function () {
    this.classList.remove("submit-click");
});


//  ? как поставить transition На display block/none 