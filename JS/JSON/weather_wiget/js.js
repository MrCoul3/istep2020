let widgetCoord = {
    name: "widget",
};

let cookieWidget = getCookie("widget");
widget.style.left = (cookieWidget === undefined) ? 0 : JSON.parse(cookieWidget).left;
widget.style.top = (cookieWidget === undefined) ? 0 : JSON.parse(cookieWidget).top;


let widgetMove = false;
let moveElement = document.querySelector(".move");
moveElement.addEventListener("mousedown", function () {
    widgetMove = true;
});
moveElement.addEventListener("mouseup", function () {
    widgetMove = false;
});
document.addEventListener("mousemove", function (e) {
    if (!widgetMove) return;

    if (e.clientY > 79 && e.clientX > 0) {
        widget.style.left = e.clientX + "px";
        widget.style.top = e.clientY - 80 + "px";
    }

    widgetCoord.left = widget.style.left;
    widgetCoord.top = widget.style.top;

    jsonWidgetCoord = JSON.stringify(widgetCoord);
    setCookie("widget", jsonWidgetCoord);
});

let widgetBig = document.querySelector(".widget-big");
widget.addEventListener("dblclick", rollout);
let play = document.querySelector(".play");
play.addEventListener("click", rollout);

function rollout() {
    $(".widget-big").animate({
        'opacity': 1,
        'width': '408px'
    }, 500);
    $(".widget-big-data").animate({
        'opacity': 1,
    });

    $(".play").removeClass("play-return");
    $(".play").addClass("play-active");
    if (widgetBig.style.width == "408px") {
        $(".widget-big").animate({
            'opacity': 1,
            'width': '157px'
        }, 500);
        $(".widget-big-data").animate({
            'opacity': 0,
        });

        $(".play").removeClass("play-active");
        $(".play").addClass("play-return");
    }
}

let cityCoord = {
    name: "cityCoord"
};

let cookieCityCoord = getCookie("cityCoord");
let lat = (cookieCityCoord === undefined) ? 54.487542 : JSON.parse(cookieCityCoord).lat;
let long = (cookieCityCoord === undefined) ? 36.192323 : JSON.parse(cookieCityCoord).long;
$(".gps-city").html((cookieCityCoord === undefined) ? "Калуга" : JSON.parse(cookieCityCoord).city);
let inputCity = document.querySelector(".input-city");

fetchFunc(lat, long);
document.querySelector(".label-city").addEventListener("click", function () {
    gps();
});

function gps() {
    for (let i = 0; i <= 1112; i++) {
        if (cities.City[i].City.includes(inputCity.value)) {
            lat = cities.City[i].lat;
            long = cities.City[i].long;
            console.log(cities.City[i].City + " lat =" + lat + "long= " + long);

            $(".flex-input").removeClass("gps-city-input");
            $(".gps-city").css("display", "block");
            $(".gps-city").html(cities.City[i].City);
            fetchFunc(lat, long);
        } else {
            document.querySelector(".ban").classList.add("ban-active");
            inputCity.onfocus = function () {
                document.querySelector(".ban").classList.remove("ban-active");
            };
            inputCity.setAttribute("placeholder", "нет такого города")
        }
        cityCoord.lat = lat;
        cityCoord.long = long;
        cityCoord.city = $(".gps-city").html();

        jsonCityCoord = JSON.stringify(cityCoord);
        setCookie("cityCoord", jsonCityCoord);
    }
}

let weatherData = {
    name: "weatherData"
};

let cookieWeatherData = getCookie("weatherData");

$("#main-temp").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).mainTemp);
$(".season-date--season").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).season);
$(".season-date--date").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).date);
$(".feels-like-temp").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).feelsLike);
$(".wind-speed").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).windSpeed);
$(".wind-dir").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).windDir);
$(".humidity-num").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).humidity);
$(".pressure-num").html((cookieWeatherData === undefined) ? 0 : JSON.parse(cookieWeatherData).pressure);


function fetchFunc(lat, long) {
    fetch("http://194.58.122.219/test/weather-api-test2/?t=1cd95eda-7e2d-4268-8f44-bed26adc9bd0&lat=" + lat + "&lon=" + long)

        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $("#main-temp").html(data.data.fact.temp + "°");
            weatherData.mainTemp = $("#main-temp").html();
            $(".condition").css("background-image", `url(https://yastatic.net/weather/i/icons/blueye/color/svg/${data.data.fact.icon}.svg)`)
            if (data.data.fact.season == "autumn") {
                $(".season-date--season").html("осень");
                weatherData.season = $(".season-date--season").html();
            }

            $(".season-date--date").html(" " + data.data.forecasts[0].date);
            weatherData.date = $(".season-date--date").html();

            $(".feels-like-temp").html(" " + data.data.fact.feels_like + "°");
            weatherData.feelsLike = $(".feels-like-temp").html();

            document.querySelector(".wind-speed").innerHTML = (" " + data.data.fact.wind_speed + " м/c ,");
            weatherData.windSpeed = $(".wind-speed").html();

            let windDir = data.data.fact.wind_dir;
            if (windDir == "nw") $(".wind-dir").html(" СЗ");
            if (windDir == "n") $(".wind-dir").html(" С");
            if (windDir == "ne") $(".wind-dir").html("  СВ");
            if (windDir == "e") $(".wind-dir").html(" В");
            if (windDir == "se") $(".wind-dir").html(" ЮВ");
            if (windDir == "s") $(".wind-dir").html(" Ю");
            if (windDir == "sw") $(".wind-dir").html(" ЮЗ");
            if (windDir == "w") $(".wind-dir").html(" З");
            if (windDir == "c") $(".wind-dir").html(" ШТИЛЬ");
            weatherData.windDir = $(".wind-dir").html();

            $(".humidity-num").html(" " + data.data.fact.humidity + "%");
            weatherData.humidity = $(".humidity-num").html();
            $(".pressure-num").html(" " + data.data.fact.pressure_mm + " мм.рт.ст");
            weatherData.pressure = $(".pressure-num").html();

            let jsonWeatherData = JSON.stringify(weatherData);
            setCookie("weatherData", jsonWeatherData);

            $(".gps-city").click(function () {
                $(this).css("display", "none");
                $(".flex-input").addClass("gps-city-input");
            });

        });
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    });
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        'max-age': 1800
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}