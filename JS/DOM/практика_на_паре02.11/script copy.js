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
for (let i = 0; i < 3; i++) {
    inputs[i].addEventListener("focus", function () {
        for (let el of inputs) {
            el.classList.remove("input-focus");
        }
        this.classList.toggle("input-focus");
    });
}
    inputs[i].addEventListener("blur", function () {
        this.classList.remove("input-focus");
    });
    inputs[i].addEventListener("input", function (e) {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            for (let elem of arr) {
                if (e.data == elem) {
                    e.target.value = e.target.value.replace(e.data, "");
                }
        }
    });

    let submitBtn = inputs[3];
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
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault(e);
    });