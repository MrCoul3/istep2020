$("input[type='submit']").click(function (e) {
    
    e.preventDefault();
    let  long = $("input[name='long']").val();
    let lat = $("input[name='lat']").val();
    let url = "http://194.58.122.219/test/weather-api-test2/?t=1cd95eda-7e2d-4268-8f44-bed26adc9bd0&lat=" + lat + "&lon=" + long;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let currTemp = data.data.fact.temp;
            console.log(currTemp);
            $("#curr-temp").html(currTemp + "°");
        });
});

