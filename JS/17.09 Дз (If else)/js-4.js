// доп задание в обменик валют давай добавим еще одну валюту "евро". Т.е. наш обменик может менять рубль-евро, евро-рубль, евро-доллар и тд.

const USD_EUR_RATE = 0.85,
      EUR_USD_RATE = 1 / USD_EUR_RATE,
      USD_RUB_RATE = 76,
      RUB_USD_RATE = 1 / USD_RUB_RATE,
      EUR_RUB_RATE = 90,
      RUB_EUR_RATE = 1 / EUR_RUB_RATE;
let currencyBuy,
сurrencySell,
sumOfCash,
operationInfo,
agreement,
course;

function enterCurrency() {
    currencyBuy = prompt("Введите название обмениваемой валюты: USD, EUR, RUB?", "USD");
    сurrencySell = prompt("На какую валюту вы хотите поменять: USD, EUR или RUB?", "EUR");
    setCourse();
}


function setCourse() {

    if (currencyBuy == "USD" && сurrencySell == "EUR") {
        course = USD_EUR_RATE;
    }

    else if (currencyBuy == "USD" && сurrencySell == "RUB") {
        course = USD_RUB_RATE;
    }

    else if (currencyBuy == "EUR" && сurrencySell == "USD") {
        course = EUR_USD_RATE;
    }

    else if (currencyBuy == "EUR" && сurrencySell == "RUB") {
        course = EUR_RUB_RATE;
    }

    else if (currencyBuy == "RUB" && сurrencySell == "USD") {
        course = RUB_USD_RATE;
    }

    else if (currencyBuy == "RUB" && сurrencySell == "EUR") {
        course = RUB_EUR_RATE;
    }

    else {
        alert("Вы неверно ввели валюту! Нужно ввести USD, EUR или RUB");
        enterCurrency();
    }
}

function exchanger() {
    sumOfCash = prompt("Введите сумму, необходимую для обмена", "100");
    operationInfo = (sumOfCash * course).toFixed(2);
    alert(`Вы получите ${operationInfo} ${сurrencySell}`);
    agreement = confirm(`Вы согласны обменять ${sumOfCash} ${currencyBuy} на ${operationInfo} ${сurrencySell}?`);
    result();
}

function result() {
    if (agreement == true) {
        alert(`Мы поменяли ${sumOfCash} ${currencyBuy} на ${operationInfo} ${сurrencySell}`);
        anotherOneChange();
    }
    else {
        alert("Увидимся в следующий раз!")
    }
}

function anotherOneChange() {
    anotherOne = confirm("Хотите выполнить еще одну операцию?");
    if (anotherOne == true) {
        enterCurrency()
        exchanger();
    }
    else {
        alert("До следующего раза!")
    }
}

enterCurrency();
exchanger();



  
