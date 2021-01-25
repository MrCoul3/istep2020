let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector(".text");
    let output = document.querySelector("#messages");

    let params = {
        'message': input.value,
        'method': 'setMessage'
    }

    let response = fetch('/handle.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    });
        response.then(function (data) {
            return data.text();
        }).then(function (text) {
            output.innerHTML = text;
        });

    input.value = '';

});

let clearDB = document.querySelector(".delete-from-db");

clearDB.addEventListener("click", function (e) {
    // e.preventDefault();
    let  params = {
        'method': 'clearDb'
    }
    let response  = fetch('/handle.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    });

})
