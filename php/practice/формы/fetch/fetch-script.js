
document.querySelector("form").addEventListener("submit", function (e){
    e.preventDefault();
    fetch('fetch.php', {body: JSON.stringify([123, 123,123]), method: 'POST',  headers: {
            'Content-Type': 'application/json'
        }})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
})

