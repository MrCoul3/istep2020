
let form = document.querySelector(".month-change");
let monthSelect = document.querySelector(".month-expenses");
console.log(monthSelect.value);
// let coming = document.querySelector("select[name='coming']");
// let summ = document.querySelector("input[name='summ']");
// let comment = document.querySelector("input[name='comment']");
// let currency = document.querySelector("select[name='currency']");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // if (summ.value === '' || comment.value === '') {
        //     summ.setAttribute('placeholder', 'заполните поле');
        //     comment.setAttribute('placeholder', 'заполните поле');
        // } else {
        //     summ.setAttribute('placeholder', 'сумма');
        //     comment.setAttribute('placeholder', 'коммент');
            let obj = {
                month: monthSelect.value,
                // coming: coming.value,
                // summ: summ.value,
                // comment: comment.value,
                // currency: currency.value,
                // date: new Date(),
            }

            fetch('buhgalter.php', {
                body: JSON.stringify(obj), method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return data;
                });
            // summ.value = '';
            // comment.value = '';
        });



